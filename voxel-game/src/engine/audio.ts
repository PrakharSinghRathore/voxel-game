// ════════════════════════════════════════════════════════
// AUDIO SYSTEM — Minecraft-inspired procedural Web Audio synthesis
// All sounds synthesized on-the-fly. No external assets.
// Sound categories mapped from Minecraft sound events.
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
      musicGain.gain.value = 0.12
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

// Pitched noise burst — noise shaped by a resonant filter for richer texture
function pitchedNoise(
  duration: number, volume: number, filterFreq: number, filterQ: number,
  pitchFreq: number, pitchVol: number, highpass = 0, delayMs = 0
) {
  noiseBurst(duration, volume, filterFreq, filterQ, highpass, delayMs)
  envelope("sine", pitchFreq, pitchFreq * 0.5, duration, pitchVol, filterFreq, delayMs)
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

// ─── Footstep synthesis per surface (block.grass.step, block.stone.step, etc.) ───────────────────────

export type FootSurface =
  "grass" | "dirt" | "stone" | "sand" | "snow" |
  "wood" | "water" | "gravel" | "metal" | "leaves" | "cloth"

export function playFootstep(surface: FootSurface, sprinting: boolean) {
  const vol = sprinting ? 0.22 : 0.14
  const pitch = 0.88 + Math.random() * 0.24

  switch (surface) {
    // block.grass.step / block.grass.break style
    case "grass":
      noiseBurst(0.07, vol * 0.8, 700 * pitch, 0.8, 200)
      noiseBurst(0.04, vol * 0.3, 1800 * pitch, 1.5, 600, 20)
      envelope("triangle", 120 * pitch, 50, 0.08, vol * 0.3)
      break
    // block.gravel.step style
    case "dirt":
      noiseBurst(0.09, vol, 900 * pitch, 1.2, 100)
      noiseBurst(0.05, vol * 0.4, 2200 * pitch, 1.0, 300, 20)
      envelope("sine", 90 * pitch, 40, 0.1, vol * 0.25)
      break
    // block.stone.step style
    case "stone":
      noiseBurst(0.05, vol * 1.1, 3000 * pitch, 0.4, 400)
      noiseBurst(0.03, vol * 0.4, 4000 * pitch, 0.3, 80, 25)
      envelope("square", 180 * pitch, 60, 0.07, vol * 0.25)
      // Resonant click for stone hardness
      envelope("sine", 800 * pitch, 200, 0.03, vol * 0.15, 5000, 5)
      break
    // block.sand.step style
    case "sand":
      noiseBurst(0.12, vol * 0.7, 1800 * pitch, 1.5, 300)
      noiseBurst(0.08, vol * 0.4, 2400 * pitch, 1.2, 500, 30)
      envelope("triangle", 60 * pitch, 30, 0.08, vol * 0.1)
      break
    // block.snow.step style
    case "snow":
      noiseBurst(0.08, vol * 0.9, 5000 * pitch, 0.5, 1500)
      noiseBurst(0.04, vol * 0.5, 8000 * pitch, 0.3, 3000, 15)
      envelope("sawtooth", 200 * pitch, 80, 0.06, vol * 0.15, 3000)
      break
    // block.wood.step style
    case "wood":
      envelope("triangle", 280 * pitch, 100, 0.1, vol * 0.45)
      noiseBurst(0.06, vol * 0.4, 1200 * pitch, 1.0, 150)
      // Hollow thud
      envelope("sine", 160 * pitch, 60, 0.08, vol * 0.2, 600, 10)
      break
    // entity.generic.swim / entity.generic.splash style
    case "water":
      noiseBurst(0.14, vol * 0.6, 2500 * pitch, 2.0, 600)
      noiseBurst(0.06, vol * 0.25, 3500, 1.5, 800, 60)
      envelope("sine", 400 * pitch, 180, 0.12, vol * 0.2)
      // Bubbly texture
      noiseBurst(0.04, vol * 0.15, 6000 * pitch, 2.0, 2000, 80)
      break
    // block.gravel.step style
    case "gravel":
      noiseBurst(0.08, vol, 2000 * pitch, 1.8, 200)
      noiseBurst(0.04, vol * 0.6, 3500 * pitch, 1.2, 400, 35)
      envelope("triangle", 140 * pitch, 50, 0.09, vol * 0.25)
      // Scraping texture
      noiseBurst(0.06, vol * 0.3, 5000 * pitch, 0.5, 1000, 15)
      break
    // block.metal.step style
    case "metal":
      envelope("sine", 900 * pitch, 200, 0.18, vol * 0.35)
      envelope("sine", 1400 * pitch, 300, 0.14, vol * 0.15, undefined, 10)
      noiseBurst(0.04, vol * 0.25, 5000, 0.5, 2000)
      // Metallic ring
      envelope("sine", 2200 * pitch, 800, 0.12, vol * 0.1, 6000, 5)
      break
    // block.cloth.step style (soft leaf walking)
    case "leaves":
      noiseBurst(0.1, vol * 0.5, 4000 * pitch, 2.0, 1000)
      noiseBurst(0.06, vol * 0.25, 6000 * pitch, 1.5, 2000, 30)
      // Rustle
      noiseBurst(0.03, vol * 0.2, 9000 * pitch, 0.3, 4000, 15)
      break
    // block.cloth.step style
    case "cloth":
      noiseBurst(0.08, vol * 0.5, 1200 * pitch, 1.5, 200)
      noiseBurst(0.05, vol * 0.3, 2000 * pitch, 1.0, 400, 20)
      break
  }
}

export function blockSurface(blockId: number): FootSurface {
  switch (blockId) {
    case 1:  return "grass"    // GRASS
    case 2:  return "dirt"     // DIRT
    case 3:  return "stone"    // STONE
    case 4:  return "sand"     // SAND
    case 5:  return "snow"     // SNOW
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
    case 26: return "stone"    // GLASS
    case 27: return "gravel"   // GRAVEL
    case 28: return "wood"     // BOOKSHELF
    case 29: return "wood"     // LADDER
    case 30: return "stone"    // LAVA
    case 31: return "stone"    // IRON_BLOCK
    case 32: return "stone"    // GOLD_BLOCK
    case 33: return "stone"    // DIAMOND_BLOCK
    case 34: return "gravel"   // TNT
    case 35: return "cloth"    // WOOL_WHITE
    default: return "stone"
  }
}

// ─── Ambient loop exports ─────────────────────────────────

// weather.rain style
export function startRainAmbient() {
  startLoop("rain",     3000, 1.8, 400, 0.28)
  startLoop("rain_low",  600, 2.5,  60, 0.18)
  // Rain on surfaces texture
  startLoop("rain_tick", 6000, 0.3, 2000, 0.06)
}
export function stopRainAmbient() { stopLoop("rain"); stopLoop("rain_low"); stopLoop("rain_tick") }

export function startWindAmbient(intensity = 0.12) {
  startLoop("wind", 800, 4.0, 40, intensity)
  startLoop("wind_high", 3000, 1.0, 800, intensity * 0.3)
}
export function stopWindAmbient() { stopLoop("wind"); stopLoop("wind_high") }

// ambient.cave style
export function startCaveAmbient() {
  startLoop("cave", 200, 6.0, 20, 0.08)
  startLoop("cave_drip_amb", 800, 2.0, 300, 0.03)
}
export function stopCaveAmbient() { stopLoop("cave"); stopLoop("cave_drip_amb") }

// liquid/water drip style
export function playCaveDrip() {
  const pitch = 0.7 + Math.random() * 0.6
  envelope("sine", 1200 * pitch, 600, 0.25, 0.1, 2000)
  noiseBurst(0.04, 0.05, 4000, 0.5, 1500, 30)
  // Reverb tail
  envelope("sine", 600 * pitch, 300, 0.4, 0.04, 1200, 50)
}

// block.furnace.fire_crackle / block.fire.ambient style
export function startCampfireAmbient() {
  startLoop("campfire", 1200, 3.5, 200, 0.14)
  startLoop("campfire_crackle", 4000, 0.5, 1500, 0.04)
}
export function stopCampfireAmbient() { stopLoop("campfire"); stopLoop("campfire_crackle") }

// block.lava.ambient style
export function startLavaAmbient() {
  startLoop("lava", 300, 4.0, 40, 0.1)
  startLoop("lava_bubble", 1500, 1.0, 500, 0.04)
}
export function stopLavaAmbient() { stopLoop("lava"); stopLoop("lava_bubble") }

// block.lava.pop style
export function playLavaPop() {
  const pitch = 0.6 + Math.random() * 0.8
  envelope("sine", 200 * pitch, 80, 0.2, 0.12, 600)
  noiseBurst(0.06, 0.08, 2000 * pitch, 1.5, 400, 30)
}

// ─── Main SFX namespace ──────────────────────────────────

export const SFX = {
  // block.generic.break — varies by surface
  breakBlock(blockId: number) {
    const surf = blockSurface(blockId)
    switch (surf) {
      // block.grass.break
      case "grass": case "dirt":
        noiseBurst(0.2, 0.3, 900, 1.5, 150)
        noiseBurst(0.1, 0.15, 2200, 1.0, 400, 30)
        envelope("triangle", 100, 40, 0.15, 0.1)
        break
      // block.stone.break
      case "stone": case "gravel":
        noiseBurst(0.14, 0.4, 2500, 0.8, 300)
        noiseBurst(0.08, 0.2, 5000, 0.5, 1000, 20)
        envelope("square", 200, 70, 0.12, 0.15)
        // Crumbling tail
        noiseBurst(0.15, 0.12, 4000, 1.5, 500, 40)
        break
      // block.sand.break
      case "sand":
        noiseBurst(0.22, 0.28, 1400, 2.0, 300)
        noiseBurst(0.12, 0.12, 2800, 1.5, 600, 25)
        break
      // block.snow.break
      case "snow":
        noiseBurst(0.1, 0.25, 5000, 0.5, 1200)
        noiseBurst(0.05, 0.15, 9000, 0.3, 4000, 15)
        envelope("sawtooth", 180, 60, 0.1, 0.08, 2500)
        break
      // block.wood.break
      case "wood": case "leaves":
        envelope("triangle", 320, 120, 0.18, 0.2)
        noiseBurst(0.1, 0.18, 1800, 1.2, 200)
        // Splinter crack
        envelope("square", 600, 200, 0.06, 0.1, 3000, 15)
        break
      // block.glass.break
      default:
        noiseBurst(0.18, 0.35, 1500)
        envelope("square", 160, 60, 0.1, 0.1)
    }
  },

  // block.generic.place
  place() {
    envelope("square", 440, 220, 0.08, 0.16)
    noiseBurst(0.04, 0.08, 3000)
    // Subtle thud
    envelope("sine", 120, 50, 0.06, 0.08, 500, 5)
  },

  // block.wood.place / block.stone.place variants
  placeBlock(blockId: number) {
    const surf = blockSurface(blockId)
    switch (surf) {
      case "wood":
        envelope("triangle", 280, 120, 0.1, 0.18)
        noiseBurst(0.05, 0.1, 1500, 1.0, 200)
        break
      case "stone":
        noiseBurst(0.06, 0.2, 3000, 0.5, 400)
        envelope("square", 200, 80, 0.08, 0.12)
        break
      case "sand":
        noiseBurst(0.12, 0.18, 1200, 2.0, 200)
        break
      default:
        envelope("square", 440, 220, 0.08, 0.16)
        noiseBurst(0.04, 0.08, 3000)
    }
  },

  // Footstep
  step(surface: FootSurface = "stone", sprinting = false) {
    playFootstep(surface, sprinting)
  },

  // entity.player.hurt
  hurt() {
    envelope("sawtooth", 400, 80, 0.18, 0.3, 900)
    noiseBurst(0.06, 0.1, 3000, 0.5, 800, 20)
  },

  // entity.player.attack.strong
  attack() {
    envelope("triangle", 800, 200, 0.12, 0.16)
    noiseBurst(0.05, 0.1, 4000)
    // Whoosh
    noiseBurst(0.08, 0.06, 2000, 2.0, 200, 10)
  },

  // entity.player.attack.weak (hit entity)
  hit() {
    envelope("square", 300, 70, 0.14, 0.25)
    noiseBurst(0.08, 0.2, 1600)
    // Impact thud
    envelope("sine", 100, 40, 0.1, 0.15, 400, 10)
  },

  // Jump
  jump() {
    envelope("sine", 300, 600, 0.12, 0.1)
    noiseBurst(0.04, 0.04, 2000, 1.0, 500, 20)
  },

  // entity.generic.big_fall / entity.generic.small_fall
  land(height: number) {
    const vol = Math.min(0.5, 0.1 + height * 0.025)
    noiseBurst(0.12, vol, 1200, 2.0, 80)
    envelope("sine", 120, 40, 0.15, vol * 0.4)
    // Dust puff
    noiseBurst(0.08, vol * 0.2, 3000, 1.0, 400, 30)
  },

  // entity.generic.splash
  splash() {
    noiseBurst(0.2, 0.3, 2500, 2.5, 500)
    envelope("sine", 500, 200, 0.18, 0.12)
    noiseBurst(0.08, 0.12, 4000, 1.5, 800, 60)
    // Secondary splash
    noiseBurst(0.15, 0.1, 1800, 2.0, 300, 120)
    // Bubbles
    noiseBurst(0.04, 0.05, 6000, 2.0, 3000, 200)
  },

  // entity.generic.swim
  swim() {
    noiseBurst(0.1, 0.12, 2500, 2.0, 600)
    envelope("sine", 350, 150, 0.1, 0.08, 1500)
    noiseBurst(0.03, 0.04, 5000, 1.5, 2000, 40)
  },

  // entity.item.pickup
  pickup() {
    envelope("square", 660, 990, 0.08, 0.14)
    envelope("square", 990, 1320, 0.08, 0.1, undefined, 80)
  },

  // entity.item.break
  itemBreak() {
    noiseBurst(0.1, 0.2, 3000, 0.5, 800)
    envelope("square", 400, 100, 0.12, 0.12)
  },

  // entity.player.death
  death() {
    envelope("sawtooth", 300, 40, 1.0, 0.35, 700)
    noiseBurst(0.3, 0.1, 600, 3.0, 50, 100)
    // Low groan
    envelope("sawtooth", 80, 30, 1.5, 0.15, 300, 200)
  },

  // entity.zombie.ambient
  zombieAmbient() {
    const pitch = 0.7 + Math.random() * 0.3
    envelope("sawtooth", 80 * pitch, 50 * pitch, 0.5, 0.2, 500)
    envelope("square", 120 * pitch, 70 * pitch, 0.4, 0.1, 400, 50)
    noiseBurst(0.15, 0.06, 800, 2.0, 100)
  },

  // entity.skeleton.ambient
  skeletonAmbient() {
    const pitch = 0.9 + Math.random() * 0.4
    envelope("square", 200 * pitch, 100 * pitch, 0.3, 0.12, 1200)
    noiseBurst(0.06, 0.08, 3000 * pitch, 0.5, 1000)
  },

  // entity.slime.squish
  slimeSquish() {
    const pitch = 0.6 + Math.random() * 0.5
    envelope("sine", 200 * pitch, 80 * pitch, 0.2, 0.2, 600)
    noiseBurst(0.08, 0.1, 1500 * pitch, 2.0, 300)
  },

  // entity.zombie.death / entity.skeleton.death / entity.slime.death
  enemyGrowl() {
    const r = Math.random()
    if (r < 0.33) SFX.zombieAmbient()
    else if (r < 0.66) SFX.skeletonAmbient()
    else SFX.slimeSquish()
  },

  enemyDeath() {
    envelope("sawtooth", 200, 30, 0.6, 0.25, 600)
    noiseBurst(0.2, 0.15, 800, 3.0, 80)
    // Decay poof
    noiseBurst(0.15, 0.1, 2000, 1.0, 500, 80)
  },

  // entity.cow.ambient / entity.rabbit.ambient etc
  animalAmbient(type: 'deer' | 'rabbit' | 'cow') {
    const pitch = 0.8 + Math.random() * 0.4
    if (type === 'cow') {
      envelope("sawtooth", 100 * pitch, 60 * pitch, 0.4, 0.1, 400)
      envelope("sine", 120 * pitch, 70 * pitch, 0.5, 0.08, 300, 50)
    } else if (type === 'rabbit') {
      envelope("sine", 600 * pitch, 400 * pitch, 0.1, 0.06, 2000)
    } else {
      envelope("triangle", 200 * pitch, 120 * pitch, 0.3, 0.06, 800)
    }
  },

  // Night/dawn atmosphere
  night() { envelope("sine", 220, 110, 1.5, 0.06) },
  dawn()  { envelope("triangle", 440, 880, 0.4, 0.08); envelope("triangle", 660, 1320, 0.4, 0.08, undefined, 200) },

  // Blood moon — ominous rising tone
  bloodMoonRise() {
    envelope("sawtooth", 60, 40, 3.0, 0.2, 300)
    envelope("sine", 80, 50, 3.5, 0.15, 500, 400)
    envelope("sawtooth", 400, 200, 1.5, 0.12, 600, 800)
    envelope("sine", 320, 180, 2.0, 0.08, 400, 1000)
    // Distant rumble
    noiseBurst(4.0, 0.06, 100, 5.0, 20, 500)
  },

  // entity.lightning.thunder / weather.rain
  thunder() {
    // Initial crack
    noiseBurst(0.08, 0.55, 5000, 0.5, 500)
    noiseBurst(0.04, 0.5, 8000, 0.3, 2000, 5)
    // Main rumble
    noiseBurst(1.8, 0.4, 120, 5.0, 20)
    // Distant rolling
    noiseBurst(2.5, 0.15, 80, 8.0, 15, 300)
    // Secondary crack
    noiseBurst(0.1, 0.2, 3000, 0.5, 800, 500)
  },

  // entity.experience_orb.pickup / achievement style
  achievement() {
    envelope("sine", 880, 1320, 0.15, 0.18)
    envelope("sine", 1320, 1760, 0.15, 0.15, undefined, 150)
    envelope("sine", 1760, 2200, 0.12, 0.1, undefined, 300)
    // Sparkle
    noiseBurst(0.05, 0.04, 8000, 0.3, 4000, 350)
  },

  // entity.generic.eat
  eat() {
    for (let i = 0; i < 3; i++) {
      noiseBurst(0.04, 0.1, 2000, 1.5, 400, i * 80)
      envelope("sine", 300 + i * 100, 150, 0.06, 0.06, 1500, i * 80 + 20)
    }
  },

  // entity.generic.drink
  drink() {
    envelope("sine", 600, 250, 0.15, 0.12, 1000)
    noiseBurst(0.08, 0.08, 1500, 2.0, 300, 80)
    envelope("sine", 450, 180, 0.12, 0.08, 800, 160)
    // Gulping
    envelope("triangle", 200, 100, 0.1, 0.06, 500, 240)
  },

  // entity.player.burp
  burp() {
    envelope("sawtooth", 150, 60, 0.3, 0.15, 500)
    envelope("sine", 120, 50, 0.4, 0.1, 300, 50)
  },

  // block.furnace.fire_crackle / campfire pop
  campfirePop() {
    const pitch = 0.8 + Math.random() * 0.5
    noiseBurst(0.06, 0.14, 2500 * pitch, 1.0, 400)
    envelope("square", 300 * pitch, 80, 0.08, 0.06)
    // Tiny ember
    noiseBurst(0.03, 0.05, 5000 * pitch, 0.3, 2000, 20)
  },

  // block.fire.ambient (fire crackle loop sound)
  fireAmbient() {
    const pitch = 0.8 + Math.random() * 0.4
    noiseBurst(0.08, 0.06, 2000 * pitch, 1.5, 600)
    envelope("triangle", 400 * pitch, 150, 0.05, 0.03, 3000)
  },

  // block.fire.extinguish / block.lava.extinguish
  extinguish() {
    noiseBurst(0.2, 0.2, 4000, 1.5, 1500)
    noiseBurst(0.1, 0.12, 6000, 1.0, 3000, 50)
    // Steam hiss
    noiseBurst(0.3, 0.08, 2500, 2.0, 800, 80)
  },

  // item.flintandsteel.use
  ignite() {
    noiseBurst(0.05, 0.2, 5000, 0.3, 2000)
    envelope("square", 2000, 800, 0.04, 0.1)
    noiseBurst(0.1, 0.08, 3000, 1.0, 1000, 30)
  },

  // block.glass.break
  glassBreak() {
    noiseBurst(0.15, 0.3, 6000, 0.3, 2000)
    noiseBurst(0.08, 0.2, 8000, 0.2, 4000, 20)
    noiseBurst(0.1, 0.15, 5000, 0.5, 3000, 40)
    // Tinkling shards
    envelope("sine", 2000, 4000, 0.1, 0.06, 8000, 60)
    envelope("sine", 3000, 5000, 0.06, 0.04, 10000, 80)
  },

  // block.piston.extend / block.piston.contract
  piston() {
    envelope("square", 200, 400, 0.06, 0.12)
    noiseBurst(0.04, 0.08, 3000, 0.5, 1000)
  },

  // entity.endermen.teleport / item.chorus_fruit.teleport
  teleport() {
    envelope("sawtooth", 200, 1200, 0.8, 0.2, 800)
    noiseBurst(0.6, 0.12, 2000, 3.0, 200, 100)
    envelope("sine", 1200, 200, 0.6, 0.08, 1500, 200)
  },

  // entity.arrow.shoot
  bowShoot() {
    noiseBurst(0.08, 0.12, 3000, 0.5, 1500)
    envelope("triangle", 800, 400, 0.1, 0.1, 2000)
    // String twang
    envelope("sine", 600, 300, 0.15, 0.06, 4000, 20)
  },

  // entity.arrow.hit
  arrowHit() {
    noiseBurst(0.05, 0.15, 4000, 0.5, 1500)
    envelope("triangle", 500, 200, 0.08, 0.1)
  },

  // entity.tnt.primed (fuse hiss)
  fuse() {
    noiseBurst(0.3, 0.1, 4000, 2.0, 2000)
    envelope("sawtooth", 1500, 2000, 0.2, 0.04, 6000, 100)
  },

  // entity.generic.explode
  explode() {
    noiseBurst(0.5, 0.5, 800, 3.0, 30)
    noiseBurst(0.3, 0.3, 200, 5.0, 15, 50)
    noiseBurst(0.15, 0.2, 3000, 1.0, 500, 100)
    // Debris
    noiseBurst(0.4, 0.15, 1500, 2.0, 100, 200)
  },

  // Crafting / anvil
  craftComplete() {
    envelope("triangle", 440, 660, 0.12, 0.14)
    envelope("triangle", 660, 880, 0.1, 0.1, undefined, 100)
    // Completion sparkle
    envelope("sine", 1200, 1600, 0.08, 0.06, 5000, 180)
  },

  // block.anvil.use
  anvilHit() {
    envelope("sine", 800, 200, 0.15, 0.25)
    noiseBurst(0.06, 0.15, 4000, 0.5, 2000)
    // Ring
    envelope("sine", 1600, 800, 0.2, 0.08, 6000, 30)
  },

  // block.wooden_door.open / block.wooden_door.close
  doorOpen() {
    noiseBurst(0.06, 0.1, 1500, 1.0, 300)
    envelope("triangle", 200, 350, 0.08, 0.08)
  },
  doorClose() {
    noiseBurst(0.08, 0.15, 1800, 1.0, 300)
    envelope("triangle", 350, 180, 0.1, 0.1)
    // Latch click
    envelope("square", 800, 400, 0.03, 0.08, 4000, 40)
  },

  // block.chest.open / block.chest.close
  chestOpen() {
    noiseBurst(0.05, 0.08, 2000, 1.0, 500)
    envelope("triangle", 300, 500, 0.06, 0.06)
  },
  chestClose() {
    noiseBurst(0.06, 0.1, 1500, 1.5, 400)
    envelope("triangle", 500, 250, 0.08, 0.08)
  },

  // block.lever.click / block.stone_button.click
  click() {
    envelope("square", 1200, 600, 0.03, 0.12)
  },

  // entity.generic.burn
  burn() {
    noiseBurst(0.15, 0.1, 3000, 1.5, 1500)
    envelope("sawtooth", 200, 100, 0.2, 0.06, 800)
  },

  // Portal ambient
  portalAmbient() {
    envelope("sawtooth", 200, 1200, 0.8, 0.2, 800)
    noiseBurst(0.6, 0.12, 2000, 3.0, 200, 100)
  },

  // Water ambient (block.water.ambient)
  waterAmbient() {
    const pitch = 0.8 + Math.random() * 0.4
    noiseBurst(0.15, 0.04, 2000 * pitch, 2.0, 600)
    envelope("sine", 400 * pitch, 200, 0.2, 0.03, 1500)
  },

  // entity.egg.throw / entity.snowball.throw
  throwItem() {
    noiseBurst(0.06, 0.08, 3000, 0.5, 1500)
    envelope("triangle", 600, 300, 0.08, 0.06, 2000)
  },

  // entity.wolf.howl (night atmosphere)
  wolfHowl() {
    envelope("sawtooth", 200, 400, 0.8, 0.06, 500)
    envelope("sine", 250, 450, 1.0, 0.04, 600, 200)
    envelope("sawtooth", 400, 200, 0.6, 0.04, 400, 800)
  },

  // entity.bat.takeoff
  batSqueak() {
    const pitch = 1.5 + Math.random() * 1.0
    envelope("sine", 2000 * pitch, 4000 * pitch, 0.06, 0.04, 8000)
    envelope("sine", 3000 * pitch, 5000 * pitch, 0.04, 0.03, 10000, 30)
  },

  // Backwards compat — simple break
  break() { noiseBurst(0.18, 0.35, 1500); envelope("square", 160, 60, 0.1, 0.1) },
}

// ─── Ambient music (Calm/Hal/Piano style) ──────────────────

// Pentatonic scales for calm Minecraft-like music
const DAY_SCALES = [
  [220, 261.6, 293.7, 329.6, 392, 440, 523.3],    // C pentatonic
  [196, 220, 261.6, 293.7, 329.6, 392, 440],       // G pentatonic
  [174.6, 196, 220, 261.6, 293.7, 349.2, 392],     // F pentatonic
]
const NIGHT_SCALES = [
  [130.8, 155.6, 174.6, 196, 220, 261.6, 293.7],   // Low minor pentatonic
  [146.8, 174.6, 196, 220, 261.6, 293.7, 329.6],   // D minor pentatonic
]
let scaleIndex = 0
let noteIndex = 0
let isNightMusic = false

function playAmbientNote() {
  const c = ensureCtx(); if (!c || !musicGain) return
  const scales = isNightMusic ? NIGHT_SCALES : DAY_SCALES
  const scale = scales[scaleIndex % scales.length]
  const freq = scale[noteIndex % scale.length]; noteIndex++

  // Occasionally shift to a new scale
  if (noteIndex % 16 === 0 && Math.random() < 0.3) {
    scaleIndex++
    noteIndex = 0
  }

  const now = c.currentTime
  const dur = isNightMusic ? 3.5 : 2.5

  // Main tone
  const osc = c.createOscillator()
  osc.type = isNightMusic ? "sine" : "sine"
  osc.frequency.value = freq
  const g = c.createGain()
  g.gain.setValueAtTime(0, now)
  g.gain.linearRampToValueAtTime(0.4, now + 0.4)
  g.gain.exponentialRampToValueAtTime(0.001, now + dur)
  const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = isNightMusic ? 800 : 1200
  osc.connect(f); f.connect(g); g.connect(musicGain!)
  osc.start(now); osc.stop(now + dur + 0.5)

  // Harmony (fifth or octave, quiet)
  if (Math.random() < 0.4) {
    const harmFreq = freq * (Math.random() < 0.5 ? 1.5 : 2)
    const osc2 = c.createOscillator()
    osc2.type = "sine"
    osc2.frequency.value = harmFreq
    const g2 = c.createGain()
    g2.gain.setValueAtTime(0, now + 0.2)
    g2.gain.linearRampToValueAtTime(0.15, now + 0.5)
    g2.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.8)
    const f2 = c.createBiquadFilter(); f2.type = "lowpass"; f2.frequency.value = isNightMusic ? 600 : 1000
    osc2.connect(f2); f2.connect(g2); g2.connect(musicGain!)
    osc2.start(now + 0.2); osc2.stop(now + dur + 0.5)
  }
}

export function setNightMusic(night: boolean) { isNightMusic = night }

export function startAmbient() {
  if (musicTimeout !== null) return
  const loop = () => {
    playAmbientNote()
    const delay = isNightMusic ? (2500 + Math.random() * 2000) : (1800 + Math.random() * 1200)
    musicTimeout = window.setTimeout(loop, delay)
  }
  loop()
}

export function stopAmbient() {
  if (musicTimeout !== null) { clearTimeout(musicTimeout); musicTimeout = null }
}
