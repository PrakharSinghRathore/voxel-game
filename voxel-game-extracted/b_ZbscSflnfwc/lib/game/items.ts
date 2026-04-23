/**
 * Unified items system. Every block has an item form sharing the block ID.
 * Non-block items use namespaced string IDs like "pickaxe_wood" or "meat_raw".
 *
 * Slots hold { id: ItemId, count: number, durability?: number } | null.
 */

import { BLOCK, BLOCK_DEFS, type BlockId } from "./constants"

export type ItemId = string

export const ITEM = {
  // Non-block items
  STICK: "stick",
  COAL: "coal",
  IRON_INGOT: "iron_ingot",
  GOLD_INGOT: "gold_ingot",
  DIAMOND: "diamond",
  PICK_WOOD: "pickaxe_wood",
  PICK_STONE: "pickaxe_stone",
  PICK_IRON: "pickaxe_iron",
  PICK_DIAMOND: "pickaxe_diamond",
  SWORD_WOOD: "sword_wood",
  SWORD_STONE: "sword_stone",
  SWORD_IRON: "sword_iron",
  SWORD_DIAMOND: "sword_diamond",
  AXE_WOOD: "axe_wood",
  AXE_STONE: "axe_stone",
  MEAT_RAW: "meat_raw",
  MEAT_COOKED: "meat_cooked",
  APPLE: "apple",
  BREAD: "bread",
  BONE: "bone",
  LEATHER: "leather",
} as const

export type ToolKind = "pickaxe" | "sword" | "axe" | "shovel" | null
export type ToolTier = "wood" | "stone" | "iron" | "diamond" | null

export interface ItemDef {
  id: ItemId
  name: string
  stackSize: number
  blockId?: BlockId // if truthy, placing in world places this block
  // tool
  tool?: ToolKind
  tier?: ToolTier
  miningSpeed?: number // multiplier: 1 = base, 2 = twice as fast
  attack?: number // damage dealt on enemy
  durability?: number // max uses
  // food
  food?: { hunger: number; thirst?: number; health?: number }
  // icon rendering
  iconKind?: "block" | "emoji" | "svg"
  emoji?: string // used when iconKind="emoji"
  color?: string // accent color for SVG
}

function blockItem(id: BlockId, stackSize = 64): ItemDef {
  const def = BLOCK_DEFS[id]
  return {
    id: String(id),
    name: def?.name ?? "Block",
    stackSize,
    blockId: id,
    iconKind: "block",
  }
}

// All items
export const ITEM_DEFS: Record<ItemId, ItemDef> = {}

function register(def: ItemDef) {
  ITEM_DEFS[def.id] = def
}

// Register block items: every non-air block is an item
const blockIds: BlockId[] = [
  BLOCK.GRASS,
  BLOCK.DIRT,
  BLOCK.STONE,
  BLOCK.SAND,
  BLOCK.SNOW,
  BLOCK.WOOD,
  BLOCK.LEAVES,
  BLOCK.COAL_ORE,
  BLOCK.IRON_ORE,
  BLOCK.GOLD_ORE,
  BLOCK.DIAMOND_ORE,
  BLOCK.GLOWSTONE,
  BLOCK.PLANKS,
  BLOCK.COBBLESTONE,
  BLOCK.CRAFTING_TABLE,
  BLOCK.BRICK,
  BLOCK.MOSS_STONE,
  BLOCK.ICE,
  BLOCK.OBSIDIAN,
  BLOCK.CRYSTAL,
  BLOCK.MAGMA,
  BLOCK.CAMPFIRE,
  BLOCK.TORCH,
]
for (const id of blockIds) register(blockItem(id))

// Tools
register({
  id: ITEM.PICK_WOOD,
  name: "Wooden Pickaxe",
  stackSize: 1,
  tool: "pickaxe",
  tier: "wood",
  miningSpeed: 2,
  attack: 2,
  durability: 60,
  iconKind: "svg",
  color: "#8B5A2B",
})
register({
  id: ITEM.PICK_STONE,
  name: "Stone Pickaxe",
  stackSize: 1,
  tool: "pickaxe",
  tier: "stone",
  miningSpeed: 4,
  attack: 3,
  durability: 132,
  iconKind: "svg",
  color: "#757575",
})
register({
  id: ITEM.PICK_IRON,
  name: "Iron Pickaxe",
  stackSize: 1,
  tool: "pickaxe",
  tier: "iron",
  miningSpeed: 6,
  attack: 4,
  durability: 251,
  iconKind: "svg",
  color: "#D4915C",
})
register({
  id: ITEM.PICK_DIAMOND,
  name: "Diamond Pickaxe",
  stackSize: 1,
  tool: "pickaxe",
  tier: "diamond",
  miningSpeed: 9,
  attack: 5,
  durability: 1562,
  iconKind: "svg",
  color: "#00E5FF",
})
register({
  id: ITEM.SWORD_WOOD,
  name: "Wooden Sword",
  stackSize: 1,
  tool: "sword",
  tier: "wood",
  attack: 5,
  durability: 60,
  iconKind: "svg",
  color: "#8B5A2B",
})
register({
  id: ITEM.SWORD_STONE,
  name: "Stone Sword",
  stackSize: 1,
  tool: "sword",
  tier: "stone",
  attack: 7,
  durability: 132,
  iconKind: "svg",
  color: "#757575",
})
register({
  id: ITEM.SWORD_IRON,
  name: "Iron Sword",
  stackSize: 1,
  tool: "sword",
  tier: "iron",
  attack: 9,
  durability: 251,
  iconKind: "svg",
  color: "#D4915C",
})
register({
  id: ITEM.SWORD_DIAMOND,
  name: "Diamond Sword",
  stackSize: 1,
  tool: "sword",
  tier: "diamond",
  attack: 12,
  durability: 1562,
  iconKind: "svg",
  color: "#00E5FF",
})
register({
  id: ITEM.AXE_WOOD,
  name: "Wooden Axe",
  stackSize: 1,
  tool: "axe",
  tier: "wood",
  miningSpeed: 2,
  attack: 4,
  durability: 60,
  iconKind: "svg",
  color: "#8B5A2B",
})
register({
  id: ITEM.AXE_STONE,
  name: "Stone Axe",
  stackSize: 1,
  tool: "axe",
  tier: "stone",
  miningSpeed: 4,
  attack: 5,
  durability: 132,
  iconKind: "svg",
  color: "#757575",
})

// Resources
register({ id: ITEM.STICK, name: "Stick", stackSize: 64, iconKind: "svg", color: "#8D6E63" })
register({ id: ITEM.COAL, name: "Coal", stackSize: 64, iconKind: "svg", color: "#212121" })
register({ id: ITEM.IRON_INGOT, name: "Iron Ingot", stackSize: 64, iconKind: "svg", color: "#E0E0E0" })
register({ id: ITEM.GOLD_INGOT, name: "Gold Ingot", stackSize: 64, iconKind: "svg", color: "#FFC107" })
register({ id: ITEM.DIAMOND, name: "Diamond", stackSize: 64, iconKind: "svg", color: "#00E5FF" })
register({ id: ITEM.BONE, name: "Bone", stackSize: 64, iconKind: "svg", color: "#ECEFF1" })
register({ id: ITEM.LEATHER, name: "Leather", stackSize: 64, iconKind: "svg", color: "#6D4C41" })

// Food
register({
  id: ITEM.MEAT_RAW,
  name: "Raw Meat",
  stackSize: 16,
  food: { hunger: 3, health: -1 },
  iconKind: "svg",
  color: "#E57373",
})
register({
  id: ITEM.MEAT_COOKED,
  name: "Cooked Meat",
  stackSize: 16,
  food: { hunger: 8, health: 1 },
  iconKind: "svg",
  color: "#BF6F4A",
})
register({
  id: ITEM.APPLE,
  name: "Apple",
  stackSize: 16,
  food: { hunger: 4, thirst: 2 },
  iconKind: "svg",
  color: "#E53935",
})
register({
  id: ITEM.BREAD,
  name: "Bread",
  stackSize: 16,
  food: { hunger: 6 },
  iconKind: "svg",
  color: "#F9A825",
})

export type Slot = { id: ItemId; count: number; durability?: number } | null

export const HOTBAR_SIZE = 9
export const MAIN_INV_SIZE = 27
export const CRAFT_GRID_SIZE = 4 // 2x2
export const TOTAL_INV_SIZE = HOTBAR_SIZE + MAIN_INV_SIZE // 36

export function makeEmptyInventory(): Slot[] {
  return new Array<Slot>(TOTAL_INV_SIZE).fill(null)
}

export function itemDef(id: ItemId | undefined | null): ItemDef | undefined {
  if (!id) return undefined
  return ITEM_DEFS[id]
}

/**
 * Add `count` of an item to the inventory. Returns the number that could not
 * be added (0 means all were added).
 */
export function addItem(inv: Slot[], id: ItemId, count: number): number {
  const def = itemDef(id)
  if (!def) return count
  let remaining = count
  // First, stack onto existing partial stacks
  for (let i = 0; i < inv.length && remaining > 0; i++) {
    const s = inv[i]
    if (!s) continue
    if (s.id === id && s.count < def.stackSize) {
      const space = def.stackSize - s.count
      const add = Math.min(space, remaining)
      s.count += add
      remaining -= add
    }
  }
  // Then fill empty slots
  for (let i = 0; i < inv.length && remaining > 0; i++) {
    if (!inv[i]) {
      const add = Math.min(def.stackSize, remaining)
      inv[i] = { id, count: add }
      remaining -= add
    }
  }
  return remaining
}

export function countItem(inv: Slot[], id: ItemId): number {
  let c = 0
  for (const s of inv) if (s && s.id === id) c += s.count
  return c
}

export function removeItem(inv: Slot[], id: ItemId, count: number): number {
  let remaining = count
  for (let i = 0; i < inv.length && remaining > 0; i++) {
    const s = inv[i]
    if (!s || s.id !== id) continue
    const take = Math.min(s.count, remaining)
    s.count -= take
    remaining -= take
    if (s.count <= 0) inv[i] = null
  }
  return count - remaining // how many were removed
}

/**
 * Compute the mining speed multiplier when breaking `blockId` with `toolItem`.
 * Returns 1 for fists/no tool, and whether the block is "minable" (drops when broken).
 */
export function miningProfile(
  blockId: BlockId,
  toolItemId: ItemId | null | undefined,
): { speed: number; canHarvest: boolean } {
  const tool = toolItemId ? itemDef(toolItemId) : undefined

  // Stone family requires any pickaxe to drop
  const stoneLike: BlockId[] = [
    BLOCK.STONE,
    BLOCK.COBBLESTONE,
    BLOCK.COAL_ORE,
    BLOCK.MOSS_STONE,
    BLOCK.BRICK,
  ]
  const ironReq: BlockId[] = [BLOCK.IRON_ORE, BLOCK.GOLD_ORE]
  const diamondReq: BlockId[] = [BLOCK.DIAMOND_ORE, BLOCK.OBSIDIAN, BLOCK.CRYSTAL]
  const woodLike: BlockId[] = [BLOCK.WOOD, BLOCK.PLANKS, BLOCK.CRAFTING_TABLE, BLOCK.CAMPFIRE]

  const tier = tool?.tier
  const isPick = tool?.tool === "pickaxe"
  const isAxe = tool?.tool === "axe"

  let canHarvest = true
  let speed = 1

  if (ironReq.includes(blockId)) {
    canHarvest = isPick && (tier === "stone" || tier === "iron" || tier === "diamond")
  } else if (diamondReq.includes(blockId)) {
    canHarvest = isPick && (tier === "iron" || tier === "diamond")
  } else if (stoneLike.includes(blockId)) {
    canHarvest = isPick
  }

  // Speed bonuses
  if (isPick && (stoneLike.includes(blockId) || ironReq.includes(blockId) || diamondReq.includes(blockId))) {
    speed = tool?.miningSpeed ?? 1
  } else if (isAxe && woodLike.includes(blockId)) {
    speed = tool?.miningSpeed ?? 1
  } else if (blockId === BLOCK.DIRT || blockId === BLOCK.GRASS || blockId === BLOCK.SAND) {
    speed = 1.2
  }

  return { speed, canHarvest }
}

/**
 * Map from a broken blockId to the item it drops (with chance for variety).
 */
export function blockDropItem(blockId: BlockId): { id: ItemId; count: number }[] {
  switch (blockId) {
    case BLOCK.COAL_ORE:
      return [{ id: ITEM.COAL, count: 1 }]
    case BLOCK.DIAMOND_ORE:
      return [{ id: ITEM.DIAMOND, count: 1 }]
    case BLOCK.GRASS:
      return [{ id: String(BLOCK.DIRT), count: 1 }]
    case BLOCK.STONE:
      return [{ id: String(BLOCK.COBBLESTONE), count: 1 }]
    case BLOCK.LEAVES:
      // chance drop apple or stick
      return Math.random() < 0.08
        ? [{ id: ITEM.APPLE, count: 1 }]
        : Math.random() < 0.25
          ? [{ id: ITEM.STICK, count: 1 }]
          : []
    default:
      return [{ id: String(blockId), count: 1 }]
  }
}
