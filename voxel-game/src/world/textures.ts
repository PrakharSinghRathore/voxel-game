import * as THREE from "three"

// Procedural texture atlas - 16 tiles across, 32px each = 512 wide, 3 rows = 96 tall
export const TILE_SIZE = 32
export const ATLAS_SIZE = 512
export const ATLAS_ROWS = 3
export const ATLAS_HEIGHT = ATLAS_ROWS * TILE_SIZE
export const TILES_PER_ROW = 16

// Block face atlas coordinates (tileX, tileY)
export const TILE = {
  GRASS_TOP: [0, 0],
  GRASS_SIDE: [1, 0],
  DIRT: [2, 0],
  STONE: [3, 0],
  SAND: [4, 0],
  SNOW: [5, 0],
  WOOD_SIDE: [6, 0],
  WOOD_TOP: [7, 0],
  LEAVES: [8, 0],
  COAL_ORE: [9, 0],
  IRON_ORE: [10, 0],
  GOLD_ORE: [11, 0],
  DIAMOND_ORE: [12, 0],
  GLOWSTONE: [13, 0],
  BEDROCK: [14, 0],
  PLANKS: [15, 0],
  COBBLESTONE: [0, 1],
  CRAFTING: [1, 1],
  BRICK: [2, 1],
  MOSS: [3, 1],
  ICE: [4, 1],
  OBSIDIAN: [5, 1],
  CRYSTAL: [6, 1],
  MAGMA: [7, 1],
  CAMPFIRE_TOP: [8, 1],
  CAMPFIRE_SIDE: [9, 1],
  TORCH: [10, 1],
  WATER: [11, 1],
  GLASS: [12, 1],
  GRAVEL: [13, 1],
  BOOKSHELF: [14, 1],
  LADDER: [15, 1],
  LAVA: [0, 2],
  IRON_BLOCK: [1, 2],
  GOLD_BLOCK: [2, 2],
  DIAMOND_BLOCK: [3, 2],
  TNT_TOP: [4, 2],
  TNT_BOTTOM: [5, 2],
  TNT_SIDE: [6, 2],
  WOOL: [7, 2],
} as const

export type TileCoord = readonly [number, number]

// Deterministic pseudo-random
function mulberry32(seed: number) {
  let t = seed
  return () => {
    t = (t + 0x6d2b79f5) | 0
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  return [
    Number.parseInt(h.slice(0, 2), 16),
    Number.parseInt(h.slice(2, 4), 16),
    Number.parseInt(h.slice(4, 6), 16),
  ]
}

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
}

function drawNoisy(
  ctx: CanvasRenderingContext2D,
  tx: number,
  ty: number,
  baseHex: string,
  variation = 0.18,
  seed = 1,
) {
  const rand = mulberry32(seed)
  const base = hexToRgb(baseHex)
  const imgData = ctx.createImageData(TILE_SIZE, TILE_SIZE)
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const n = (rand() - 0.5) * 2 * variation
      const r = Math.max(0, Math.min(255, base[0] * (1 + n)))
      const g = Math.max(0, Math.min(255, base[1] * (1 + n)))
      const b = Math.max(0, Math.min(255, base[2] * (1 + n)))
      const i = (y * TILE_SIZE + x) * 4
      imgData.data[i] = r
      imgData.data[i + 1] = g
      imgData.data[i + 2] = b
      imgData.data[i + 3] = 255
    }
  }
  ctx.putImageData(imgData, tx * TILE_SIZE, ty * TILE_SIZE)
}

function addFlecks(
  ctx: CanvasRenderingContext2D,
  tx: number,
  ty: number,
  flecks: Array<{ color: string; count: number; size?: number }>,
  seed = 42,
) {
  const rand = mulberry32(seed)
  for (const f of flecks) {
    ctx.fillStyle = f.color
    const size = f.size ?? 2
    for (let i = 0; i < f.count; i++) {
      const x = tx * TILE_SIZE + Math.floor(rand() * TILE_SIZE)
      const y = ty * TILE_SIZE + Math.floor(rand() * TILE_SIZE)
      ctx.fillRect(x, y, size, size)
    }
  }
}

function drawGrassSide(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  // Dirt bottom 70%, grass top 30% with drip
  drawNoisy(ctx, tx, ty, "#7A4E2E", 0.12, 101)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Grass top
  const rand = mulberry32(202)
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const green = rand() > 0.3
      if (green || y < 7) {
        const n = (rand() - 0.5) * 0.3
        const col = mix(hexToRgb("#4CAF50"), hexToRgb("#2E7D32"), rand())
        ctx.fillStyle = `rgb(${col[0] * (1 + n)},${col[1] * (1 + n)},${col[2] * (1 + n)})`
        ctx.fillRect(px + x, py + y, 1, 1)
      }
    }
  }
  // Drip down
  for (let x = 0; x < TILE_SIZE; x++) {
    if (rand() > 0.6) {
      const dripH = Math.floor(rand() * 4) + 1
      ctx.fillStyle = "#2E7D32"
      ctx.fillRect(px + x, py + 10, 1, dripH)
    }
  }
}

function drawPlanks(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#A47148", 0.1, 555)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  ctx.strokeStyle = "#6B4423"
  ctx.lineWidth = 1
  // horizontal plank lines
  for (const y of [8, 16, 24]) {
    ctx.beginPath()
    ctx.moveTo(px, py + y)
    ctx.lineTo(px + TILE_SIZE, py + y)
    ctx.stroke()
  }
  // vertical offsets
  ctx.beginPath()
  ctx.moveTo(px + 10, py)
  ctx.lineTo(px + 10, py + 8)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 20, py + 8)
  ctx.lineTo(px + 20, py + 16)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 6, py + 16)
  ctx.lineTo(px + 6, py + 24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 24, py + 24)
  ctx.lineTo(px + 24, py + TILE_SIZE)
  ctx.stroke()
}

function drawCrafting(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawPlanks(ctx, tx, ty)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // 3x3 grid
  ctx.strokeStyle = "#3E2723"
  ctx.lineWidth = 1
  ctx.strokeRect(px + 4, py + 4, 24, 24)
  for (let i = 1; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(px + 4 + i * 8, py + 4)
    ctx.lineTo(px + 4 + i * 8, py + 28)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(px + 4, py + 4 + i * 8)
    ctx.lineTo(px + 28, py + 4 + i * 8)
    ctx.stroke()
  }
}

function drawBrick(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#B84A39", 0.1, 777)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  ctx.strokeStyle = "#3E1A10"
  ctx.lineWidth = 1
  // horizontal mortar
  for (const y of [0, 8, 16, 24]) {
    ctx.beginPath()
    ctx.moveTo(px, py + y)
    ctx.lineTo(px + TILE_SIZE, py + y)
    ctx.stroke()
  }
  // offset vertical mortar
  ctx.beginPath()
  ctx.moveTo(px + 16, py)
  ctx.lineTo(px + 16, py + 8)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 8, py + 8)
  ctx.lineTo(px + 8, py + 16)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 24, py + 8)
  ctx.lineTo(px + 24, py + 16)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 16, py + 16)
  ctx.lineTo(px + 16, py + 24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 8, py + 24)
  ctx.lineTo(px + 8, py + 32)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 24, py + 24)
  ctx.lineTo(px + 24, py + 32)
  ctx.stroke()
}

function drawWoodSide(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#6D4C30", 0.12, 111)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(222)
  ctx.strokeStyle = "#3E2517"
  ctx.lineWidth = 1
  for (let i = 0; i < 8; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    ctx.beginPath()
    ctx.moveTo(px + x, py)
    ctx.lineTo(px + x + (rand() - 0.5) * 4, py + TILE_SIZE)
    ctx.stroke()
  }
}

function drawWoodTop(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#A47148", 0.1, 333)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  ctx.strokeStyle = "#6B4423"
  ctx.lineWidth = 1
  for (let r = 4; r < 16; r += 3) {
    ctx.beginPath()
    ctx.arc(px + 16, py + 16, r, 0, Math.PI * 2)
    ctx.stroke()
  }
}

function drawStoneCracks(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#8A8A8A", 0.15, 444)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(555)
  ctx.strokeStyle = "#5C5C5C"
  ctx.lineWidth = 1
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    const x1 = Math.floor(rand() * TILE_SIZE)
    const y1 = Math.floor(rand() * TILE_SIZE)
    ctx.moveTo(px + x1, py + y1)
    for (let j = 0; j < 3; j++) {
      ctx.lineTo(px + x1 + (rand() - 0.5) * 16, py + y1 + (rand() - 0.5) * 16)
    }
    ctx.stroke()
  }
}

function drawCobblestone(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#707070", 0.2, 666)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(777)
  ctx.strokeStyle = "#3A3A3A"
  ctx.lineWidth = 1
  // Random stone cells
  const cells = [
    [0, 0, 14, 10],
    [14, 0, 18, 12],
    [0, 10, 10, 12],
    [10, 12, 12, 10],
    [22, 12, 10, 10],
    [0, 22, 16, 10],
    [16, 22, 16, 10],
  ]
  for (const [x, y, w, h] of cells) {
    ctx.strokeRect(px + x, py + y, w, h)
    // Shade each cell
    for (let yy = y + 1; yy < y + h - 1; yy++) {
      for (let xx = x + 1; xx < x + w - 1; xx++) {
        const n = (rand() - 0.5) * 0.2
        const v = 112 * (1 + n)
        ctx.fillStyle = `rgb(${v},${v},${v})`
        ctx.fillRect(px + xx, py + yy, 1, 1)
      }
    }
  }
}

function drawLeaves(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#2E7D32", 0.25, 888)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(999)
  // Add some darker leaves and highlights
  for (let i = 0; i < 60; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * TILE_SIZE)
    const shade = rand() > 0.5 ? "#1B5E20" : "#4CAF50"
    ctx.fillStyle = shade
    ctx.fillRect(px + x, py + y, 1 + Math.floor(rand() * 2), 1 + Math.floor(rand() * 2))
  }
}

function drawOre(
  ctx: CanvasRenderingContext2D,
  tx: number,
  ty: number,
  oreColor: string,
  oreDark: string,
  count = 14,
  seed = 1,
) {
  drawStoneCracks(ctx, tx, ty)
  const rand = mulberry32(seed)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 4))
    const y = Math.floor(rand() * (TILE_SIZE - 4))
    ctx.fillStyle = oreDark
    ctx.fillRect(px + x, py + y, 3, 3)
    ctx.fillStyle = oreColor
    ctx.fillRect(px + x + 1, py + y + 1, 2, 2)
  }
}

function drawGlowstone(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#FF8F00", 0.15, 1010)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(1111)
  for (let i = 0; i < 10; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 4)) + 2
    const y = Math.floor(rand() * (TILE_SIZE - 4)) + 2
    const grad = ctx.createRadialGradient(px + x, py + y, 0, px + x, py + y, 4)
    grad.addColorStop(0, "#FFF59D")
    grad.addColorStop(0.5, "#FFEB3B")
    grad.addColorStop(1, "rgba(255,235,59,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(px + x, py + y, 4, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawBedrock(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#1A1A1A", 0.4, 1212)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(1313)
  ctx.fillStyle = "#0A0A0A"
  for (let i = 0; i < 20; i++) {
    ctx.fillRect(
      px + Math.floor(rand() * TILE_SIZE),
      py + Math.floor(rand() * TILE_SIZE),
      2 + Math.floor(rand() * 3),
      2 + Math.floor(rand() * 3),
    )
  }
  ctx.fillStyle = "#2E2E2E"
  for (let i = 0; i < 10; i++) {
    ctx.fillRect(
      px + Math.floor(rand() * TILE_SIZE),
      py + Math.floor(rand() * TILE_SIZE),
      1 + Math.floor(rand() * 2),
      1 + Math.floor(rand() * 2),
    )
  }
}

function drawMoss(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawStoneCracks(ctx, tx, ty)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(1414)
  for (let i = 0; i < 40; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * TILE_SIZE)
    ctx.fillStyle = rand() > 0.5 ? "#4E9A3A" : "#3A7A2A"
    ctx.fillRect(px + x, py + y, 1 + Math.floor(rand() * 2), 1)
  }
}

function drawIce(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const grad = ctx.createLinearGradient(px, py, px + TILE_SIZE, py + TILE_SIZE)
  grad.addColorStop(0, "#B3E5FC")
  grad.addColorStop(0.5, "#E1F5FE")
  grad.addColorStop(1, "#81D4FA")
  ctx.fillStyle = grad
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  const rand = mulberry32(1515)
  ctx.strokeStyle = "rgba(255,255,255,0.5)"
  ctx.lineWidth = 1
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.moveTo(px + rand() * TILE_SIZE, py + rand() * TILE_SIZE)
    ctx.lineTo(px + rand() * TILE_SIZE, py + rand() * TILE_SIZE)
    ctx.stroke()
  }
}

function drawObsidian(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#1A0033", 0.25, 1616)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(1717)
  for (let i = 0; i < 12; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * TILE_SIZE)
    ctx.fillStyle = "#6A1B9A"
    ctx.fillRect(px + x, py + y, 1, 1)
  }
}

function drawCrystal(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#9C27B0", 0.2, 1818)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  ctx.strokeStyle = "#E1BEE7"
  ctx.lineWidth = 1
  const rand = mulberry32(1919)
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    const x1 = rand() * TILE_SIZE
    const y1 = rand() * TILE_SIZE
    ctx.moveTo(px + x1, py + y1)
    ctx.lineTo(px + x1 + 10, py + y1 + 10)
    ctx.stroke()
  }
}

function drawMagma(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#BF360C", 0.2, 2020)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(2121)
  for (let i = 0; i < 8; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 6))
    const y = Math.floor(rand() * (TILE_SIZE - 6))
    const grad = ctx.createRadialGradient(px + x + 3, py + y + 3, 0, px + x + 3, py + y + 3, 4)
    grad.addColorStop(0, "#FFEB3B")
    grad.addColorStop(0.6, "#FF5722")
    grad.addColorStop(1, "rgba(255,87,34,0)")
    ctx.fillStyle = grad
    ctx.fillRect(px + x, py + y, 8, 8)
  }
}

function drawCampfireTop(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  // Burning log with flames
  drawNoisy(ctx, tx, ty, "#2E2220", 0.2, 3001)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // crossed logs
  ctx.fillStyle = "#4A2E1A"
  ctx.fillRect(px + 4, py + 13, 24, 6)
  ctx.fillRect(px + 13, py + 4, 6, 24)
  // Ember glow
  const rand = mulberry32(3002)
  for (let i = 0; i < 22; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * TILE_SIZE)
    const t = rand()
    const col = t > 0.66 ? "#FFEB3B" : t > 0.33 ? "#FF9800" : "#E53935"
    ctx.fillStyle = col
    ctx.fillRect(px + x, py + y, 2, 2)
  }
  // central flame
  const g = ctx.createRadialGradient(px + 16, py + 16, 0, px + 16, py + 16, 10)
  g.addColorStop(0, "#FFF59D")
  g.addColorStop(0.5, "#FF6F00")
  g.addColorStop(1, "rgba(255,87,34,0)")
  ctx.fillStyle = g
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
}

function drawCampfireSide(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  // Stone ring on grass with visible logs
  drawNoisy(ctx, tx, ty, "#3E2723", 0.15, 3003)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // dark stone ring base
  ctx.fillStyle = "#424242"
  ctx.fillRect(px, py + 22, TILE_SIZE, 10)
  ctx.fillStyle = "#616161"
  for (let i = 0; i < 8; i++) ctx.fillRect(px + i * 4, py + 22 + (i % 2 ? 1 : 3), 3, 2)
  // logs on top
  ctx.fillStyle = "#4A2E1A"
  ctx.fillRect(px + 2, py + 14, 28, 6)
  ctx.fillStyle = "#3E2417"
  ctx.fillRect(px + 2, py + 14, 28, 1)
  // flame flickers
  const rand = mulberry32(3004)
  for (let i = 0; i < 18; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * 14)
    const t = rand()
    const col = t > 0.6 ? "#FFEB3B" : t > 0.3 ? "#FF6F00" : "#D84315"
    ctx.fillStyle = col
    ctx.fillRect(px + x, py + y, 2, 2)
  }
}

function drawTorch(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  // Transparent background (dark)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  ctx.fillStyle = "#0a0a0a"
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  // Wooden stick in middle
  ctx.fillStyle = "#6D4C41"
  ctx.fillRect(px + 14, py + 10, 4, 22)
  // highlight
  ctx.fillStyle = "#8D6E63"
  ctx.fillRect(px + 14, py + 10, 1, 22)
  // Flame
  const g = ctx.createRadialGradient(px + 16, py + 8, 0, px + 16, py + 8, 8)
  g.addColorStop(0, "#FFF59D")
  g.addColorStop(0.5, "#FF9800")
  g.addColorStop(1, "rgba(255,87,34,0)")
  ctx.fillStyle = g
  ctx.fillRect(px, py, TILE_SIZE, 18)
  // bright center
  ctx.fillStyle = "#FFF59D"
  ctx.fillRect(px + 15, py + 5, 2, 4)
  ctx.fillStyle = "#FFEB3B"
  ctx.fillRect(px + 14, py + 7, 4, 3)
}

function drawWater(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#1976D2", 0.08, 4001)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Wavy highlights
  ctx.strokeStyle = "rgba(200,230,255,0.55)"
  ctx.lineWidth = 1
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    const yOffset = 6 + i * 10
    for (let x = 0; x <= TILE_SIZE; x += 2) {
      const y = Math.sin((x + i * 8) * 0.5) * 1.2 + yOffset
      if (x === 0) ctx.moveTo(px + x, py + y)
      else ctx.lineTo(px + x, py + y)
    }
    ctx.stroke()
  }
}

function drawGlass(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Very light blue tint, mostly transparent look
  const grad = ctx.createLinearGradient(px, py, px + TILE_SIZE, py + TILE_SIZE)
  grad.addColorStop(0, "rgba(200,230,255,0.3)")
  grad.addColorStop(0.5, "rgba(220,240,255,0.15)")
  grad.addColorStop(1, "rgba(200,230,255,0.3)")
  ctx.fillStyle = grad
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  // Border lines (frame)
  ctx.strokeStyle = "rgba(180,210,240,0.7)"
  ctx.lineWidth = 1
  ctx.strokeRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2)
  // Cross bars
  ctx.beginPath()
  ctx.moveTo(px + TILE_SIZE / 2, py + 1)
  ctx.lineTo(px + TILE_SIZE / 2, py + TILE_SIZE - 1)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 1, py + TILE_SIZE / 2)
  ctx.lineTo(px + TILE_SIZE - 1, py + TILE_SIZE / 2)
  ctx.stroke()
  // Highlight
  ctx.strokeStyle = "rgba(255,255,255,0.4)"
  ctx.beginPath()
  ctx.moveTo(px + 2, py + 2)
  ctx.lineTo(px + 10, py + 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(px + 2, py + 2)
  ctx.lineTo(px + 2, py + 10)
  ctx.stroke()
}

function drawGravel(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#8B8B7A", 0.25, 5001)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(5002)
  // Scattered stones
  const stoneColors = ["#6B6B5A", "#9B9B8A", "#7A7A6A", "#A5A595"]
  for (let i = 0; i < 25; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 4))
    const y = Math.floor(rand() * (TILE_SIZE - 4))
    const size = 2 + Math.floor(rand() * 3)
    ctx.fillStyle = stoneColors[Math.floor(rand() * stoneColors.length)]
    ctx.fillRect(px + x, py + y, size, size)
  }
}

function drawBookshelf(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawPlanks(ctx, tx, ty)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Book rows
  const bookColors = ["#8B0000", "#006400", "#00008B", "#8B4513", "#4B0082", "#2F4F4F", "#800000", "#008B8B"]
  const rand = mulberry32(5003)
  // Top shelf
  for (let x = 1; x < TILE_SIZE - 1; x += 3) {
    const h = 5 + Math.floor(rand() * 4)
    ctx.fillStyle = bookColors[Math.floor(rand() * bookColors.length)]
    ctx.fillRect(px + x, py + 2, 2, h)
  }
  // Bottom shelf
  for (let x = 1; x < TILE_SIZE - 1; x += 3) {
    const h = 5 + Math.floor(rand() * 4)
    ctx.fillStyle = bookColors[Math.floor(rand() * bookColors.length)]
    ctx.fillRect(px + x, py + 17, 2, h)
  }
  // Shelf dividers
  ctx.fillStyle = "#5C3317"
  ctx.fillRect(px, py + 11, TILE_SIZE, 2)
  ctx.fillRect(px, py + 26, TILE_SIZE, 2)
}

function drawLadder(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Dark background (transparent)
  ctx.fillStyle = "#0a0a0a"
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE)
  // Side rails
  ctx.fillStyle = "#8D6E63"
  ctx.fillRect(px + 6, py + 1, 2, TILE_SIZE - 2)
  ctx.fillRect(px + 24, py + 1, 2, TILE_SIZE - 2)
  // Rungs
  ctx.fillStyle = "#A1887F"
  for (let y = 4; y < TILE_SIZE - 4; y += 6) {
    ctx.fillRect(px + 6, py + y, 20, 2)
  }
  // Highlights
  ctx.fillStyle = "#BCAAA4"
  ctx.fillRect(px + 6, py + 1, 1, TILE_SIZE - 2)
  for (let y = 4; y < TILE_SIZE - 4; y += 6) {
    ctx.fillRect(px + 6, py + y, 20, 1)
  }
}

function drawLava(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#D32F2F", 0.2, 5004)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(5005)
  // Hot spots
  for (let i = 0; i < 12; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 8))
    const y = Math.floor(rand() * (TILE_SIZE - 8))
    const grad = ctx.createRadialGradient(px + x + 4, py + y + 4, 0, px + x + 4, py + y + 4, 5)
    grad.addColorStop(0, "#FFEB3B")
    grad.addColorStop(0.4, "#FF9800")
    grad.addColorStop(0.8, "#FF5722")
    grad.addColorStop(1, "rgba(255,87,34,0)")
    ctx.fillStyle = grad
    ctx.fillRect(px + x, py + y, 8, 8)
  }
  // Bright cracks
  ctx.strokeStyle = "#FF6F00"
  ctx.lineWidth = 1
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.moveTo(px + rand() * TILE_SIZE, py + rand() * TILE_SIZE)
    ctx.lineTo(px + rand() * TILE_SIZE, py + rand() * TILE_SIZE)
    ctx.stroke()
  }
}

function drawIronBlock(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#B0B0B0", 0.1, 5006)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Metallic highlights
  ctx.strokeStyle = "rgba(220,220,220,0.5)"
  ctx.lineWidth = 1
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.moveTo(px + 2, py + 4 + i * 8)
    ctx.lineTo(px + TILE_SIZE - 2, py + 4 + i * 8)
    ctx.stroke()
  }
  // Border
  ctx.strokeStyle = "rgba(80,80,80,0.6)"
  ctx.strokeRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2)
}

function drawGoldBlock(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#FFD700", 0.08, 5007)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Shiny highlights
  ctx.strokeStyle = "rgba(255,245,157,0.5)"
  ctx.lineWidth = 1
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.moveTo(px + 2, py + 4 + i * 8)
    ctx.lineTo(px + TILE_SIZE - 2, py + 4 + i * 8)
    ctx.stroke()
  }
  ctx.strokeStyle = "rgba(184,134,11,0.6)"
  ctx.strokeRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2)
}

function drawDiamondBlock(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#00BCD4", 0.08, 5008)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(5009)
  // Diamond facet lines
  ctx.strokeStyle = "rgba(0,229,255,0.5)"
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(px + 16, py + 2)
  ctx.lineTo(px + 30, py + 16)
  ctx.lineTo(px + 16, py + 30)
  ctx.lineTo(px + 2, py + 16)
  ctx.closePath()
  ctx.stroke()
  // Inner cross
  ctx.beginPath()
  ctx.moveTo(px + 16, py + 2)
  ctx.lineTo(px + 16, py + 30)
  ctx.moveTo(px + 2, py + 16)
  ctx.lineTo(px + 30, py + 16)
  ctx.stroke()
  // Sparkle
  for (let i = 0; i < 6; i++) {
    const x = Math.floor(rand() * TILE_SIZE)
    const y = Math.floor(rand() * TILE_SIZE)
    ctx.fillStyle = "rgba(178,235,242,0.7)"
    ctx.fillRect(px + x, py + y, 2, 2)
  }
}

function drawTNTTop(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Center fuse hole
  ctx.fillStyle = "#2E2E2E"
  ctx.fillRect(px + 12, py + 12, 8, 8)
  ctx.fillStyle = "#1A1A1A"
  ctx.fillRect(px + 14, py + 14, 4, 4)
  // Brown border
  drawNoisy(ctx, tx, ty, "#795548", 0.12, 5010)
  // Dark center
  ctx.fillStyle = "#2E2E2E"
  ctx.fillRect(px + 12, py + 12, 8, 8)
  ctx.fillStyle = "#424242"
  ctx.fillRect(px + 13, py + 13, 6, 6)
}

function drawTNTBottom(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#795548", 0.15, 5011)
}

function drawTNTSide(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  // Red body
  drawNoisy(ctx, tx, ty, "#D32F2F", 0.12, 5012)
  // White band
  ctx.fillStyle = "#F5F5F5"
  ctx.fillRect(px, py + 10, TILE_SIZE, 10)
  // TNT text (simple blocks)
  ctx.fillStyle = "#212121"
  ctx.fillRect(px + 6, py + 12, 3, 6)
  ctx.fillRect(px + 11, py + 12, 3, 6)
  ctx.fillRect(px + 16, py + 12, 1, 6)
  ctx.fillRect(px + 19, py + 12, 3, 6)
  ctx.fillRect(px + 24, py + 12, 1, 6)
}

function drawWool(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  drawNoisy(ctx, tx, ty, "#F5F5F5", 0.06, 5013)
  const px = tx * TILE_SIZE
  const py = ty * TILE_SIZE
  const rand = mulberry32(5014)
  // Fluffy texture
  for (let i = 0; i < 50; i++) {
    const x = Math.floor(rand() * (TILE_SIZE - 2))
    const y = Math.floor(rand() * (TILE_SIZE - 2))
    const shade = rand() > 0.5 ? "rgba(255,255,255,0.3)" : "rgba(220,220,220,0.3)"
    ctx.fillStyle = shade
    ctx.fillRect(px + x, py + y, 2, 2)
  }
}

let cachedTexture: THREE.Texture | null = null

export function createBlockAtlasTexture(): THREE.Texture {
  if (cachedTexture) return cachedTexture
  const canvas = document.createElement("canvas")
  canvas.width = ATLAS_SIZE
  canvas.height = ATLAS_HEIGHT
  const ctx = canvas.getContext("2d")!
  ctx.imageSmoothingEnabled = false

  // Fill black background
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, ATLAS_SIZE, ATLAS_HEIGHT)

  // Draw each tile
  drawNoisy(ctx, TILE.GRASS_TOP[0], TILE.GRASS_TOP[1], "#4CAF50", 0.15, 1)
  // Add darker green flecks
  addFlecks(ctx, TILE.GRASS_TOP[0], TILE.GRASS_TOP[1], [{ color: "#2E7D32", count: 30 }], 2)

  drawGrassSide(ctx, TILE.GRASS_SIDE[0], TILE.GRASS_SIDE[1])
  drawNoisy(ctx, TILE.DIRT[0], TILE.DIRT[1], "#7A4E2E", 0.15, 3)
  addFlecks(ctx, TILE.DIRT[0], TILE.DIRT[1], [{ color: "#5C3317", count: 15 }], 4)
  drawStoneCracks(ctx, TILE.STONE[0], TILE.STONE[1])
  drawNoisy(ctx, TILE.SAND[0], TILE.SAND[1], "#F5DEB3", 0.08, 5)
  addFlecks(ctx, TILE.SAND[0], TILE.SAND[1], [{ color: "#E6C88A", count: 20, size: 1 }], 6)
  drawNoisy(ctx, TILE.SNOW[0], TILE.SNOW[1], "#F5FAFF", 0.06, 7)
  addFlecks(ctx, TILE.SNOW[0], TILE.SNOW[1], [{ color: "#E3F2FD", count: 15, size: 1 }], 8)
  drawWoodSide(ctx, TILE.WOOD_SIDE[0], TILE.WOOD_SIDE[1])
  drawWoodTop(ctx, TILE.WOOD_TOP[0], TILE.WOOD_TOP[1])
  drawLeaves(ctx, TILE.LEAVES[0], TILE.LEAVES[1])
  drawOre(ctx, TILE.COAL_ORE[0], TILE.COAL_ORE[1], "#2C2C2C", "#000", 16, 10)
  drawOre(ctx, TILE.IRON_ORE[0], TILE.IRON_ORE[1], "#D4915C", "#8B5A2B", 12, 11)
  drawOre(ctx, TILE.GOLD_ORE[0], TILE.GOLD_ORE[1], "#FFD700", "#B8860B", 10, 12)
  drawOre(ctx, TILE.DIAMOND_ORE[0], TILE.DIAMOND_ORE[1], "#00E5FF", "#00838F", 8, 13)
  drawGlowstone(ctx, TILE.GLOWSTONE[0], TILE.GLOWSTONE[1])
  drawBedrock(ctx, TILE.BEDROCK[0], TILE.BEDROCK[1])
  drawPlanks(ctx, TILE.PLANKS[0], TILE.PLANKS[1])
  drawCobblestone(ctx, TILE.COBBLESTONE[0], TILE.COBBLESTONE[1])
  drawCrafting(ctx, TILE.CRAFTING[0], TILE.CRAFTING[1])
  drawBrick(ctx, TILE.BRICK[0], TILE.BRICK[1])
  drawMoss(ctx, TILE.MOSS[0], TILE.MOSS[1])
  drawIce(ctx, TILE.ICE[0], TILE.ICE[1])
  drawObsidian(ctx, TILE.OBSIDIAN[0], TILE.OBSIDIAN[1])
  drawCrystal(ctx, TILE.CRYSTAL[0], TILE.CRYSTAL[1])
  drawMagma(ctx, TILE.MAGMA[0], TILE.MAGMA[1])
  drawCampfireTop(ctx, TILE.CAMPFIRE_TOP[0], TILE.CAMPFIRE_TOP[1])
  drawCampfireSide(ctx, TILE.CAMPFIRE_SIDE[0], TILE.CAMPFIRE_SIDE[1])
  drawTorch(ctx, TILE.TORCH[0], TILE.TORCH[1])
  drawWater(ctx, TILE.WATER[0], TILE.WATER[1])
  drawGlass(ctx, TILE.GLASS[0], TILE.GLASS[1])
  drawGravel(ctx, TILE.GRAVEL[0], TILE.GRAVEL[1])
  drawBookshelf(ctx, TILE.BOOKSHELF[0], TILE.BOOKSHELF[1])
  drawLadder(ctx, TILE.LADDER[0], TILE.LADDER[1])
  drawLava(ctx, TILE.LAVA[0], TILE.LAVA[1])
  drawIronBlock(ctx, TILE.IRON_BLOCK[0], TILE.IRON_BLOCK[1])
  drawGoldBlock(ctx, TILE.GOLD_BLOCK[0], TILE.GOLD_BLOCK[1])
  drawDiamondBlock(ctx, TILE.DIAMOND_BLOCK[0], TILE.DIAMOND_BLOCK[1])
  drawTNTTop(ctx, TILE.TNT_TOP[0], TILE.TNT_TOP[1])
  drawTNTBottom(ctx, TILE.TNT_BOTTOM[0], TILE.TNT_BOTTOM[1])
  drawTNTSide(ctx, TILE.TNT_SIDE[0], TILE.TNT_SIDE[1])
  drawWool(ctx, TILE.WOOL[0], TILE.WOOL[1])

  const texture = new THREE.CanvasTexture(canvas)
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestMipmapNearestFilter
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.colorSpace = THREE.SRGBColorSpace
  texture.generateMipmaps = true
  cachedTexture = texture
  return texture
}

// Return uv coordinates [u0, v0, u1, v1] for a tile
export function uvFor(tile: TileCoord): [number, number, number, number] {
  const [tx, ty] = tile
  const u0 = (tx * TILE_SIZE) / ATLAS_SIZE
  const v0 = 1 - ((ty + 1) * TILE_SIZE) / ATLAS_HEIGHT
  const u1 = ((tx + 1) * TILE_SIZE) / ATLAS_SIZE
  const v1 = 1 - (ty * TILE_SIZE) / ATLAS_HEIGHT
  // shrink a tiny bit to avoid bleeding
  const b = 0.5 / ATLAS_SIZE
  return [u0 + b, v0 + b, u1 - b, v1 - b]
}

// Draw a single tile as a small standalone data URL for HUD icons
export function tileToDataURL(tile: TileCoord, size = 32): string {
  const src = document.createElement("canvas")
  src.width = ATLAS_SIZE
  src.height = ATLAS_HEIGHT
  const srcCtx = src.getContext("2d")!
  srcCtx.imageSmoothingEnabled = false
  // Redraw full atlas onto this offscreen ctx - expensive but cached elsewhere
  // Instead: just draw the specific tile
  const draw = (ctx: CanvasRenderingContext2D, tx: number, ty: number) => {
    switch (`${tx},${ty}`) {
      case `${TILE.GRASS_TOP[0]},${TILE.GRASS_TOP[1]}`:
        drawNoisy(ctx, tx, ty, "#4CAF50", 0.15, 1)
        addFlecks(ctx, tx, ty, [{ color: "#2E7D32", count: 30 }], 2)
        break
      case `${TILE.GRASS_SIDE[0]},${TILE.GRASS_SIDE[1]}`:
        drawGrassSide(ctx, tx, ty)
        break
      case `${TILE.DIRT[0]},${TILE.DIRT[1]}`:
        drawNoisy(ctx, tx, ty, "#7A4E2E", 0.15, 3)
        addFlecks(ctx, tx, ty, [{ color: "#5C3317", count: 15 }], 4)
        break
      case `${TILE.STONE[0]},${TILE.STONE[1]}`:
        drawStoneCracks(ctx, tx, ty)
        break
      case `${TILE.SAND[0]},${TILE.SAND[1]}`:
        drawNoisy(ctx, tx, ty, "#F5DEB3", 0.08, 5)
        addFlecks(ctx, tx, ty, [{ color: "#E6C88A", count: 20, size: 1 }], 6)
        break
      case `${TILE.SNOW[0]},${TILE.SNOW[1]}`:
        drawNoisy(ctx, tx, ty, "#F5FAFF", 0.06, 7)
        addFlecks(ctx, tx, ty, [{ color: "#E3F2FD", count: 15, size: 1 }], 8)
        break
      case `${TILE.WOOD_SIDE[0]},${TILE.WOOD_SIDE[1]}`:
        drawWoodSide(ctx, tx, ty)
        break
      case `${TILE.LEAVES[0]},${TILE.LEAVES[1]}`:
        drawLeaves(ctx, tx, ty)
        break
      case `${TILE.COAL_ORE[0]},${TILE.COAL_ORE[1]}`:
        drawOre(ctx, tx, ty, "#2C2C2C", "#000", 16, 10)
        break
      case `${TILE.IRON_ORE[0]},${TILE.IRON_ORE[1]}`:
        drawOre(ctx, tx, ty, "#D4915C", "#8B5A2B", 12, 11)
        break
      case `${TILE.GOLD_ORE[0]},${TILE.GOLD_ORE[1]}`:
        drawOre(ctx, tx, ty, "#FFD700", "#B8860B", 10, 12)
        break
      case `${TILE.DIAMOND_ORE[0]},${TILE.DIAMOND_ORE[1]}`:
        drawOre(ctx, tx, ty, "#00E5FF", "#00838F", 8, 13)
        break
      case `${TILE.GLOWSTONE[0]},${TILE.GLOWSTONE[1]}`:
        drawGlowstone(ctx, tx, ty)
        break
      case `${TILE.BEDROCK[0]},${TILE.BEDROCK[1]}`:
        drawBedrock(ctx, tx, ty)
        break
      case `${TILE.PLANKS[0]},${TILE.PLANKS[1]}`:
        drawPlanks(ctx, tx, ty)
        break
      case `${TILE.COBBLESTONE[0]},${TILE.COBBLESTONE[1]}`:
        drawCobblestone(ctx, tx, ty)
        break
      case `${TILE.CRAFTING[0]},${TILE.CRAFTING[1]}`:
        drawCrafting(ctx, tx, ty)
        break
      case `${TILE.BRICK[0]},${TILE.BRICK[1]}`:
        drawBrick(ctx, tx, ty)
        break
      case `${TILE.MOSS[0]},${TILE.MOSS[1]}`:
        drawMoss(ctx, tx, ty)
        break
      case `${TILE.ICE[0]},${TILE.ICE[1]}`:
        drawIce(ctx, tx, ty)
        break
      case `${TILE.OBSIDIAN[0]},${TILE.OBSIDIAN[1]}`:
        drawObsidian(ctx, tx, ty)
        break
      case `${TILE.CRYSTAL[0]},${TILE.CRYSTAL[1]}`:
        drawCrystal(ctx, tx, ty)
        break
      case `${TILE.MAGMA[0]},${TILE.MAGMA[1]}`:
        drawMagma(ctx, tx, ty)
        break
      case `${TILE.CAMPFIRE_TOP[0]},${TILE.CAMPFIRE_TOP[1]}`:
        drawCampfireTop(ctx, tx, ty)
        break
      case `${TILE.CAMPFIRE_SIDE[0]},${TILE.CAMPFIRE_SIDE[1]}`:
        drawCampfireSide(ctx, tx, ty)
        break
      case `${TILE.TORCH[0]},${TILE.TORCH[1]}`:
        drawTorch(ctx, tx, ty)
        break
      case `${TILE.WATER[0]},${TILE.WATER[1]}`:
        drawWater(ctx, tx, ty)
        break
      case `${TILE.GLASS[0]},${TILE.GLASS[1]}`:
        drawGlass(ctx, tx, ty)
        break
      case `${TILE.GRAVEL[0]},${TILE.GRAVEL[1]}`:
        drawGravel(ctx, tx, ty)
        break
      case `${TILE.BOOKSHELF[0]},${TILE.BOOKSHELF[1]}`:
        drawBookshelf(ctx, tx, ty)
        break
      case `${TILE.LADDER[0]},${TILE.LADDER[1]}`:
        drawLadder(ctx, tx, ty)
        break
      case `${TILE.LAVA[0]},${TILE.LAVA[1]}`:
        drawLava(ctx, tx, ty)
        break
      case `${TILE.IRON_BLOCK[0]},${TILE.IRON_BLOCK[1]}`:
        drawIronBlock(ctx, tx, ty)
        break
      case `${TILE.GOLD_BLOCK[0]},${TILE.GOLD_BLOCK[1]}`:
        drawGoldBlock(ctx, tx, ty)
        break
      case `${TILE.DIAMOND_BLOCK[0]},${TILE.DIAMOND_BLOCK[1]}`:
        drawDiamondBlock(ctx, tx, ty)
        break
      case `${TILE.TNT_TOP[0]},${TILE.TNT_TOP[1]}`:
        drawTNTTop(ctx, tx, ty)
        break
      case `${TILE.TNT_SIDE[0]},${TILE.TNT_SIDE[1]}`:
        drawTNTSide(ctx, tx, ty)
        break
      case `${TILE.WOOL[0]},${TILE.WOOL[1]}`:
        drawWool(ctx, tx, ty)
        break
      default:
        drawStoneCracks(ctx, tx, ty)
    }
  }

  const dst = document.createElement("canvas")
  dst.width = size
  dst.height = size
  const dstCtx = dst.getContext("2d")!
  dstCtx.imageSmoothingEnabled = false

  // draw tile into tmp atlas-sized canvas at (tile.x, tile.y)
  const tmp = document.createElement("canvas")
  tmp.width = ATLAS_SIZE
  tmp.height = ATLAS_HEIGHT
  const tmpCtx = tmp.getContext("2d")!
  tmpCtx.imageSmoothingEnabled = false
  draw(tmpCtx, tile[0], tile[1])

  const sx = tile[0] * TILE_SIZE
  const sy = tile[1] * TILE_SIZE
  dstCtx.drawImage(tmp, sx, sy, TILE_SIZE, TILE_SIZE, 0, 0, size, size)
  return dst.toDataURL()
}
