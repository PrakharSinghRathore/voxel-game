"use client"

import { useEffect, useRef } from "react"
import { Swords, Pickaxe, Mountain, Moon, Sun, Cloud } from "lucide-react"

interface Props {
  onStart: () => void
}

export function StartScreen({ onStart }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Animated background pixel voxel cubes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
    }
    resize()
    window.addEventListener("resize", resize)

    const cubes: Array<{
      x: number
      y: number
      size: number
      color: string
      speed: number
      rot: number
      rotSpeed: number
    }> = []
    const colors = ["#4CAF50", "#7A4E2E", "#9E9E9E", "#F5DEB3", "#2E7D32", "#6D4C30", "#8A8A8A"]
    for (let i = 0; i < 40; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 10 + Math.random() * 30,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.5,
      })
    }

    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.1, (t - last) / 1000)
      last = t

      // bg gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, "#0f172a")
      grad.addColorStop(0.6, "#1e293b")
      grad.addColorStop(1, "#020617")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const c of cubes) {
        c.y += c.speed * dt * window.devicePixelRatio
        c.rot += c.rotSpeed * dt
        if (c.y - c.size > canvas.height) {
          c.y = -c.size * 2
          c.x = Math.random() * canvas.width
        }
        ctx.save()
        ctx.translate(c.x, c.y)
        ctx.rotate(c.rot)
        // Draw 3/4 isometric-ish cube
        const s = c.size
        // top face (lighter)
        ctx.fillStyle = lighten(c.color, 25)
        ctx.beginPath()
        ctx.moveTo(0, -s / 2)
        ctx.lineTo(s / 2, -s / 4)
        ctx.lineTo(0, 0)
        ctx.lineTo(-s / 2, -s / 4)
        ctx.closePath()
        ctx.fill()
        // left face
        ctx.fillStyle = darken(c.color, 15)
        ctx.beginPath()
        ctx.moveTo(-s / 2, -s / 4)
        ctx.lineTo(0, 0)
        ctx.lineTo(0, s / 2)
        ctx.lineTo(-s / 2, s / 4)
        ctx.closePath()
        ctx.fill()
        // right face
        ctx.fillStyle = c.color
        ctx.beginPath()
        ctx.moveTo(s / 2, -s / 4)
        ctx.lineTo(0, 0)
        ctx.lineTo(0, s / 2)
        ctx.lineTo(s / 2, s / 4)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-white">
        <div className="mb-2 flex items-center gap-3 text-emerald-400">
          <Mountain className="h-8 w-8" />
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-white/60">A VOXEL SURVIVAL GAME</span>
          <Mountain className="h-8 w-8" />
        </div>
        <h1 className="mb-4 bg-gradient-to-b from-white to-white/50 bg-clip-text font-mono text-6xl font-black tracking-tighter text-transparent md:text-8xl">
          BLOCK<span className="text-emerald-400">REALM</span>
        </h1>
        <p className="mb-10 max-w-xl text-balance text-center text-sm text-white/70 md:text-base">
          Carve your place in a procedural voxel world. Mine ores, build shelters, and survive the night when monsters
          roam. Every world is unique.
        </p>

        <button
          onClick={onStart}
          className="group mb-10 inline-flex items-center gap-3 rounded-lg bg-emerald-500 px-8 py-4 font-mono text-lg font-bold tracking-wider text-neutral-900 shadow-[0_4px_0_#047857,0_8px_24px_rgba(16,185,129,0.3)] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_#047857,0_6px_16px_rgba(16,185,129,0.4)] active:translate-y-1 active:shadow-[0_0_0_#047857]"
        >
          <Pickaxe className="h-5 w-5 transition-transform group-hover:rotate-[-20deg]" />
          BEGIN ADVENTURE
        </button>

        <div className="grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          <Feature icon={<Mountain className="h-5 w-5" />} title="Procedural World" desc="Infinite terrain" />
          <Feature icon={<Pickaxe className="h-5 w-5" />} title="Mine & Build" desc="23 block types" />
          <Feature icon={<Swords className="h-5 w-5" />} title="Combat" desc="Zombies & slimes" />
          <Feature icon={<Moon className="h-5 w-5" />} title="Day/Night" desc="10 min cycle" />
        </div>

        <div className="mt-10 flex items-center gap-4 text-xs text-white/40">
          <span className="inline-flex items-center gap-1">
            <Sun className="h-3.5 w-3.5" />
            Dynamic lighting
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Cloud className="h-3.5 w-3.5" />
            Weather system
          </span>
          <span>•</span>
          <span>5 Biomes</span>
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-3 py-3 text-center backdrop-blur-sm">
      <span className="text-emerald-400">{icon}</span>
      <span className="font-mono text-sm font-semibold text-white">{title}</span>
      <span className="font-mono text-[10px] text-white/50">{desc}</span>
    </div>
  )
}

function lighten(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgb(${Math.min(255, r + amt)},${Math.min(255, g + amt)},${Math.min(255, b + amt)})`
}
function darken(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex)
  return `rgb(${Math.max(0, r - amt)},${Math.max(0, g - amt)},${Math.max(0, b - amt)})`
}
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  return [
    Number.parseInt(h.slice(0, 2), 16),
    Number.parseInt(h.slice(2, 4), 16),
    Number.parseInt(h.slice(4, 6), 16),
  ]
}
