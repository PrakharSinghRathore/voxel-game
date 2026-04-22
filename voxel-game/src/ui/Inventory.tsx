import { useState } from 'react'
import type { GameStats } from '../engine/GameEngine'
import { itemDef, type Slot } from '../inventory/items'

interface Props {
  stats: GameStats
}

export function Inventory({ stats }: Props) {
  const [hovered, setHovered] = useState<{ id: string; rect: DOMRect } | null>(null)
  const hotbar = stats.inventory.slice(0, 9)
  const mainInv = stats.inventory.slice(9, 36)
  const craftSize = stats.craftGridSize

  const handleHover = (slot: Slot, e: React.MouseEvent) => {
    if (slot) {
      setHovered({ id: slot.id, rect: e.currentTarget.getBoundingClientRect() })
    } else {
      setHovered(null)
    }
  }

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-neutral-900/95 p-6 shadow-2xl">
        <h2 className="text-center font-mono text-lg font-bold tracking-wider text-emerald-300">INVENTORY</h2>

        <div className="flex gap-6">
          {/* Main inventory grid: 9 columns × 4 rows */}
          <div className="flex flex-col gap-1">
            {/* Hotbar row */}
            <div className="mb-1 flex gap-1 border-b border-white/10 pb-1">
              {hotbar.map((slot, i) => (
                <SlotCell key={`h${i}`} slot={slot} index={i} onHover={handleHover} selected={i === stats.selectedSlot} />
              ))}
            </div>
            {/* Main 3×9 grid */}
            <div className="flex flex-col gap-1">
              {Array.from({ length: 3 }, (_, row) => (
                <div key={row} className="flex gap-1">
                  {mainInv.slice(row * 9, row * 9 + 9).map((slot, col) => (
                    <SlotCell key={`m${row * 9 + col}`} slot={slot} index={row * 9 + col + 9} onHover={handleHover} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Crafting area */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-white/50">CRAFTING</span>
            <div className="flex flex-col gap-1">
              {Array.from({ length: craftSize }, (_, row) => (
                <div key={row} className="flex gap-1">
                  {stats.craftGrid.slice(row * craftSize, row * craftSize + craftSize).map((slot, col) => (
                    <SlotCell key={`c${row * craftSize + col}`} slot={slot} index={row * craftSize + col} onHover={handleHover} isCraft />
                  ))}
                </div>
              ))}
            </div>
            {/* Arrow */}
            <svg className="h-4 w-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            {/* Result slot */}
            <SlotCell slot={stats.craftResult} index={0} onHover={handleHover} isResult />
          </div>
        </div>

        {/* Position info */}
        <div className="mt-1 text-center font-mono text-[10px] text-white/40">
          Pos: {stats.position.x.toFixed(0)}, {stats.position.y.toFixed(0)}, {stats.position.z.toFixed(0)} — Press E to close
        </div>
      </div>

      {/* Tooltip */}
      {hovered && (() => {
        const def = itemDef(hovered.id)
        if (!def) return null
        return (
          <div
            className="pointer-events-none fixed z-50 rounded-md border border-white/15 bg-neutral-800/95 px-3 py-2 shadow-xl backdrop-blur-sm"
            style={{
              left: hovered.rect.right + 8,
              top: hovered.rect.top,
            }}
          >
            <p className="font-mono text-sm font-bold text-white">{def.name}</p>
            {def.tool && <p className="font-mono text-[10px] text-amber-300">{def.tool} — {def.tier} tier</p>}
            {def.attack && <p className="font-mono text-[10px] text-rose-300">⚔ Attack: {def.attack}</p>}
            {def.miningSpeed && <p className="font-mono text-[10px] text-emerald-300">⛏ Speed: {def.miningSpeed}×</p>}
            {def.durability && <p className="font-mono text-[10px] text-white/50">Durability: {def.durability}</p>}
            {def.food && <p className="font-mono text-[10px] text-green-300">🍗 Hunger: +{def.food.hunger}{def.food.thirst ? ` Thirst: +${def.food.thirst}` : ''}</p>}
            <p className="mt-1 font-mono text-[9px] text-white/30">Stack: {def.stackSize}</p>
          </div>
        )
      })()}
    </div>
  )
}

function SlotCell({ slot, index, onHover, selected, isCraft, isResult }: {
  slot: Slot; index: number; onHover: (s: Slot, e: React.MouseEvent) => void
  selected?: boolean; isCraft?: boolean; isResult?: boolean
}) {
  const def = slot ? itemDef(slot.id) : undefined
  return (
    <div
      onMouseEnter={(e) => onHover(slot, e)}
      onMouseLeave={() => onHover(null, null as any)}
      className={`relative flex h-11 w-11 items-center justify-center rounded border-2 transition-all ${
        selected
          ? 'border-white bg-white/20'
          : isResult
            ? 'border-emerald-500/40 bg-emerald-950/30'
            : isCraft
              ? 'border-amber-500/20 bg-amber-950/20'
              : 'border-white/10 bg-black/30'
      } hover:border-white/40`}
    >
      {slot && def ? (
        <div className="flex flex-col items-center">
          <div className="h-7 w-7 rounded-sm" style={{ backgroundColor: def.color || '#555' }} />
          {slot.count > 1 && (
            <span className="absolute bottom-0 right-0.5 font-mono text-[9px] font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]">
              {slot.count}
            </span>
          )}
          {slot.durability !== undefined && def.durability && (
            <div className="absolute bottom-0 left-0.5 right-0.5 h-0.5 overflow-hidden rounded-full bg-black/50">
              <div className="h-full bg-emerald-400" style={{ width: `${(slot.durability / def.durability) * 100}%` }} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
