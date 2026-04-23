import { TILE, type TileCoord } from "./textures"

export const CHUNK_SIZE_X = 16
export const CHUNK_SIZE_Z = 16
export const CHUNK_SIZE_Y = 64
export const WORLD_HEIGHT = CHUNK_SIZE_Y
export const SEA_LEVEL = 22
export const RENDER_DISTANCE = 6

// Block IDs
export const BLOCK = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  SNOW: 5,
  WOOD: 6,
  LEAVES: 7,
  COAL_ORE: 8,
  IRON_ORE: 9,
  GOLD_ORE: 10,
  DIAMOND_ORE: 11,
  GLOWSTONE: 12,
  BEDROCK: 13,
  PLANKS: 14,
  COBBLESTONE: 15,
  CRAFTING_TABLE: 16,
  BRICK: 17,
  MOSS_STONE: 18,
  ICE: 19,
  OBSIDIAN: 20,
  CRYSTAL: 21,
  MAGMA: 22,
  WATER: 23,
  CAMPFIRE: 24,
  TORCH: 25,
} as const

export type BlockId = (typeof BLOCK)[keyof typeof BLOCK]

export interface BlockDef {
  id: BlockId
  name: string
  // UV tiles per face: [+x, -x, +y, -y, +z, -z]
  faces: [TileCoord, TileCoord, TileCoord, TileCoord, TileCoord, TileCoord]
  solid: boolean
  transparent: boolean
  emissive: number // 0-15
  breakTime: number
  isLiquid?: boolean
  drops?: BlockId // which block item it drops (defaults to itself)
}

function allSame(tile: TileCoord): BlockDef["faces"] {
  return [tile, tile, tile, tile, tile, tile]
}

function topBottomSides(top: TileCoord, bottom: TileCoord, side: TileCoord): BlockDef["faces"] {
  // [+x, -x, +y, -y, +z, -z]
  return [side, side, top, bottom, side, side]
}

export const BLOCK_DEFS: Record<BlockId, BlockDef> = {
  [BLOCK.AIR]: {
    id: BLOCK.AIR,
    name: "Air",
    faces: allSame(TILE.STONE),
    solid: false,
    transparent: true,
    emissive: 0,
    breakTime: 0,
  },
  [BLOCK.GRASS]: {
    id: BLOCK.GRASS,
    name: "Grass",
    faces: topBottomSides(TILE.GRASS_TOP, TILE.DIRT, TILE.GRASS_SIDE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.5,
    drops: BLOCK.DIRT,
  },
  [BLOCK.DIRT]: {
    id: BLOCK.DIRT,
    name: "Dirt",
    faces: allSame(TILE.DIRT),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.4,
  },
  [BLOCK.STONE]: {
    id: BLOCK.STONE,
    name: "Stone",
    faces: allSame(TILE.STONE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 1.5,
    drops: BLOCK.COBBLESTONE,
  },
  [BLOCK.SAND]: {
    id: BLOCK.SAND,
    name: "Sand",
    faces: allSame(TILE.SAND),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.4,
  },
  [BLOCK.SNOW]: {
    id: BLOCK.SNOW,
    name: "Snow",
    faces: allSame(TILE.SNOW),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.3,
  },
  [BLOCK.WOOD]: {
    id: BLOCK.WOOD,
    name: "Wood",
    faces: topBottomSides(TILE.WOOD_TOP, TILE.WOOD_TOP, TILE.WOOD_SIDE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.8,
  },
  [BLOCK.LEAVES]: {
    id: BLOCK.LEAVES,
    name: "Leaves",
    faces: allSame(TILE.LEAVES),
    solid: true,
    transparent: true,
    emissive: 0,
    breakTime: 0.2,
  },
  [BLOCK.COAL_ORE]: {
    id: BLOCK.COAL_ORE,
    name: "Coal Ore",
    faces: allSame(TILE.COAL_ORE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 1.5,
  },
  [BLOCK.IRON_ORE]: {
    id: BLOCK.IRON_ORE,
    name: "Iron Ore",
    faces: allSame(TILE.IRON_ORE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 2,
  },
  [BLOCK.GOLD_ORE]: {
    id: BLOCK.GOLD_ORE,
    name: "Gold Ore",
    faces: allSame(TILE.GOLD_ORE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 2.5,
  },
  [BLOCK.DIAMOND_ORE]: {
    id: BLOCK.DIAMOND_ORE,
    name: "Diamond Ore",
    faces: allSame(TILE.DIAMOND_ORE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 3,
  },
  [BLOCK.GLOWSTONE]: {
    id: BLOCK.GLOWSTONE,
    name: "Glowstone",
    faces: allSame(TILE.GLOWSTONE),
    solid: true,
    transparent: false,
    emissive: 15,
    breakTime: 0.3,
  },
  [BLOCK.BEDROCK]: {
    id: BLOCK.BEDROCK,
    name: "Bedrock",
    faces: allSame(TILE.BEDROCK),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: Number.POSITIVE_INFINITY,
  },
  [BLOCK.PLANKS]: {
    id: BLOCK.PLANKS,
    name: "Planks",
    faces: allSame(TILE.PLANKS),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.6,
  },
  [BLOCK.COBBLESTONE]: {
    id: BLOCK.COBBLESTONE,
    name: "Cobblestone",
    faces: allSame(TILE.COBBLESTONE),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 1.5,
  },
  [BLOCK.CRAFTING_TABLE]: {
    id: BLOCK.CRAFTING_TABLE,
    name: "Crafting Table",
    faces: topBottomSides(TILE.CRAFTING, TILE.PLANKS, TILE.PLANKS),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 0.8,
  },
  [BLOCK.BRICK]: {
    id: BLOCK.BRICK,
    name: "Brick",
    faces: allSame(TILE.BRICK),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 1.5,
  },
  [BLOCK.MOSS_STONE]: {
    id: BLOCK.MOSS_STONE,
    name: "Moss Stone",
    faces: allSame(TILE.MOSS),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 1.5,
  },
  [BLOCK.ICE]: {
    id: BLOCK.ICE,
    name: "Ice",
    faces: allSame(TILE.ICE),
    solid: true,
    transparent: true,
    emissive: 0,
    breakTime: 0.5,
  },
  [BLOCK.OBSIDIAN]: {
    id: BLOCK.OBSIDIAN,
    name: "Obsidian",
    faces: allSame(TILE.OBSIDIAN),
    solid: true,
    transparent: false,
    emissive: 0,
    breakTime: 5,
  },
  [BLOCK.CRYSTAL]: {
    id: BLOCK.CRYSTAL,
    name: "Crystal",
    faces: allSame(TILE.CRYSTAL),
    solid: true,
    transparent: false,
    emissive: 8,
    breakTime: 2,
  },
  [BLOCK.MAGMA]: {
    id: BLOCK.MAGMA,
    name: "Magma",
    faces: allSame(TILE.MAGMA),
    solid: true,
    transparent: false,
    emissive: 10,
    breakTime: 1,
  },
  [BLOCK.WATER]: {
    id: BLOCK.WATER,
    name: "Water",
    faces: allSame(TILE.WATER),
    solid: false,
    transparent: true,
    emissive: 0,
    breakTime: 0,
    isLiquid: true,
  },
  [BLOCK.CAMPFIRE]: {
    id: BLOCK.CAMPFIRE,
    name: "Campfire",
    faces: topBottomSides(TILE.CAMPFIRE_TOP, TILE.COBBLESTONE, TILE.CAMPFIRE_SIDE),
    solid: true,
    transparent: false,
    emissive: 14,
    breakTime: 0.6,
  },
  [BLOCK.TORCH]: {
    id: BLOCK.TORCH,
    name: "Torch",
    faces: allSame(TILE.TORCH),
    solid: true,
    transparent: true,
    emissive: 13,
    breakTime: 0.1,
  },
}

export const HOTBAR_BLOCKS: BlockId[] = [
  BLOCK.GRASS,
  BLOCK.DIRT,
  BLOCK.STONE,
  BLOCK.COBBLESTONE,
  BLOCK.WOOD,
  BLOCK.PLANKS,
  BLOCK.LEAVES,
  BLOCK.GLOWSTONE,
  BLOCK.CRAFTING_TABLE,
]
