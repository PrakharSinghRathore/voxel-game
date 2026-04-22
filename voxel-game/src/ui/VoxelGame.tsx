import { useEffect, useRef, useState, useCallback } from 'react'
import { GameEngine, type GameStats } from '../engine/GameEngine'
import { GameHUD } from './GameHUD'
import { StartScreen } from './StartScreen'

export interface Toast {
  id: number
  text: string
  kind: string
  expiresAt: number
}

let toastIdCounter = 0

export function VoxelGame() {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<GameEngine | null>(null)
  const [stats, setStats] = useState<GameStats | null>(null)
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    if (!started || !containerRef.current) return
    const engine = new GameEngine(containerRef.current)
    engineRef.current = engine
    engine.onStatsChange((s) => setStats(s))
    engine.onToast((msg) => {
      const id = ++toastIdCounter
      setToasts((prev) => [
        ...prev.slice(-4),
        { id, text: msg, kind: 'info', expiresAt: performance.now() + 3000 },
      ])
    })
    engine.start()
    setLoading(false)
    const t = setTimeout(() => {
      const el = containerRef.current?.querySelector('canvas') as HTMLCanvasElement | null
      el?.requestPointerLock?.()
    }, 120)
    return () => {
      clearTimeout(t)
      engine.dispose()
      engineRef.current = null
    }
  }, [started])

  useEffect(() => {
    if (toasts.length === 0) return
    const iv = setInterval(() => {
      const now = performance.now()
      setToasts((prev) => prev.filter((t) => t.expiresAt > now))
    }, 300)
    return () => clearInterval(iv)
  }, [toasts.length])

  const handleResume = useCallback(() => {
    const el = containerRef.current?.querySelector('canvas') as HTMLCanvasElement | null
    el?.requestPointerLock?.()
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-950">
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
          {stats && (
            <GameHUD
              stats={stats}
              toasts={toasts}
              onStart={handleResume}
            />
          )}
        </>
      )}
    </div>
  )
}
