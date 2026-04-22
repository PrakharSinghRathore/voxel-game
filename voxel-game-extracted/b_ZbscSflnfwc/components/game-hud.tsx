"use client"

import { useEffect, useState, useMemo } from "react"
import type { GameStats } from "@/lib/game/engine"
import { BLOCK_DEFS, HOTBAR_BLOCKS } from "@/lib/game/constants"
import { tileToDataURL, type TileCoord } from "@/lib/game/textures"
import { Heart, Utensils, Zap, Skull, Compass, MapPin, Moon, Sun, AlertTriangle, Sparkles, Info } from "lucide-react"
import { Minimap } from "./minimap"
import type { Toast } from "./voxel-game"

// Reverse-map from block id to the top face tile for HUD icons
const BLOCK_ICON_TILE: Record<number, TileCoord> = {}
for (const def of Object.values(BLOCK_DEFS)) {
  // Use the +y face (index 2) as the icon
  BLOCK_ICON_TILE[def.id] = def.faces[2]
}

interface Props {
  stats: GameStats
  toasts: Toast[]
  yawRef: { current: number }
  sampler: (x: number, z: number) => { r: number; g: number; b: number } | null
  onStart: () => void
}

export function GameHUD({ stats, toasts, yawRef, sampler, onStart }: Props) {
  const [iconUrls, setIconUrls] = useState<Record<number, string>>({})

  useEffect(() => {
    // Generate HUD icons once
    const urls: Record<number, string> = {}
    for (const id of HOTBAR_BLOCKS) {
      const tile = BLOCK_ICON_TILE[id]
      if (tile) urls[id] = tileToDataURL(tile, 48)
    }
    setIconUrls(urls)
  }, [])

  const timeLabel = useMemo(() => {
    const h = Math.floor(stats.time * 24)
    const m = Math.floor((stats.time * 24 - h) * 60)
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
  }, [stats.time])

  const isNight = stats.time > 0.55 || stats.time < 0.1

  return (
    <>
      {/* Crosshair */}
      {!stats.paused && !stats.dead && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-5 w-5">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/80 shadow-[0_0_4px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-white/80 shadow-[0_0_4px_rgba(0,0,0,0.8)]" />
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
          </div>
        </div>
      )}

      {/* Top-left: info */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-col gap-2 font-mono text-sm">
        <div className="flex flex-col gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-white/60">Biome:</span>
            <span className="font-semibold text-emerald-300">{stats.biome}</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-white/60">Pos:</span>
            <span className="tabular-nums">
              {stats.position.x.toFixed(0)} / {stats.position.y.toFixed(0)} / {stats.position.z.toFixed(0)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isNight ? (
              <Moon className="h-3.5 w-3.5 text-indigo-300" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-300" />
            )}
            <span className="text-white/60">Day {stats.dayCount} •</span>
            <span className={isNight ? "text-indigo-300" : "text-amber-300"}>{timeLabel}</span>
          </div>
        </div>
      </div>

      {/* Top-right: FPS, enemies, minimap */}
      <div className="pointer-events-none absolute right-4 top-4 z-10 flex flex-col items-end gap-2 font-mono text-sm">
        <div className="flex flex-col gap-1.5 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-right text-white backdrop-blur-sm">
          <div className="flex items-center justify-end gap-2">
            <span className="text-white/60">FPS</span>
            <span className="tabular-nums font-semibold">{stats.fps}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Skull className="h-3.5 w-3.5 text-rose-400" />
            <span className="text-white/60">Nearby</span>
            <span className="tabular-nums font-semibold">{stats.enemiesNear}</span>
          </div>
        </div>
        <Minimap stats={stats} yawRef={yawRef} worldSampler={sampler} />
      </div>

      {/* Toasts (center-top) */}
      <div className="pointer-events-none absolute left-1/2 top-16 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} />
        ))}
      </div>

      {/* Bottom: stat bars + hotbar */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-3 p-4">
        {/* Stat bars */}
        <div className="flex items-center gap-4">
          <StatBar icon={<Heart className="h-4 w-4" />} color="#ef4444" value={stats.health} max={stats.maxHealth} label="Health" />
          <StatBar
            icon={<Utensils className="h-4 w-4" />}
            color="#f59e0b"
            value={stats.hunger}
            max={stats.maxHunger}
            label="Hunger"
          />
          <StatBar
            icon={<Zap className="h-4 w-4" />}
            color="#10b981"
            value={stats.stamina}
            max={stats.maxStamina}
            label="Stamina"
          />
        </div>

        {/* Hotbar */}
        <div className="flex gap-1 rounded-md border border-white/10 bg-black/60 p-1.5 backdrop-blur-sm">
          {HOTBAR_BLOCKS.map((id, i) => {
            const selected = i === stats.selectedSlot
            const count = stats.inventory[i]?.count ?? 0
            const def = BLOCK_DEFS[id]
            const url = iconUrls[id]
            return (
              <div
                key={i}
                className={`relative flex h-12 w-12 items-center justify-center rounded-sm border-2 transition-all ${
                  selected ? "border-white bg-white/20 scale-110" : "border-white/20 bg-black/30"
                }`}
                title={def.name}
              >
                {url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={url || "/placeholder.svg"}
                    alt={def.name}
                    className="h-9 w-9"
                    style={{ imageRendering: "pixelated" }}
                  />
                ) : (
                  <div className="h-9 w-9 bg-white/10" />
                )}
                <span className="absolute bottom-0 right-1 font-mono text-[10px] font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]">
                  {count}
                </span>
                <span className="absolute left-0.5 top-0 font-mono text-[9px] font-bold text-white/60">{i + 1}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Paused overlay */}
      {stats.paused && !stats.dead && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="flex max-w-md flex-col items-center gap-6 rounded-lg border border-white/10 bg-neutral-900/90 p-8 text-center text-white shadow-2xl">
            <h2 className="font-mono text-3xl font-bold tracking-wider text-emerald-300">BLOCKREALM</h2>
            <p className="text-sm text-white/70">
              Click to resume. <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs">ESC</kbd> to pause.
            </p>
            <Controls />
            <button
              onClick={onStart}
              className="rounded-md bg-emerald-500 px-6 py-2 font-mono font-semibold text-neutral-900 transition-colors hover:bg-emerald-400"
            >
              RESUME
            </button>
          </div>
        </div>
      )}

      {/* Death overlay */}
      {stats.dead && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-rose-950/80 backdrop-blur-sm">
          <div className="flex max-w-md flex-col items-center gap-6 rounded-lg border border-rose-500/30 bg-neutral-900/90 p-8 text-center text-white shadow-2xl">
            <Skull className="h-14 w-14 text-rose-400" />
            <h2 className="font-mono text-4xl font-bold tracking-widest text-rose-400">YOU DIED</h2>
            <p className="text-sm text-white/70">
              Survived {stats.dayCount} {stats.dayCount === 1 ? "day" : "days"} in the {stats.biome}.
            </p>
            <p className="text-xs text-white/50">
              Press <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs">R</kbd> to respawn
            </p>
          </div>
        </div>
      )}
    </>
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const color =
    toast.kind === "danger"
      ? "border-rose-500/40 bg-rose-950/80 text-rose-100"
      : toast.kind === "success"
        ? "border-emerald-500/40 bg-emerald-950/80 text-emerald-100"
        : "border-white/10 bg-black/70 text-white"
  const Icon =
    toast.kind === "danger" ? AlertTriangle : toast.kind === "success" ? Sparkles : Info
  return (
    <div
      className={`pointer-events-none flex items-center gap-2 rounded-md border px-4 py-2 font-mono text-sm shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-top-2 ${color}`}
    >
      <Icon className="h-4 w-4" />
      <span>{toast.text}</span>
    </div>
  )
}

function StatBar({
  icon,
  color,
  value,
  max,
  label,
}: {
  icon: React.ReactNode
  color: string
  value: number
  max: number
  label: string
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
      <span style={{ color }}>{icon}</span>
      <div className="flex flex-col">
        <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full transition-all duration-200"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        </div>
        <span className="font-mono text-[10px] text-white/60">
          {label}: {Math.round(value)}/{max}
        </span>
      </div>
    </div>
  )
}

function Controls() {
  const row = (k: string, v: string) => (
    <div className="flex items-center justify-between gap-4">
      <span className="font-mono text-xs text-white/70">{v}</span>
      <kbd className="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs">{k}</kbd>
    </div>
  )
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md border border-white/10 bg-black/40 p-4 text-left">
      {row("WASD", "Move")}
      {row("SHIFT", "Sprint")}
      {row("SPACE", "Jump / Swim up")}
      {row("L-CLICK", "Break block / attack")}
      {row("R-CLICK", "Place block")}
      {row("SCROLL / 1-9", "Change hotbar")}
      {row("MOUSE", "Look around")}
    </div>
  )
}
