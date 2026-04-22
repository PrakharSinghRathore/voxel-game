import { useMemo } from 'react'
import type { GameStats } from '../engine/GameEngine'
import type { Toast } from './VoxelGame'
import { Minimap } from './Minimap'
import { DeathScreen } from './DeathScreen'
import { Inventory } from './Inventory'
import { itemDef } from '../inventory/items'

interface Props {
  stats: GameStats
  toasts: Toast[]
  onStart: () => void
}

export function GameHUD({ stats, toasts, onStart }: Props) {
  const timeLabel = useMemo(() => {
    const h = Math.floor(stats.time * 24)
    const m = Math.floor((stats.time * 24 - h) * 60)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  }, [stats.time])

  const isNight = stats.time > 0.55 || stats.time < 0.1

  if (stats.dead) return <DeathScreen stats={stats} />
  if (stats.inventoryOpen) return <Inventory stats={stats} />

  return (
    <>
      {/* Crosshair */}
      {!stats.paused && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-5 w-5">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/80 shadow-[0_0_3px_rgba(0,0,0,0.9)]" />
            <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-white/80 shadow-[0_0_3px_rgba(0,0,0,0.9)]" />
          </div>
        </div>
      )}

      {/* Top-left: Stats */}
      <div className="pointer-events-none absolute left-3 top-3 z-10 flex flex-col gap-1.5">
        <StatBar icon="❤" color="#ef4444" value={stats.health} max={stats.maxHealth} label="HP" />
        <StatBar icon="🍖" color="#f59e0b" value={stats.hunger} max={stats.maxHunger} label="Hunger" />
        <StatBar icon="💧" color="#3b82f6" value={stats.thirst} max={stats.maxThirst} label="Thirst" />
        <StatBar icon="⚡" color="#10b981" value={stats.stamina} max={stats.maxStamina} label="Stamina" />
        <div className="flex items-center gap-2 rounded bg-black/60 px-2 py-1 backdrop-blur-sm">
          <span className="font-mono text-[10px] text-white/70">{stats.weather === 'rain' ? '🌧' : stats.weather === 'snow' ? '❄' : '☀'} {stats.weather}</span>
          {stats.isBloodMoon && <span className="animate-pulse text-xs text-red-400">🩸 BLOOD MOON</span>}
        </div>
      </div>

      {/* Top-center: Day/Time */}
      <div className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-black/60 px-4 py-1.5 font-mono text-xs backdrop-blur-sm">
          <span className={isNight ? 'text-indigo-300' : 'text-amber-300'}>{isNight ? '🌙' : '☀'}</span>
          <span className="text-white/80">Day {stats.dayCount}</span>
          <span className="text-white/50">•</span>
          <span className={isNight ? 'text-indigo-300' : 'text-amber-300'}>{timeLabel}</span>
        </div>
      </div>

      {/* Top-right: FPS, enemies, minimap */}
      <div className="pointer-events-none absolute right-3 top-3 z-10 flex flex-col items-end gap-2">
        <div className="flex flex-col gap-1 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-xs backdrop-blur-sm">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-white/50">FPS</span>
            <span className="tabular-nums font-semibold">{stats.fps}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span>💀</span>
            <span className="text-white/50">Nearby</span>
            <span className="tabular-nums font-semibold text-rose-400">{stats.enemiesNear}</span>
          </div>
        </div>
        <Minimap stats={stats} />
      </div>

      {/* Toasts */}
      <div className="pointer-events-none absolute right-3 top-56 z-10 flex flex-col items-end gap-2">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} />
        ))}
      </div>

      {/* Bottom-center: Hotbar */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
        <div className="flex gap-1 rounded-lg border border-white/10 bg-black/60 p-1.5 backdrop-blur-sm">
          {stats.inventory.slice(0, 9).map((slot, i) => {
            const selected = i === stats.selectedSlot
            const def = slot ? itemDef(slot.id) : undefined
            return (
              <div
                key={i}
                className={`relative flex h-12 w-12 items-center justify-center rounded border-2 transition-all ${
                  selected
                    ? 'border-white bg-white/20 scale-110 shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                    : 'border-white/15 bg-black/30'
                }`}
              >
                {slot && def ? (
                  <div
                    className="h-8 w-8 rounded-sm"
                    style={{ backgroundColor: def.color || '#555' }}
                    title={def.name}
                  />
                ) : null}
                {slot && slot.count > 1 && (
                  <span className="absolute bottom-0 right-0.5 font-mono text-[10px] font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]">
                    {slot.count}
                  </span>
                )}
                {slot && slot.durability !== undefined && def?.durability && (
                  <div className="absolute bottom-0 left-0.5 right-0.5 h-0.5 overflow-hidden rounded-full bg-black/50">
                    <div
                      className="h-full bg-emerald-400 transition-all"
                      style={{ width: `${(slot.durability / def.durability) * 100}%` }}
                    />
                  </div>
                )}
                <span className="absolute left-0.5 top-0 font-mono text-[8px] font-bold text-white/40">
                  {i + 1}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom-right: Equipped item */}
      {stats.inventory[stats.selectedSlot] && (
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur-sm">
          <span className="text-white/50">Equipped:</span>{' '}
          <span className="font-semibold text-emerald-300">{itemDef(stats.inventory[stats.selectedSlot]!.id)?.name ?? 'Unknown'}</span>
        </div>
      )}

      {/* Paused overlay */}
      {stats.paused && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="flex max-w-sm flex-col items-center gap-5 rounded-lg border border-white/10 bg-neutral-900/90 p-8 text-center text-white shadow-2xl">
            <h2 className="font-mono text-2xl font-bold tracking-wider text-emerald-300">PAUSED</h2>
            <p className="text-xs text-white/60">Click to resume</p>
            <button
              onClick={onStart}
              className="rounded-md bg-emerald-500 px-6 py-2 font-mono font-semibold text-neutral-900 transition-colors hover:bg-emerald-400"
            >
              RESUME
            </button>
          </div>
        </div>
      )}

      {/* Center message */}
      {stats.message && !stats.paused && (
        <div className="pointer-events-none absolute left-1/2 top-1/3 z-10 -translate-x-1/2">
          <p className="animate-pulse font-mono text-sm text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {stats.message}
          </p>
        </div>
      )}
    </>
  )
}

function StatBar({ icon, color, value, max, label }: { icon: string; color: string; value: number; max: number; label: string }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  const critical = pct < 20
  return (
    <div className={`flex items-center gap-2 rounded bg-black/60 px-2 py-1 backdrop-blur-sm ${critical ? 'animate-pulse' : ''}`}>
      <span className="text-xs">{icon}</span>
      <div className="flex flex-col gap-0.5">
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10 sm:w-28">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        </div>
        <span className="font-mono text-[9px] text-white/50">
          {label} {Math.round(value)}/{max}
        </span>
      </div>
    </div>
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const colors =
    toast.kind === 'danger'
      ? 'border-rose-500/40 bg-rose-950/80 text-rose-100'
      : toast.kind === 'success'
        ? 'border-emerald-500/40 bg-emerald-950/80 text-emerald-100'
        : 'border-white/10 bg-black/70 text-white'
  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-xs shadow-lg backdrop-blur-sm transition-all animate-in slide-in-from-right-2 ${colors}`}
    >
      <span>{toast.kind === 'danger' ? '⚠' : toast.kind === 'success' ? '✨' : 'ℹ'}</span>
      <span>{toast.text}</span>
    </div>
  )
}
