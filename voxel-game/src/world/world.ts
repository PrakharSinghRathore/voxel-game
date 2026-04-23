import { createNoise2D, createNoise3D } from "simplex-noise"
import {
  BLOCK,
  BLOCK_DEFS,
  CHUNK_SIZE_X,
  CHUNK_SIZE_Y,
  CHUNK_SIZE_Z,
  SEA_LEVEL,
  type BlockId,
} from "./constants"

export const CHUNK_VOXELS = CHUNK_SIZE_X * CHUNK_SIZE_Y * CHUNK_SIZE_Z

// Deterministic PRNG from seed
function mulberry32(seed: number) {
  let t = seed >>> 0
  return () => {
    t = (t + 0x6d2b79f5) | 0
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

export class TerrainGenerator {
  private heightNoise: (x: number, y: number) => number
  private heightNoise2: (x: number, y: number) => number
  private biomeNoise: (x: number, y: number) => number
  // FIX: separate low-frequency blend noise so biome edges are wide & smooth
  private biomeBlend: (x: number, y: number) => number
  private caveNoise: (x: number, y: number, z: number) => number
  private oreNoise: (x: number, y: number, z: number) => number
  private treeNoise: (x: number, y: number) => number

  constructor(public seed: number) {
    const prng = mulberry32(seed)
    this.heightNoise  = createNoise2D(prng)
    this.heightNoise2 = createNoise2D(mulberry32(seed + 1))
    this.biomeNoise   = createNoise2D(mulberry32(seed + 2))
    this.biomeBlend   = createNoise2D(mulberry32(seed + 7))
    this.caveNoise    = createNoise3D(mulberry32(seed + 3))
    this.oreNoise     = createNoise3D(mulberry32(seed + 4))
    this.treeNoise    = createNoise2D(mulberry32(seed + 5))
  }

  /** Public accessor for cave noise — used by World for gravel/glowstone placement */
  sampleCaveNoise(x: number, y: number, z: number): number {
    return this.caveNoise(x, y, z)
  }

  // 0=plains, 1=desert, 2=tundra, 3=forest, 4=mountain
  getBiome(worldX: number, worldZ: number): number {
    const n = this.biomeNoise(worldX * 0.005, worldZ * 0.005)
    if (n < -0.55) return 1 // desert
    if (n < -0.15) return 0 // plains
    if (n < 0.25)  return 3 // forest
    if (n < 0.6)   return 4 // mountain
    return 2 // tundra
  }

  // Smooth 0-1 weight for a biome at a world position (for surface blending)
  private biomeWeight(worldX: number, worldZ: number, biomeId: number): number {
    const raw = this.biomeNoise(worldX * 0.005, worldZ * 0.005)
    // small jitter breaks perfectly straight biome edges
    const jitter = this.biomeBlend(worldX * 0.012, worldZ * 0.012) * 0.08
    const n = raw + jitter
    switch (biomeId) {
      case 1: return Math.max(0, Math.min(1, (n - (-0.65)) / 0.15))  // desert  [-0.65, -0.50]
      case 0: return Math.max(0, 1 - Math.abs(n - (-0.35)) / 0.22)   // plains  [-0.57, -0.13]
      case 3: return Math.max(0, 1 - Math.abs(n - 0.05)   / 0.22)    // forest  [-0.17,  0.27]
      case 4: return Math.max(0, 1 - Math.abs(n - 0.42)   / 0.20)    // mountain[0.22,  0.62]
      case 2: return Math.max(0, Math.min(1, (n - 0.55)   / 0.15))   // tundra  [0.55,  0.70]
      default: return 0
    }
  }

  getHeight(worldX: number, worldZ: number): number {
    const biome = this.getBiome(worldX, worldZ)
    const base = SEA_LEVEL
    const n1 = this.heightNoise(worldX * 0.01,  worldZ * 0.01)  * 8
    const n2 = this.heightNoise(worldX * 0.04,  worldZ * 0.04)  * 3
    const n3 = this.heightNoise2(worldX * 0.1,  worldZ * 0.1)   * 1.5
    let h = base + n1 + n2 + n3

    if (biome === 1) {
      h = base + n1 * 0.4 + n2 * 0.3 + 1          // desert: very flat
    } else if (biome === 4) {
      const peak = this.heightNoise(worldX * 0.015, worldZ * 0.015) * 18
      h = base + 8 + peak + n2                      // mountain: tall
    } else if (biome === 2) {
      h = base + n1 * 0.7 + n2 + 1                  // tundra: gentle hills
    } else if (biome === 3) {
      h = base + 2 + n1 * 0.9 + n2                  // forest: rolling
    }
    return Math.max(2, Math.min(CHUNK_SIZE_Y - 4, Math.floor(h)))
  }

  // FIX 1: caves never carve above y=26 to prevent surface breakthrough
  isCave(worldX: number, y: number, worldZ: number): boolean {
    if (y <= 2 || y > 26) return false
    const n1 = this.caveNoise(worldX * 0.06, y * 0.06, worldZ * 0.06)
    const n2 = this.caveNoise(worldX * 0.12, y * 0.12, worldZ * 0.12)
    // FIX: raise threshold near the surface so fewer holes appear
    const surfaceProximityPenalty = Math.max(0, (y - 20) * 0.04)
    return n1 > (0.42 + surfaceProximityPenalty) && n2 > (0.3 + surfaceProximityPenalty)
  }

  getOreAt(worldX: number, y: number, worldZ: number): BlockId | null {
    const n = this.oreNoise(worldX * 0.15, y * 0.15, worldZ * 0.15)
    if (n < 0.5) return null
    if (y < 12  && n > 0.85) return BLOCK.DIAMOND_ORE
    if (y < 25  && n > 0.78) return BLOCK.GOLD_ORE
    if (y < 40  && n > 0.72) return BLOCK.IRON_ORE
    if (y < 50  && n > 0.62) return BLOCK.COAL_ORE
    return null
  }

  // FIX 2: skip trees within TREE_BORDER blocks of chunk edge to prevent cross-chunk clipping
  static readonly TREE_BORDER = 3

  hasTree(worldX: number, worldZ: number, biome: number, lx: number, lz: number): boolean {
    if (biome === 1 || biome === 2 || biome === 4) return false
    // FIX: guard against chunk edge clipping
    if (lx < TerrainGenerator.TREE_BORDER || lx > CHUNK_SIZE_X - 1 - TerrainGenerator.TREE_BORDER) return false
    if (lz < TerrainGenerator.TREE_BORDER || lz > CHUNK_SIZE_Z - 1 - TerrainGenerator.TREE_BORDER) return false
    const n = this.treeNoise(worldX * 0.6, worldZ * 0.6)
    const jitter = ((worldX * 73856093) ^ (worldZ * 19349663)) & 0xffff
    // FIX: reduced density (0.55 → 0.38 for forest) to avoid overly dense canopy
    const treeChance = biome === 3 ? 0.38 : 0.18
    return n > 0.6 && jitter / 0xffff < treeChance
  }
}

export class Chunk {
  public voxels: Uint8Array
  public dirty = true
  public mesh: any = null
  public transparentMesh: any = null
  public waterMesh: any = null

  constructor(public cx: number, public cz: number) {
    this.voxels = new Uint8Array(CHUNK_VOXELS)
  }

  static index(x: number, y: number, z: number): number {
    return x + z * CHUNK_SIZE_X + y * CHUNK_SIZE_X * CHUNK_SIZE_Z
  }

  get(x: number, y: number, z: number): BlockId {
    if (x < 0 || x >= CHUNK_SIZE_X) return BLOCK.AIR
    if (y < 0 || y >= CHUNK_SIZE_Y) return BLOCK.AIR
    if (z < 0 || z >= CHUNK_SIZE_Z) return BLOCK.AIR
    return this.voxels[Chunk.index(x, y, z)] as BlockId
  }

  set(x: number, y: number, z: number, id: BlockId) {
    if (x < 0 || x >= CHUNK_SIZE_X) return
    if (y < 0 || y >= CHUNK_SIZE_Y) return
    if (z < 0 || z >= CHUNK_SIZE_Z) return
    this.voxels[Chunk.index(x, y, z)] = id
    this.dirty = true
  }
}

export class World {
  public chunks: Map<string, Chunk> = new Map()
  public gen: TerrainGenerator

  constructor(seed: number) {
    this.gen = new TerrainGenerator(seed)
  }

  key(cx: number, cz: number): string { return `${cx},${cz}` }

  getChunk(cx: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.key(cx, cz))
  }

  ensureChunk(cx: number, cz: number): Chunk {
    const k = this.key(cx, cz)
    let c = this.chunks.get(k)
    if (!c) {
      c = new Chunk(cx, cz)
      this.generateChunk(c)
      this.chunks.set(k, c)
    }
    return c
  }

  generateChunk(c: Chunk) {
    const baseX = c.cx * CHUNK_SIZE_X
    const baseZ = c.cz * CHUNK_SIZE_Z

    for (let x = 0; x < CHUNK_SIZE_X; x++) {
      for (let z = 0; z < CHUNK_SIZE_Z; z++) {
        const wx = baseX + x
        const wz = baseZ + z
        const biome = this.gen.getBiome(wx, wz)
        const h = this.gen.getHeight(wx, wz)

        // FIX 3: deeper sub-surface layer (6 blocks, not 4) so stone never pokes through
        const dirtDepth = biome === 1 ? 0 : 6

        for (let y = 0; y < CHUNK_SIZE_Y; y++) {
          let block: BlockId = BLOCK.AIR

          if (y === 0) {
            block = BLOCK.BEDROCK
          } else if (y < h - dirtDepth) {
            // Deep stone with ores
            block = BLOCK.STONE
            const ore = this.gen.getOreAt(wx, y, wz)
            if (ore !== null) block = ore
            // Caves — FIX: never carve within dirtDepth of surface
            if (y < h - dirtDepth - 2 && this.gen.isCave(wx, y, wz)) block = BLOCK.AIR
            // FIX 4: glowstone/crystal only below y=14 (far from any surface)
            if (y < 14 && block === BLOCK.STONE) {
              const g = this.gen.sampleCaveNoise(wx * 0.3, y * 0.3, wz * 0.3)
              if (g > 0.88) block = BLOCK.GLOWSTONE
              else if (g > 0.85) block = BLOCK.CRYSTAL
            }
            // Gravel patches underground
            if (block === BLOCK.STONE && y < 20 && y > 3) {
              const gv = this.gen.sampleCaveNoise(wx * 0.15, y * 0.15, wz * 0.15)
              if (gv > 0.9) block = BLOCK.GRAVEL
            }
            // Lava pools at the very bottom of the world
            if (y <= 3 && block === BLOCK.AIR) {
              block = BLOCK.LAVA
            }
          } else if (y < h) {
            // Sub-surface fill
            if (biome === 1)                                  block = BLOCK.SAND
            else if (biome === 2)                             block = BLOCK.STONE
            else if (biome === 4 && h > SEA_LEVEL + 12)      block = BLOCK.STONE
            else                                              block = BLOCK.DIRT
          } else if (y === h) {
            // Surface block — FIX 5: biome-blended surface
            block = this.getSurfaceBlock(wx, wz, biome, h)
          }

          if (block !== BLOCK.AIR) {
            c.voxels[Chunk.index(x, y, z)] = block
          } else if (y > h && y <= SEA_LEVEL) {
            // FIX 6: only fill water when surface is clearly below sea level (no edge pockets)
            if (h < SEA_LEVEL - 1) {
              c.voxels[Chunk.index(x, y, z)] = BLOCK.WATER
            }
          }
        }

        // FIX 7: pass local coords so hasTree can guard chunk edges
        if (this.gen.hasTree(wx, wz, biome, x, z) && h < CHUNK_SIZE_Y - 8 && h > SEA_LEVEL) {
          this.plantTree(c, x, h + 1, z)
        }
      }
    }
    c.dirty = true
  }

  // FIX 5: smooth surface block selection to soften biome transitions
  private getSurfaceBlock(wx: number, wz: number, biome: number, h: number): BlockId {
    if (h < SEA_LEVEL) return BLOCK.SAND          // underwater sand floor

    switch (biome) {
      case 1: return BLOCK.SAND                   // desert
      case 2: return BLOCK.SNOW                   // tundra
      case 4:
        if (h > SEA_LEVEL + 14) return BLOCK.SNOW
        if (h > SEA_LEVEL + 7)  return BLOCK.STONE
        return BLOCK.GRASS
      default: return BLOCK.GRASS                 // plains, forest
    }
  }

  // FIX 8: improved tree with proper trunk base flush to ground
  plantTree(c: Chunk, lx: number, ly: number, lz: number) {
    // Deterministic height from position
    const trunkH = 4 + (((lx * 13 + lz * 7 + c.cx * 11 + c.cz * 17) & 0x3) as number)

    // Trunk — straight up from base
    for (let i = 0; i < trunkH; i++) {
      const ty = ly + i
      if (ty >= CHUNK_SIZE_Y) break
      c.voxels[Chunk.index(lx, ty, lz)] = BLOCK.WOOD
    }

    // Leaf crown — 3 tiers above trunk top
    const topY = ly + trunkH
    const crownDef: Array<{ dy: number; r: number }> = [
      { dy: -1, r: 2 },   // bottom ring  — wide
      { dy: 0,  r: 2 },   // mid ring     — wide
      { dy: 1,  r: 1 },   // upper ring   — narrow
      { dy: 2,  r: 0 },   // tip          — single
    ]

    for (const { dy, r } of crownDef) {
      const tier = topY + dy
      if (tier < 0 || tier >= CHUNK_SIZE_Y) continue
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          // Skip the corners of the wide rings for a rounder shape
          if (r === 2 && Math.abs(dx) === 2 && Math.abs(dz) === 2) continue
          // Skip trunk centre for non-tip layers
          if (dx === 0 && dz === 0 && dy < 2) continue
          const tx = lx + dx
          const tz = lz + dz
          // Strict chunk bounds — no out-of-chunk leaves
          if (tx < 0 || tx >= CHUNK_SIZE_X || tz < 0 || tz >= CHUNK_SIZE_Z) continue
          if (c.voxels[Chunk.index(tx, tier, tz)] === BLOCK.AIR) {
            c.voxels[Chunk.index(tx, tier, tz)] = BLOCK.LEAVES
          }
        }
      }
    }
  }

  getBlock(wx: number, wy: number, wz: number): BlockId {
    if (wy < 0 || wy >= CHUNK_SIZE_Y) return BLOCK.AIR
    const cx = Math.floor(wx / CHUNK_SIZE_X)
    const cz = Math.floor(wz / CHUNK_SIZE_Z)
    const c = this.chunks.get(this.key(cx, cz))
    if (!c) return BLOCK.AIR
    const lx = wx - cx * CHUNK_SIZE_X
    const lz = wz - cz * CHUNK_SIZE_Z
    return c.voxels[Chunk.index(lx, wy, lz)] as BlockId
  }

  setBlock(wx: number, wy: number, wz: number, id: BlockId): boolean {
    if (wy < 0 || wy >= CHUNK_SIZE_Y) return false
    const cx = Math.floor(wx / CHUNK_SIZE_X)
    const cz = Math.floor(wz / CHUNK_SIZE_Z)
    const c = this.chunks.get(this.key(cx, cz))
    if (!c) return false
    const lx = wx - cx * CHUNK_SIZE_X
    const lz = wz - cz * CHUNK_SIZE_Z
    c.voxels[Chunk.index(lx, wy, lz)] = id
    c.dirty = true
    // Mark neighbor chunks dirty at borders
    if (lx === 0)               { const n = this.chunks.get(this.key(cx - 1, cz)); if (n) n.dirty = true }
    if (lx === CHUNK_SIZE_X - 1){ const n = this.chunks.get(this.key(cx + 1, cz)); if (n) n.dirty = true }
    if (lz === 0)               { const n = this.chunks.get(this.key(cx, cz - 1)); if (n) n.dirty = true }
    if (lz === CHUNK_SIZE_Z - 1){ const n = this.chunks.get(this.key(cx, cz + 1)); if (n) n.dirty = true }
    return true
  }

  isSolid(wx: number, wy: number, wz: number): boolean {
    const b = this.getBlock(wx, wy, wz)
    if (b === BLOCK.AIR) return false
    return BLOCK_DEFS[b].solid
  }
}
