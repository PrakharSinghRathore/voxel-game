import { useEffect, useRef } from 'react'
import type { GameStats } from '../engine/GameEngine'

interface Props {
  stats: GameStats
}

const BIOME_COLORS: Record<string, string> = {
  Plains: '#4a7c3f',
  Forest: '#2d5a27',
  Desert: '#c2a858',
  Tundra: '#a8b8c8',
  Mountains: '#6b6b6b',
  Swamp: '#3a5430',
  Ocean: '#2a5a8a',
}

function getBiomeColor(biome: string): string {
  return BIOME_COLORS[biome] ?? '#3a5a3a'
}

export function Minimap({ stats }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const size = 64
    canvas.width = size
    canvas.height = size

    const draw = () => {
      const half = size / 2
      const range = 32

      // Background
      ctx.fillStyle = '#0a0f0a'
      ctx.fillRect(0, 0, size, size)

      // Biome terrain: concentric rings from player biome color with noise variation
      const baseColor = getBiomeColor(stats.biome)
      const img = ctx.createImageData(size, size)
      const data = img.data
      const [br, bg, bb] = hexToRgb(baseColor)
      const px = stats.position.x
      const pz = stats.position.z

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const wx = px + (x - half) * 2
          const wz = pz + (y - half) * 2
          const dist = Math.sqrt((x - half) ** 2 + (y - half) ** 2)
          // Pseudo-noise from world coords
          const n = pseudoNoise(wx * 0.05, wz * 0.05)
          const bright = 0.7 + n * 0.3
          const fade = Math.max(0, 1 - dist / half)
          const idx = (y * size + x) * 4
          data[idx] = Math.floor(br * bright * fade)
          data[idx + 1] = Math.floor(bg * bright * fade)
          data[idx + 2] = Math.floor(bb * bright * fade)
          data[idx + 3] = 200
        }
      }
      ctx.putImageData(img, 0, 0)

      // Grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 0.5
      for (let i = 16; i < size; i += 16) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, size); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(size, i); ctx.stroke()
      }

      // Player dot
      ctx.beginPath()
      ctx.arc(half, half, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
      ctx.strokeStyle = 'rgba(0,0,0,0.8)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Direction indicator
      ctx.save()
      ctx.translate(half, half)
      // Default facing: -Z (up on map)
      ctx.beginPath()
      ctx.moveTo(0, -5)
      ctx.lineTo(0, -2)
      ctx.strokeStyle = '#10b981'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()

      // North label
      ctx.fillStyle = '#f59e0b'
      ctx.font = 'bold 7px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('N', half, 8)

      // Border
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'
      ctx.lineWidth = 1.5
      ctx.strokeRect(0, 0, size, size)

      frameRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frameRef.current)
  }, [stats])

  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-black/60 backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        className="block"
        style={{ imageRendering: 'pixelated', width: '112px', height: '112px' }}
      />
    </div>
  )
}

function pseudoNoise(x: number, y: number): number {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
  return n - Math.floor(n)
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}
