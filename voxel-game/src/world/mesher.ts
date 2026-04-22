import {
  BLOCK,
  BLOCK_DEFS,
  CHUNK_SIZE_X,
  CHUNK_SIZE_Y,
  CHUNK_SIZE_Z,
  type BlockId,
} from "./constants"
import { Chunk, World } from "./world"
import { uvFor } from "./textures"

export interface MeshData {
  positions: number[]
  normals: number[]
  uvs: number[]
  colors: number[] // R=AO, G=light, B=unused
  indices: number[]
}

// ════════════════════════════════════════════════════════
// FACE DEFINITIONS — 6 faces, CCW winding when viewed from outside
// Corner order per face is strictly counter-clockwise so that
// BOTH diagonal splits (0,1,2 + 0,2,3) produce valid front faces.
// ════════════════════════════════════════════════════════

// AO neighbor order per vertex: [side1, side2, corner]
type AOTriplet = [[number,number,number],[number,number,number],[number,number,number]]

const FACES: Array<{
  dir:        [number, number, number]
  corners:    Array<[number, number, number]>
  aoNeighbors: AOTriplet[]
}> = [
  // +x face — normal [1,0,0]
  {
    dir: [1, 0, 0],
    corners: [
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
    ],
    aoNeighbors: [
      [[1,-1,0],[1,0,-1],[1,-1,-1]],
      [[1,-1,0],[1,0, 1],[1,-1, 1]],
      [[1, 1,0],[1,0, 1],[1, 1, 1]],
      [[1, 1,0],[1,0,-1],[1, 1,-1]],
    ],
  },
  // -x face — normal [-1,0,0]
  {
    dir: [-1, 0, 0],
    corners: [
      [0, 0, 1],
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    aoNeighbors: [
      [[-1,-1,0],[-1,0, 1],[-1,-1, 1]],
      [[-1,-1,0],[-1,0,-1],[-1,-1,-1]],
      [[-1, 1,0],[-1,0,-1],[-1, 1,-1]],
      [[-1, 1,0],[-1,0, 1],[-1, 1, 1]],
    ],
  },
  // +y face — normal [0,1,0]
  {
    dir: [0, 1, 0],
    corners: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
    aoNeighbors: [
      [[-1,1,0],[0,1,-1],[-1,1,-1]],
      [[ 1,1,0],[0,1,-1],[ 1,1,-1]],
      [[ 1,1,0],[0,1, 1],[ 1,1, 1]],
      [[-1,1,0],[0,1, 1],[-1,1, 1]],
    ],
  },
  // -y face — normal [0,-1,0]
  {
    dir: [0, -1, 0],
    corners: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 0, 0],
      [0, 0, 0],
    ],
    aoNeighbors: [
      [[-1,-1,0],[0,-1, 1],[-1,-1, 1]],
      [[ 1,-1,0],[0,-1, 1],[ 1,-1, 1]],
      [[ 1,-1,0],[0,-1,-1],[ 1,-1,-1]],
      [[-1,-1,0],[0,-1,-1],[-1,-1,-1]],
    ],
  },
  // +z face — normal [0,0,1]
  {
    dir: [0, 0, 1],
    corners: [
      [1, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ],
    aoNeighbors: [
      [[0,-1,1],[ 1,0,1],[ 1,-1,1]],
      [[0,-1,1],[-1,0,1],[-1,-1,1]],
      [[0, 1,1],[-1,0,1],[-1, 1,1]],
      [[0, 1,1],[ 1,0,1],[ 1, 1,1]],
    ],
  },
  // -z face — normal [0,0,-1]
  {
    dir: [0, 0, -1],
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    aoNeighbors: [
      [[0,-1,-1],[-1,0,-1],[-1,-1,-1]],
      [[0,-1,-1],[ 1,0,-1],[ 1,-1,-1]],
      [[0, 1,-1],[ 1,0,-1],[ 1, 1,-1]],
      [[0, 1,-1],[-1,0,-1],[-1, 1,-1]],
    ],
  },
]

function isOpaque(b: BlockId): boolean {
  if (b === BLOCK.AIR) return false
  const def = BLOCK_DEFS[b]
  return def.solid && !def.transparent
}

function isEmptyForFace(neighbor: BlockId, self: BlockId): boolean {
  if (neighbor === BLOCK.AIR) return true
  const def = BLOCK_DEFS[neighbor]
  if (!def.solid) return true
  if (def.transparent && neighbor !== self) return true
  return false
}

export function meshChunk(
  world: World,
  chunk: Chunk,
): { opaque: MeshData; transparent: MeshData; water: MeshData } {
  const opaque:      MeshData = { positions: [], normals: [], uvs: [], colors: [], indices: [] }
  const transparent: MeshData = { positions: [], normals: [], uvs: [], colors: [], indices: [] }
  const water:       MeshData = { positions: [], normals: [], uvs: [], colors: [], indices: [] }

  const baseX = chunk.cx * CHUNK_SIZE_X
  const baseZ = chunk.cz * CHUNK_SIZE_Z

  const getB = (wx: number, wy: number, wz: number): BlockId => {
    if (wy < 0 || wy >= CHUNK_SIZE_Y) return BLOCK.AIR
    const lx = wx - baseX
    const lz = wz - baseZ
    if (lx >= 0 && lx < CHUNK_SIZE_X && lz >= 0 && lz < CHUNK_SIZE_Z) {
      return chunk.voxels[Chunk.index(lx, wy, lz)] as BlockId
    }
    return world.getBlock(wx, wy, wz)
  }

  for (let y = 0; y < CHUNK_SIZE_Y; y++) {
    for (let z = 0; z < CHUNK_SIZE_Z; z++) {
      for (let x = 0; x < CHUNK_SIZE_X; x++) {
        const block = chunk.voxels[Chunk.index(x, y, z)] as BlockId
        if (block === BLOCK.AIR) continue

        const wx = baseX + x
        const wz = baseZ + z
        const def = BLOCK_DEFS[block]
        const isWater = block === BLOCK.WATER
        const target = isWater ? water : def.transparent ? transparent : opaque

        for (let f = 0; f < 6; f++) {
          const face = FACES[f]
          const nx = wx + face.dir[0]
          const ny = y  + face.dir[1]
          const nz = wz + face.dir[2]
          const neighbor = getB(nx, ny, nz)

          if (neighbor === block) continue

          if (isWater) {
            // Water: render faces where neighbor is NOT water
            // Top face (+y = index 2): only render when air above
            // Side/bottom faces: render when neighbor is air or a non-water solid
            if (neighbor === BLOCK.WATER) continue
            if (f === 2 && neighbor !== BLOCK.AIR) continue
          } else {
            if (!isEmptyForFace(neighbor, block)) continue
          }

          const tile = def.faces[f]
          const [u0, v0, u1, v1] = uvFor(tile)

          // UV layout: corners match vertex order exactly
          const uvCorners = [
            [u0, v1],   // corner 0
            [u1, v1],   // corner 1
            [u1, v0],   // corner 2
            [u0, v0],   // corner 3
          ]

          const startIdx = target.positions.length / 3
          const ao: number[] = []

          for (let v = 0; v < 4; v++) {
            const [cx2, cy2, cz2] = face.corners[v]
            const px = wx + cx2
            const py = y  + cy2
            const pz = wz + cz2
            // Water surface: slight downward nudge so shore edges show
            const py2 = isWater ? py - 0.07 : py

            target.positions.push(px, py2, pz)
            target.normals.push(face.dir[0], face.dir[1], face.dir[2])
            target.uvs.push(uvCorners[v][0], uvCorners[v][1])

            // Ambient occlusion
            const [an1, an2, an3] = face.aoNeighbors[v]
            const s1 = isOpaque(getB(wx + an1[0], y + an1[1], wz + an1[2])) ? 1 : 0
            const s2 = isOpaque(getB(wx + an2[0], y + an2[1], wz + an2[2])) ? 1 : 0
            const sc = (s1 === 1 && s2 === 1)
              ? 1
              : isOpaque(getB(wx + an3[0], y + an3[1], wz + an3[2])) ? 1 : 0
            const aoVal = 1.0 - (s1 + s2 + sc) * 0.18
            ao.push(aoVal)

            const lightVal = Math.max(0.6, def.emissive / 15)
            target.colors.push(aoVal, lightVal, 1.0)
          }

          // ── FIX: AO-aware diagonal selection with CONSISTENT CCW winding ──
          // Both diagonals use the SAME winding (0,1,2 + 0,2,3).
          // The flip only changes which vertex is the "pivot" of the two triangles.
          // This keeps winding correct while picking the better-looking diagonal.
          if (ao[0] + ao[2] < ao[1] + ao[3]) {
            // diagonal: 0→2  (pivot at 0)
            target.indices.push(startIdx, startIdx + 1, startIdx + 2)
            target.indices.push(startIdx, startIdx + 2, startIdx + 3)
          } else {
            // diagonal: 1→3  (pivot at 1, still CCW)
            target.indices.push(startIdx + 1, startIdx + 2, startIdx + 3)
            target.indices.push(startIdx + 1, startIdx + 3, startIdx)
          }
        }
      }
    }
  }

  return { opaque, transparent, water }
}
