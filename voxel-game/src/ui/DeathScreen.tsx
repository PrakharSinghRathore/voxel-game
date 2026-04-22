import type { GameStats } from '../engine/GameEngine'

interface Props {
  stats: GameStats
}

export function DeathScreen({ stats }: Props) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-rose-950/80 backdrop-blur-md">
      <div className="flex max-w-sm flex-col items-center gap-6 rounded-xl border border-rose-500/20 bg-neutral-900/90 p-10 text-center shadow-2xl">
        {/* Skull icon */}
        <svg className="h-16 w-16 text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.07 1.39 5.81 3.57 7.63L7 22h2v-2h2v2h2v-2h2v2h1.43l1.43-2.37A9.97 9.97 0 0022 12c0-5.52-4.48-10-10-10zm-4 12a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zm-4 3c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" />
        </svg>

        <h2 className="font-mono text-4xl font-black tracking-widest text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]">
          YOU DIED
        </h2>

        {/* Stats summary */}
        <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-black/40 px-6 py-4">
          <div className="flex items-center justify-between gap-6 font-mono text-sm">
            <span className="text-white/50">Survived</span>
            <span className="font-semibold text-amber-300">
              {stats.dayCount} {stats.dayCount === 1 ? 'day' : 'days'}
            </span>
          </div>
          <div className="flex items-center justify-between gap-6 font-mono text-sm">
            <span className="text-white/50">Biome</span>
            <span className="font-semibold text-emerald-300">{stats.biome}</span>
          </div>
          <div className="flex items-center justify-between gap-6 font-mono text-sm">
            <span className="text-white/50">Position</span>
            <span className="font-semibold text-white/70">
              {stats.position.x.toFixed(0)}, {stats.position.z.toFixed(0)}
            </span>
          </div>
        </div>

        <p className="font-mono text-xs text-white/40">
          Press{' '}
          <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs font-bold text-white/70">
            R
          </kbd>{' '}
          to respawn
        </p>
      </div>
    </div>
  )
}
