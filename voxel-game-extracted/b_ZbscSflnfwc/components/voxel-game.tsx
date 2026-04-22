"use client"

import { useEffect, useRef, useState } from "react"
import { GameEngine, type GameStats } from "@/lib/game/engine"
import { GameHUD } from "./game-hud"
import { StartScreen } from "./start-screen"
import { primeAudio } from "@/lib/game/audio"

const INITIAL_STATS: GameStats = {
  health: 100,
  maxHealth: 100,
  hunger: 100,
  maxHunger: 100,
  stamina: 100,
  maxStamina: 100,
  time: 0.25,
  dayCount: 1,
  biome: "Plains",
  fps: 0,
  selectedSlot: 0,
  inventory: new Array(36).fill(null),
  craftGrid: new Array(4).fill(null),
  craftGridSize: 2,
  craftResult: null,
  inventoryOpen: false,
  position: { x: 0, y: 0, z: 0 },
  paused: true,
  dead: false,
  message: null,
  enemiesNear: 0,
  weather: "clear",
  isBloodMoon: false,
  achievements: [],
}

export interface Toast {
  id: number
  text: string
  kind: string
  expiresAt: number
}

export function VoxelGame() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const engineRef = useRef<GameEngine | null>(null)
  const yawRef = useRef<number>(0)
  const [stats, setStats] = useState<GameStats>(INITIAL_STATS)
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    if (!started || !containerRef.current) return
    console.log("[v0] Initializing voxel game engine...")
    primeAudio()
    const engine = new GameEngine(containerRef.current)
    engineRef.current = engine
    const unsub = engine.onStatsChange((s) => {
      setStats(s)
      yawRef.current = engine.getYaw()
    })
    const unsubT = engine.onToast((t) => {
      setToasts((prev) => [
        ...prev.slice(-4),
        { id: t.id, text: t.text, kind: t.kind, expiresAt: performance.now() + t.duration },
      ])
    })
    engine.start()
    setLoading(false)
    // Auto-request pointer lock shortly after init
    const t = setTimeout(() => {
      const el = containerRef.current?.querySelector("canvas") as HTMLCanvasElement | null
      el?.requestPointerLock?.()
    }, 120)
    return () => {
      clearTimeout(t)
      unsub()
      unsubT()
      engine.dispose()
      engineRef.current = null
    }
  }, [started])

  // Expire old toasts
  useEffect(() => {
    if (toasts.length === 0) return
    const iv = setInterval(() => {
      const now = performance.now()
      setToasts((prev) => prev.filter((t) => t.expiresAt > now))
    }, 300)
    return () => clearInterval(iv)
  }, [toasts.length])

  return (
    <div className="relative h-full w-full overflow-hidden bg-neutral-950">
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <>
          <div ref={containerRef} className="absolute inset-0" />
          {loading && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-neutral-950 text-white">
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500/30 border-t-emerald-400" />
                <p className="font-mono text-sm tracking-wider text-white/70">FORGING WORLD...</p>
              </div>
            </div>
          )}
          <GameHUD
            stats={stats}
            toasts={toasts}
            yawRef={yawRef}
            sampler={(x, z) => engineRef.current?.sampleMapColor(x, z) ?? null}
            onStart={() => {
              const el = containerRef.current?.querySelector("canvas") as HTMLCanvasElement | null
              el?.requestPointerLock?.()
            }}
          />
        </>
      )}
    </div>
  )
}
