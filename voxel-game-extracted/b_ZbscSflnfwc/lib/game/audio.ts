// ════════════════════════════════════════════════════════
// AUDIO SYSTEM — Procedural Web Audio API synthesis
// All sounds synthesized on-the-fly. No external assets.
// ════════════════════════════════════════════════════════

let ctx: AudioContext | null = null
let master: GainNode | null = null
let musicGain: GainNode | null = null
let musicTimeout: number | null = null
let muted = false

const loopHandles: Map<string, { src: AudioBufferSourceNode; gain: GainNode }> = new Map()

function ensureCtx(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!ctx) {
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctx = new AC()
      master = ctx.createGain()
      master.gain.value = 0.6
      master.connect(ctx.destination)
      musicGain = ctx.createGain()
      musicGain.gain.value = 0.15
      musicGain.connect(master)
    } catch { return null }
  }
  if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {})
  return ctx
}

export function setMuted(m: boolean) { muted = m; if (master) master.gain.value = m ? 0 : 0.6 }
export function isMuted() { return muted }
export function primeAudio() { ensureCtx() }

// ─── Core generators ─────────────────────────────────────

function envelope(
  type: OscillatorType, freqStart: number, freqEnd: number,
  duration: number, volume = 0.3, filterFreq?: number, delayMs = 0
) {
  const c = ensureCtx(); if (!c || !master) return
  const fire = () => {
    const now = c.currentTime
    const osc = c.createOscillator()
    osc.type = type
    osc.frequency.setValueAtTime(freqStart, now)
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqEnd), now + duration)
    const g = c.createGain()
    g.gain.setValueAtTime(0, now)
    g.gain.linearRampToValueAtTime(volume, now + 0.005)
    g.gain.exponentialRampToValueAtTime(0.001, now + duration)
    if (filterFreq) {
      const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = filterFreq
      osc.connect(f); f.connect(g)
    } else { osc.connect(g) }
    g.connect(master!); osc.start(now); osc.stop(now + duration + 0.05)
  }
  if (delayMs > 0) setTimeout(fire, delayMs); else fire()
}

function noiseBurst(
  duration: number, volume = 0.3, filterFreq = 2000,
  filterQ = 0.5, highpassFreq = 0, delayMs = 0
) {
  const c = ensureCtx(); if (!c || !master) return
  const fire = () => {
    const now = c.currentTime
    const bufSize = Math.floor(c.sampleRate * duration)
    const buf = c.createBuffer(1, bufSize, c.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1
    const src = c.createBufferSource(); src.buffer = buf
    const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = filterFreq; lp.Q.value = filterQ
    const g = c.createGain(); g.gain.setValueAtTime(volume, now); g.gain.exponentialRampToValueAtTime(0.001, now + duration)
    src.connect(lp)
    if (highpassFreq > 0) {
      const hp = c.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = highpassFreq
      lp.connect(hp); hp.connect(g)
    } else { lp.connect(g) }
    g.connect(master!); src.start(now); src.stop(now + duration + 0.02)
  }
  if (delayMs > 0) setTimeout(fire, delayMs); else fire()
}

// ─── Looping ambient infrastructure ───────────────────────

function createNoiseLoop(
  c: AudioContext, filterFreq: number, filterQ: number,
  highpassFreq: number, volume: number
): { src: AudioBufferSourceNode; gain: GainNode } {
  const dur = 2.0
  const bufSize = Math.floor(c.sampleRate * dur)
  const buf = c.createBuffer(1, bufSize, c.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1
  const src = c.createBufferSource(); src.buffer = buf; src.loop = true
  const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = filterFreq; lp.Q.value = filterQ
  const hp = c.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = highpassFreq
  const gain = c.createGain(); gain.gain.value = volume
  src.connect(lp); lp.connect(hp); hp.connect(gain); gain.connect(master!)
  src.start()
  return { src, gain }
}

function setLoopVolume(key: string, target: number, duration = 1.5) {
  const c = ensureCtx(); const handle = loopHandles.get(key)
  if (!c || !handle) return
  handle.gain.gain.cancelScheduledValues(c.currentTime)
  handle.gain.gain.setValueAtTime(handle.gain.gain.value, c.currentTime)
  handle.gain.gain.linearRampToValueAtTime(target, c.currentTime + duration)
  if (target <= 0.001) {
    setTimeout(() => { try { handle.src.stop() } catch {} loopHandles.delete(key) }, (duration + 0.2) * 1000)
  }
}

function startLoop(key: string, filterFreq: number, filterQ: number, highpass: number, vol: number) {
  const c = ensureCtx(); if (!c || !master || loopHandles.has(key)) return
  const handle = createNoiseLoop(c, filterFreq, filterQ, highpass, 0)
  loopHandles.set(key, handle); setLoopVolume(key, vol, 1.5)
}
function stopLoop(key: string) { if (loopHandles.has(key)) setLoopVolume(key, 0, 1.5) }

// ─── Footstep synthesis per surface ───────────────────────

export type FootSurface =
  "grass" | "dirt" | "stone" | "sand" | "snow" |
  "wood" | "water" | "gravel" | "metal" | "leaves"

export function playFootstep(surface: FootSurface, sprinting: boolean) {
  const vol = sprinting ? 0.22 : 0.14
  const pitch = 0.88 + Math.random() * 0.24

  switch (surface) {
    case "grass":
      noiseBurst(0.07, vol * 0.8, 700 * pitch, 0.8, 200)
      envelope("triangle", 120 * pitch, 50, 0.08, vol * 0.4)
      break
    case "dirt":
      noiseBurst(0.09, vol, 900 * pitch, 1.2, 100)
      envelope("sine", 90 * pitch, 40, 0.1, vol * 0.35)
      break
    case "stone":
      noiseBurst(0.05, vol * 1.1, 3000 * pitch, 0.4, 400)
      envelope("square", 180 * pitch, 60, 0.07, vol * 0.3)
      noiseBurst(0.03, vol * 0.4, 4000 * pitch, 0.3, 80, 25)
      break
    case "gravel":
      noiseBurst(0.08, vol, 2000 * pitch, 1.8, 200)
      noiseBurst(0.04, vol * 0.6, 3500 * pitch, 1.2, 400, 35)
      envelope("triangle", 140 * pitch, 50, 0.09, vol * 0.3)
      break
    case "sand":
      noiseBurst(0.12, vol * 0.7, 1800 * pitch, 1.5, 300)
      noiseBurst(0.08, vol * 0.4, 2400 * pitch, 1.2, 500, 30)
      break
    case "snow":
      noiseBurst(0.08, vol * 0.9, 5000 * pitch, 0.5, 1500)
      envelope("sawtooth", 200 * pitch, 80, 0.06, vol * 0.2, 3000)
      break
    case "wood":
      envelope("triangle", 280 * pitch, 100, 0.1, vol * 0.5)
      noiseBurst(0.06, vol * 0.5, 1200 * pitch, 1.0, 150)
      break
    case "water":
      noiseBurst(0.14, vol * 0.6, 2500 * pitch, 2.0, 600)
      envelope("sine", 400 * pitch, 180, 0.12, vol * 0.25)
      noiseBurst(0.06, vol * 0.25, 3500, 1.5, 800, 60)
      break
    case "metal":
      envelope("sine", 900 * pitch, 200, 0.18, vol * 0.4)
      envelope("sine", 1400 * pitch, 300, 0.14, vol * 0.2, undefined, 10)
      noiseBurst(0.04, vol * 0.3, 5000, 0.5, 2000)
      break
    case "leaves":
      noiseBurst(0.1, vol * 0.6, 4000 * pitch, 2.0, 1000)
      noiseBurst(0.06, vol * 0.3, 6000 * pitch, 1.5, 2000, 30)
      break
  }
}

export function blockSurface(blockId: number): FootSurface {
  switch (blockId) {
    case 1:  return "grass"    // GRASS
    case 2:  return "dirt"     // DIRT
    case 3:  return "stone"    // STONE
    case 4:  return "sand"     // SAND
    case 5:  return "snow"     // SNOW — also ICE (19)
    case 6:  return "wood"     // WOOD
    case 7:  return "leaves"   // LEAVES
    case 8: case 9: case 10: case 11: case 12: case 13: return "stone"
    case 14: return "wood"     // PLANKS
    case 15: return "gravel"   // COBBLESTONE
    case 16: return "wood"     // CRAFTING_TABLE
    case 17: return "stone"    // BRICK
    case 18: return "gravel"   // MOSS_STONE
    case 19: return "snow"     // ICE
    case 20: return "stone"    // OBSIDIAN
    case 21: return "stone"    // CRYSTAL
    case 22: return "stone"    // MAGMA
    case 23: return "water"    // WATER
    case 24: return "stone"    // CAMPFIRE
    case 25: return "wood"     // TORCH
    default: return "stone"
  }
}

// ─── Ambient loop exports ─────────────────────────────────

export function startRainAmbient() {
  startLoop("rain",     3000, 1.8, 400, 0.28)
  startLoop("rain_low",  600, 2.5,  60, 0.18)
}
export function stopRainAmbient() { stopLoop("rain"); stopLoop("rain_low") }

export function startWindAmbient(intensity = 0.12) { startLoop("wind", 800, 4.0, 40, intensity) }
export function stopWindAmbient() { stopLoop("wind") }

export function startCaveAmbient() { startLoop("cave", 200, 6.0, 20, 0.08) }
export function stopCaveAmbient() { stopLoop("cave") }

export function playCaveDrip() {
  const pitch = 0.7 + Math.random() * 0.6
  envelope("sine", 1200 * pitch, 600, 0.25, 0.12, 2000)
  noiseBurst(0.04, 0.06, 4000, 0.5, 1500, 30)
}

export function startCampfireAmbient() { startLoop("campfire", 1200, 3.5, 200, 0.14) }
export function stopCampfireAmbient() { stopLoop("campfire") }

// ─── Main SFX namespace ──────────────────────────────────

export const SFX = {
  break() { noiseBurst(0.18, 0.35, 1500); envelope("square", 160, 60, 0.1, 0.1) },

  breakBlock(blockId: number) {
    const surf = blockSurface(blockId)
    switch (surf) {
      case "grass": case "dirt":
        noiseBurst(0.2, 0.3, 900, 1.5, 150)
        envelope("triangle", 100, 40, 0.15, 0.12); break
      case "stone": case "gravel":
        noiseBurst(0.14, 0.4, 2500, 0.8, 300)
        envelope("square", 200, 70, 0.12, 0.18); break
      case "sand":
        noiseBurst(0.22, 0.28, 1400, 2.0, 300); break
      case "snow":
        noiseBurst(0.1, 0.25, 5000, 0.5, 1200)
        envelope("sawtooth", 180, 60, 0.1, 0.1, 2500); break
      case "wood": case "leaves":
        envelope("triangle", 320, 120, 0.18, 0.22)
        noiseBurst(0.1, 0.2, 1800, 1.2, 200); break
      default:
        noiseBurst(0.18, 0.35, 1500); envelope("square", 160, 60, 0.1, 0.1)
    }
  },

  place() { envelope("square", 440, 220, 0.08, 0.18); noiseBurst(0.04, 0.1, 3000) },

  // blockId = block under player; sprinting = sprint key held
  step(surface: FootSurface = "stone", sprinting = false) {
    playFootstep(surface, sprinting)
  },

  hurt()      { envelope("sawtooth", 400, 80, 0.18, 0.35, 900) },
  attack()    { envelope("triangle", 800, 200, 0.12, 0.18); noiseBurst(0.05, 0.12, 4000) },
  hit()       { envelope("square", 300, 70, 0.14, 0.3); noiseBurst(0.08, 0.25, 1600) },
  jump()      { envelope("sine", 300, 600, 0.12, 0.12) },

  land(height: number) {
    const vol = Math.min(0.5, 0.1 + height * 0.025)
    noiseBurst(0.12, vol, 1200, 2.0, 80)
    envelope("sine", 120, 40, 0.15, vol * 0.5)
  },

  splash() {
    noiseBurst(0.2, 0.3, 2500, 2.5, 500)
    envelope("sine", 500, 200, 0.18, 0.15)
    noiseBurst(0.08, 0.15, 4000, 1.5, 800, 60)
  },

  pickup() { envelope("square", 660, 990, 0.08, 0.15); envelope("square", 990, 1320, 0.08, 0.12, undefined, 80) },
  death()  { envelope("sawtooth", 300, 40, 1.0, 0.4, 700) },

  enemyGrowl() { envelope("sawtooth", 80, 50, 0.4, 0.25, 500); envelope("square", 120, 60, 0.35, 0.15, 400) },
  enemyDeath() { envelope("sawtooth", 200, 30, 0.6, 0.3, 600); noiseBurst(0.2, 0.2, 800, 3.0, 80) },

  night() { envelope("sine", 220, 110, 1.5, 0.08) },
  dawn()  { envelope("triangle", 440, 880, 0.4, 0.1); envelope("triangle", 660, 1320, 0.4, 0.1, undefined, 200) },

  bloodMoonRise() {
    envelope("sawtooth", 60, 40, 3.0, 0.22, 300)
    envelope("sine", 80, 50, 3.5, 0.18, 500, 400)
    envelope("sawtooth", 400, 200, 1.5, 0.15, 600, 800)
    envelope("sine", 320, 180, 2.0, 0.1, 400, 1000)
  },

  thunder() {
    noiseBurst(1.8, 0.45, 120, 5.0, 20)
    noiseBurst(0.08, 0.6, 4000, 0.5, 500)
    noiseBurst(2.5, 0.2, 80, 8.0, 15, 300)
  },

  achievement() {
    envelope("sine", 880, 1320, 0.15, 0.2)
    envelope("sine", 1320, 1760, 0.15, 0.18, undefined, 150)
    envelope("sine", 1760, 2200, 0.12, 0.14, undefined, 300)
  },

  eat() { for (let i = 0; i < 3; i++) noiseBurst(0.04, 0.12, 2000, 1.5, 400, i * 80) },

  drink() {
    envelope("sine", 600, 250, 0.15, 0.14, 1000)
    noiseBurst(0.08, 0.1, 1500, 2.0, 300, 80)
    envelope("sine", 450, 180, 0.12, 0.1, 800, 160)
  },

  campfirePop() {
    const pitch = 0.8 + Math.random() * 0.5
    noiseBurst(0.06, 0.16, 2500 * pitch, 1.0, 400)
    envelope("square", 300 * pitch, 80, 0.08, 0.07)
  },

  craftComplete() { envelope("triangle", 440, 660, 0.12, 0.15); envelope("triangle", 660, 880, 0.1, 0.12, undefined, 100) },
  portalEnter()   { envelope("sawtooth", 200, 1200, 0.8, 0.25, 800); noiseBurst(0.6, 0.15, 2000, 3.0, 200, 100) },
}

// ─── Ambient music ────────────────────────────────────────

const AMBIENT_NOTES = [220, 277, 330, 370, 440, 370, 330, 277]
const NIGHT_NOTES   = [110, 138, 165, 185, 220, 185, 165, 138]
let noteIndex = 0
let isNightMusic = false

function playAmbientNote() {
  const c = ensureCtx(); if (!c || !musicGain) return
  const scale = isNightMusic ? NIGHT_NOTES : AMBIENT_NOTES
  const freq = scale[noteIndex % scale.length]; noteIndex++
  const now = c.currentTime
  const osc = c.createOscillator()
  osc.type = isNightMusic ? "sawtooth" : "sine"; osc.frequency.value = freq
  const g = c.createGain()
  g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.5, now + 0.3)
  g.gain.exponentialRampToValueAtTime(0.001, now + (isNightMusic ? 3.5 : 2.5))
  const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = isNightMusic ? 800 : 1200
  osc.connect(f); f.connect(g); g.connect(musicGain!)
  osc.start(now); osc.stop(now + 4)
}

export function setNightMusic(night: boolean) { isNightMusic = night }

export function startAmbient() {
  if (musicTimeout !== null) return
  const loop = () => { playAmbientNote(); musicTimeout = window.setTimeout(loop, 1800 + Math.random() * 1200) }
  loop()
}

export function stopAmbient() {
  if (musicTimeout !== null) { clearTimeout(musicTimeout); musicTimeout = null }
}
