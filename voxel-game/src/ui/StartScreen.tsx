import { useEffect, useRef } from 'react'

interface Props {
  onStart: () => void
}

export function StartScreen({ onStart }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Array<{ x: number; y: number; s: number; sp: number; o: number }> = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: 1.5 + Math.random() * 3,
        sp: 8 + Math.random() * 24,
        o: 0.15 + Math.random() * 0.35,
      })
    }

    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.1, (t - last) / 1000)
      last = t
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, '#0a0f1a')
      grad.addColorStop(0.5, '#111827')
      grad.addColorStop(1, '#030712')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.y += p.sp * dt * dpr
        if (p.y - p.s > canvas.height) {
          p.y = -p.s * 2
          p.x = Math.random() * canvas.width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.s * dpr, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16,185,129,${p.o})`
        ctx.fill()
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-white">
        <div className="mb-3 flex items-center gap-2">
          <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
          <span className="font-mono text-xs font-semibold tracking-[0.3em] text-white/50">
            A VOXEL SURVIVAL GAME
          </span>
          <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        <h1 className="mb-2 text-center font-mono text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl">
          VOXEL<span className="text-emerald-400"> SURVIVAL</span>
        </h1>
        <p className="mb-10 text-center font-mono text-sm tracking-widest text-white/60 sm:text-base">
          Explore. Build. Survive.
        </p>

        <button
          onClick={onStart}
          className="group mb-12 inline-flex items-center gap-3 rounded-lg bg-emerald-500 px-8 py-4 font-mono text-lg font-bold tracking-wider text-neutral-900 shadow-[0_4px_0_#047857,0_8px_24px_rgba(16,185,129,0.3)] transition-all hover:translate-y-0.5 hover:shadow-[0_2px_0_#047857,0_6px_16px_rgba(16,185,129,0.4)] active:translate-y-1 active:shadow-[0_0px_0_#047857]"
        >
          <svg className="h-5 w-5 transition-transform group-hover:rotate-[-20deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M14.531 12.469L6.619 20.38a1 1 0 11-1.414-1.414l7.912-7.912" /><path d="M15.686 4.314A12.5 12.5 0 0121.5 2.5s-1.814 5.814-3.814 7.814" />
          </svg>
          CLICK TO PLAY
        </button>

        <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          <Feature title="WASD" desc="Move" />
          <Feature title="SPACE" desc="Jump" />
          <Feature title="L-Click" desc="Break" />
          <Feature title="R-Click" desc="Place" />
          <Feature title="1-9" desc="Hotbar" />
          <Feature title="E" desc="Inventory" />
          <Feature title="SHIFT" desc="Sprint" />
          <Feature title="ESC" desc="Pause" />
        </div>
      </div>
    </div>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-md border border-white/10 bg-black/40 px-3 py-2.5 text-center backdrop-blur-sm">
      <kbd className="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300">
        {title}
      </kbd>
      <span className="font-mono text-[10px] text-white/50">{desc}</span>
    </div>
  )
}
