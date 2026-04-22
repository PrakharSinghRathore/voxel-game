"use client"

import { useEffect, useRef } from "react"
import type { GameStats } from "@/lib/game/engine"

interface Props {
  stats: GameStats
  yawRef: { current: number }
  worldSampler?: (x: number, z: number) => { r: number; g: number; b: number } | null
}

/**
 * A top-down radar-style minimap. Samples a world color function around the
 * player to show a procedurally-colored heightmap preview.
 */
export function Minimap({ stats, yawRef, worldSampler }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const size = 140
    canvas.width = size
    canvas.height = size

    const draw = () => {
      // Clear
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, size, size)

      const range = 48
      const step = 2
      const half = size / 2
      if (worldSampler) {
        const img = ctx.getImageData(0, 0, size, size)
        const data = img.data
        for (let py = 0; py < size; py += step) {
          for (let px = 0; px < size; px += step) {
            const wx = Math.floor(stats.position.x + ((px - half) / size) * range * 2)
            const wz = Math.floor(stats.position.z + ((py - half) / size) * range * 2)
            const c = worldSampler(wx, wz)
            const r = c ? c.r : 20
            const g = c ? c.g : 20
            const b = c ? c.b : 20
            for (let dy = 0; dy < step; dy++) {
              for (let dx = 0; dx < step; dx++) {
                const idx = ((py + dy) * size + (px + dx)) * 4
                data[idx] = r
                data[idx + 1] = g
                data[idx + 2] = b
                data[idx + 3] = 220
              }
            }
          }
        }
        ctx.putImageData(img, 0, 0)
      }

      // Grid overlay
      ctx.strokeStyle = "rgba(255,255,255,0.06)"
      ctx.lineWidth = 1
      for (let i = 20; i < size; i += 20) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, size)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(size, i)
        ctx.stroke()
      }

      // Player arrow
      ctx.save()
      ctx.translate(half, half)
      ctx.rotate(-yawRef.current)
      ctx.fillStyle = "#10b981"
      ctx.beginPath()
      ctx.moveTo(0, -7)
      ctx.lineTo(5, 5)
      ctx.lineTo(0, 2)
      ctx.lineTo(-5, 5)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = "rgba(0,0,0,0.8)"
      ctx.stroke()
      ctx.restore()

      // North indicator
      ctx.fillStyle = "#f59e0b"
      ctx.font = "bold 10px monospace"
      ctx.fillText("N", half - 3, 11)

      // Border
      ctx.strokeStyle = "rgba(255,255,255,0.2)"
      ctx.lineWidth = 2
      ctx.strokeRect(0, 0, size, size)

      frameRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [stats, yawRef, worldSampler])

  return (
    <div className="pointer-events-none overflow-hidden rounded-md border border-white/10 bg-black/60 backdrop-blur-sm">
      <canvas ref={canvasRef} className="block" style={{ imageRendering: "pixelated" }} />
    </div>
  )
}
