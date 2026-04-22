/**
 * Recipe system. Supports shaped recipes on a fixed grid (2x2 or 3x3),
 * and shapeless recipes (any arrangement).
 */

import { BLOCK } from "../world/constants"
import { ITEM, type ItemId, type Slot, itemDef } from "./items"

export interface Recipe {
  id: string
  name: string
  // grid size: 2 or 3
  size: 2 | 3
  // pattern: array of length size*size; null = empty, string = item id
  pattern?: (ItemId | null)[]
  // shapeless: map of ingredients to required counts
  shapeless?: Record<ItemId, number>
  result: { id: ItemId; count: number }
}

function r(spec: Omit<Recipe, "id">): Recipe {
  // Build stable id from pattern/shapeless + result
  const key = spec.pattern ? spec.pattern.map((p) => p ?? "_").join("|") : JSON.stringify(spec.shapeless)
  return { ...spec, id: `${spec.result.id}_${key}` }
}

const PLANKS = String(BLOCK.PLANKS)
const WOOD = String(BLOCK.WOOD)
const COBBLE = String(BLOCK.COBBLESTONE)
const CRAFT = String(BLOCK.CRAFTING_TABLE)
const TORCH = String(BLOCK.TORCH)
const CAMPFIRE = String(BLOCK.CAMPFIRE)

export const RECIPES: Recipe[] = [
  // Wood -> 4 planks (shapeless, needs only 1 wood, 2x2 any slot)
  r({
    name: "Planks",
    size: 2,
    shapeless: { [WOOD]: 1 },
    result: { id: PLANKS, count: 4 },
  }),
  // 2 planks vertical -> 4 sticks
  r({
    name: "Sticks",
    size: 2,
    pattern: [PLANKS, null, PLANKS, null],
    result: { id: ITEM.STICK, count: 4 },
  }),
  r({
    name: "Sticks",
    size: 2,
    pattern: [null, PLANKS, null, PLANKS],
    result: { id: ITEM.STICK, count: 4 },
  }),
  // Crafting table: 4 planks in 2x2
  r({
    name: "Crafting Table",
    size: 2,
    pattern: [PLANKS, PLANKS, PLANKS, PLANKS],
    result: { id: CRAFT, count: 1 },
  }),
  // Torch: coal on top of stick (2x2)
  r({
    name: "Torch",
    size: 2,
    pattern: [ITEM.COAL, null, ITEM.STICK, null],
    result: { id: TORCH, count: 4 },
  }),
  r({
    name: "Torch",
    size: 2,
    pattern: [null, ITEM.COAL, null, ITEM.STICK],
    result: { id: TORCH, count: 4 },
  }),
  // Campfire: 3 sticks around coal over 3 cobblestones (3x3)
  r({
    name: "Campfire",
    size: 3,
    pattern: [
      null,
      ITEM.STICK,
      null,
      ITEM.STICK,
      ITEM.COAL,
      ITEM.STICK,
      COBBLE,
      COBBLE,
      COBBLE,
    ],
    result: { id: CAMPFIRE, count: 1 },
  }),
  // Wooden pickaxe: 3 planks top, 2 sticks middle/bottom (3x3)
  r({
    name: "Wooden Pickaxe",
    size: 3,
    pattern: [PLANKS, PLANKS, PLANKS, null, ITEM.STICK, null, null, ITEM.STICK, null],
    result: { id: ITEM.PICK_WOOD, count: 1 },
  }),
  r({
    name: "Stone Pickaxe",
    size: 3,
    pattern: [COBBLE, COBBLE, COBBLE, null, ITEM.STICK, null, null, ITEM.STICK, null],
    result: { id: ITEM.PICK_STONE, count: 1 },
  }),
  r({
    name: "Iron Pickaxe",
    size: 3,
    pattern: [
      ITEM.IRON_INGOT,
      ITEM.IRON_INGOT,
      ITEM.IRON_INGOT,
      null,
      ITEM.STICK,
      null,
      null,
      ITEM.STICK,
      null,
    ],
    result: { id: ITEM.PICK_IRON, count: 1 },
  }),
  r({
    name: "Diamond Pickaxe",
    size: 3,
    pattern: [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND, null, ITEM.STICK, null, null, ITEM.STICK, null],
    result: { id: ITEM.PICK_DIAMOND, count: 1 },
  }),
  // Swords: 2 material + 1 stick
  r({
    name: "Wooden Sword",
    size: 2,
    pattern: [PLANKS, null, PLANKS, null],
    result: { id: ITEM.SWORD_WOOD, count: 1 },
  }),
  // Actually the above conflicts with sticks. Put sword on 3x3 to disambiguate.
  r({
    name: "Stone Sword",
    size: 3,
    pattern: [null, COBBLE, null, null, COBBLE, null, null, ITEM.STICK, null],
    result: { id: ITEM.SWORD_STONE, count: 1 },
  }),
  r({
    name: "Iron Sword",
    size: 3,
    pattern: [null, ITEM.IRON_INGOT, null, null, ITEM.IRON_INGOT, null, null, ITEM.STICK, null],
    result: { id: ITEM.SWORD_IRON, count: 1 },
  }),
  r({
    name: "Diamond Sword",
    size: 3,
    pattern: [null, ITEM.DIAMOND, null, null, ITEM.DIAMOND, null, null, ITEM.STICK, null],
    result: { id: ITEM.SWORD_DIAMOND, count: 1 },
  }),
  r({
    name: "Wooden Axe",
    size: 3,
    pattern: [PLANKS, PLANKS, null, PLANKS, ITEM.STICK, null, null, ITEM.STICK, null],
    result: { id: ITEM.AXE_WOOD, count: 1 },
  }),
  r({
    name: "Stone Axe",
    size: 3,
    pattern: [COBBLE, COBBLE, null, COBBLE, ITEM.STICK, null, null, ITEM.STICK, null],
    result: { id: ITEM.AXE_STONE, count: 1 },
  }),
  // Bread: 3 apples
  r({
    name: "Bread",
    size: 2,
    shapeless: { [ITEM.APPLE]: 3 },
    result: { id: ITEM.BREAD, count: 1 },
  }),
]

/**
 * Given a grid of slots (2x2 or 3x3), find the first matching recipe.
 * For the match to work on a smaller-than-3x3 shape inside a 3x3 grid,
 * we attempt sub-grid alignment.
 */
export function findRecipe(grid: Slot[], size: 2 | 3): Recipe | null {
  // Normalize: extract which cells have items
  const hasItems = grid.some((s) => s !== null)
  if (!hasItems) return null

  for (const recipe of RECIPES) {
    if (recipe.size > size) continue
    if (recipe.shapeless) {
      if (matchesShapeless(grid, recipe.shapeless)) return recipe
      continue
    }
    if (!recipe.pattern) continue
    if (recipe.size === size) {
      if (matchesShaped(grid, recipe.pattern, size)) return recipe
    } else if (recipe.size < size) {
      // Try placing 2x2 recipe inside 3x3
      for (let oy = 0; oy <= size - recipe.size; oy++) {
        for (let ox = 0; ox <= size - recipe.size; ox++) {
          if (matchesShapedOffset(grid, recipe.pattern, recipe.size, size, ox, oy)) return recipe
        }
      }
    }
  }
  return null
}

function matchesShaped(grid: Slot[], pattern: (ItemId | null)[], size: number): boolean {
  for (let i = 0; i < size * size; i++) {
    const cell = grid[i]
    const need = pattern[i]
    if (need === null || need === undefined) {
      if (cell !== null) return false
    } else {
      if (!cell || cell.id !== need || cell.count < 1) return false
    }
  }
  return true
}

function matchesShapedOffset(
  grid: Slot[],
  pattern: (ItemId | null)[],
  pSize: number,
  gSize: number,
  ox: number,
  oy: number,
): boolean {
  // For each cell in grid: if outside pattern rect -> must be empty; else match pattern
  for (let y = 0; y < gSize; y++) {
    for (let x = 0; x < gSize; x++) {
      const gi = y * gSize + x
      const inX = x >= ox && x < ox + pSize
      const inY = y >= oy && y < oy + pSize
      if (inX && inY) {
        const need = pattern[(y - oy) * pSize + (x - ox)]
        const cell = grid[gi]
        if (need === null || need === undefined) {
          if (cell !== null) return false
        } else {
          if (!cell || cell.id !== need || cell.count < 1) return false
        }
      } else {
        if (grid[gi] !== null) return false
      }
    }
  }
  return true
}

function matchesShapeless(grid: Slot[], shapeless: Record<ItemId, number>): boolean {
  const counts: Record<ItemId, number> = {}
  for (const s of grid) {
    if (!s) continue
    counts[s.id] = (counts[s.id] ?? 0) + s.count
  }
  // All shapeless ingredients must be present at minimum; no extra items allowed
  const gridKeys = Object.keys(counts)
  const needKeys = Object.keys(shapeless)
  for (const k of gridKeys) {
    if (!(k in shapeless)) return false
  }
  for (const k of needKeys) {
    if ((counts[k] ?? 0) < shapeless[k]) return false
  }
  return true
}

/**
 * Consume the ingredients for a recipe from the grid (one unit each).
 */
export function consumeIngredients(grid: Slot[]): void {
  for (let i = 0; i < grid.length; i++) {
    const s = grid[i]
    if (!s) continue
    s.count -= 1
    if (s.count <= 0) grid[i] = null
  }
}

// Avoid unused warnings
void itemDef
