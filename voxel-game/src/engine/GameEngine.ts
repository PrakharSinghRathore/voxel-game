import * as THREE from 'three'
import { BLOCK, BLOCK_DEFS, CHUNK_SIZE_X, CHUNK_SIZE_Z, CHUNK_SIZE_Y, RENDER_DISTANCE, SEA_LEVEL, type BlockId } from '../world/constants'
import { Chunk, World } from '../world/world'
import { meshChunk, type MeshData } from '../world/mesher'
import { createBlockAtlasTexture } from '../world/textures'
import { SFX, startAmbient, stopAmbient, blockSurface, startRainAmbient, stopRainAmbient, startWindAmbient, stopWindAmbient, startCaveAmbient, stopCaveAmbient, playCaveDrip, startCampfireAmbient, stopCampfireAmbient, setNightMusic } from '../engine/audio'
import { addItem, blockDropItem, countItem, HOTBAR_SIZE, ITEM, itemDef, makeEmptyInventory, miningProfile, removeItem, type ItemId, type Slot } from '../inventory/items'
import { consumeIngredients, findRecipe } from '../inventory/recipes'

// ═══════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════

export interface GameStats {
  health: number; maxHealth: number
  hunger: number; maxHunger: number
  stamina: number; maxStamina: number
  thirst: number; maxThirst: number
  time: number; dayCount: number
  biome: string; fps: number
  selectedSlot: number
  inventory: Slot[]
  craftGrid: Slot[]
  craftGridSize: 2 | 3
  craftResult: Slot
  inventoryOpen: boolean
  position: { x: number; y: number; z: number }
  paused: boolean; dead: boolean
  message: string | null
  enemiesNear: number
  weather: 'clear' | 'rain' | 'snow'
  isBloodMoon: boolean
  achievements: string[]
}

interface Enemy {
  mesh: THREE.Group
  type: 'zombie' | 'skeleton' | 'slime'
  position: THREE.Vector3
  velocity: THREE.Vector3
  health: number
  maxHealth: number
  attackCooldown: number
  onGround: boolean
}

interface Animal {
  mesh: THREE.Group
  type: 'deer' | 'rabbit' | 'cow'
  position: THREE.Vector3
  velocity: THREE.Vector3
  wanderDir: THREE.Vector3
  wanderTimer: number
  fleeTimer: number
  onGround: boolean
}

interface ItemDrop {
  mesh: THREE.Mesh
  position: THREE.Vector3
  velocity: THREE.Vector3
  itemId: ItemId
  count: number
  age: number
  onGround: boolean
}

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  age: number
  maxAge: number
  color: THREE.Color
}

// ═══════════════════════════════════════════════════════════
// SHADERS
// ═══════════════════════════════════════════════════════════

const CHUNK_VERT = `
  attribute vec3 color;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    vUv = uv;
    vColor = color;
    vNormal = normalMatrix * normal;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`

const CHUNK_FRAG = `
  uniform sampler2D atlas;
  uniform float uDaylight;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    vec4 tex = texture2D(atlas, vUv);
    if (tex.a < 0.1) discard;
    float ao = vColor.r;
    float light = vColor.g;
    vec3 n = normalize(vNormal);
    // Sun directional light with warm/cool tones
    vec3 sunDir = normalize(vec3(0.4, 1.0, 0.3));
    float diff = max(dot(n, sunDir), 0.0);
    // Hemisphere lighting - warm from below, cool from above
    float hemi = 0.5 + 0.5 * n.y;
    vec3 hemiColor = mix(vec3(0.35, 0.25, 0.18), vec3(0.55, 0.75, 1.0), hemi);
    // Combine lighting
    float sunLight = mix(0.12, 1.0, diff) * uDaylight;
    vec3 ambientHemi = hemiColor * 0.3 * (0.3 + uDaylight * 0.7);
    float finalLight = max(sunLight, max(light * 0.55, 0.3));
    finalLight = finalLight + ambientHemi.r * 0.15;
    vec3 col = tex.rgb * ao * finalLight;
    // Subtle specular for stone/metal blocks
    vec3 viewDir = vec3(0.0, 1.0, 0.0);
    vec3 halfDir = normalize(sunDir + viewDir);
    float spec = pow(max(dot(n, halfDir), 0.0), 64.0) * uDaylight * 0.1;
    col += vec3(1.0, 0.95, 0.9) * spec * step(0.3, 1.0 - ao + 0.3);
    float fog = smoothstep(uFogNear, uFogFar, vFogDepth);
    gl_FragColor = vec4(mix(col, uFogColor, fog), tex.a);
  }
`

const WATER_FRAG = `
  uniform sampler2D atlas;
  uniform float uDaylight;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  void main() {
    // Animated wave UV distortion
    vec2 waveUv = vUv;
    waveUv.x += sin(uTime * 0.8 + vUv.y * 12.0 + vUv.x * 6.0) * 0.008;
    waveUv.y += cos(uTime * 0.6 + vUv.x * 10.0) * 0.006;
    // Secondary large waves
    waveUv.x += sin(uTime * 0.3 + vUv.y * 3.0) * 0.012;
    waveUv.y += cos(uTime * 0.25 + vUv.x * 2.5) * 0.010;
    vec4 tex = texture2D(atlas, waveUv);
    float ao = vColor.r;
    vec3 n = normalize(vNormal);
    // Fresnel effect - more reflective at grazing angles
    float fresnel = pow(1.0 - max(dot(n, vec3(0.0, 1.0, 0.0)), 0.0), 3.0);
    fresnel = 0.04 + 0.96 * fresnel;
    // Diffuse lighting
    float diff = max(dot(n, normalize(vec3(0.4, 1.0, 0.3))), 0.0);
    float sunLight = mix(0.15, 1.0, diff) * uDaylight;
    // Depth-based coloring
    vec3 shallowColor = vec3(0.2, 0.55, 0.8);
    vec3 deepColor = vec3(0.05, 0.15, 0.35);
    float depthFactor = smoothstep(0.0, 0.8, vFogDepth * 0.02);
    vec3 waterColor = mix(shallowColor, deepColor, depthFactor);
    // Specular highlight (sun reflection on water)
    vec3 viewDir = normalize(vec3(0.0, 1.0, 0.0));
    vec3 halfDir = normalize(normalize(vec3(0.4, 1.0, 0.3)) + viewDir);
    float spec = pow(max(dot(n, halfDir), 0.0), 128.0) * uDaylight * 1.5;
    // Foam at edges (based on AO indicating nearby blocks)
    float foam = smoothstep(0.65, 0.75, ao) * (1.0 - depthFactor) * 0.6;
    vec3 foamColor = vec3(0.85, 0.92, 0.95);
    // Combine
    vec3 baseCol = tex.rgb * ao * sunLight;
    vec3 col = mix(baseCol, waterColor, 0.6);
    col = mix(col, foamColor, foam);
    col += vec3(1.0, 0.95, 0.85) * spec; // specular
    col += vec3(0.3, 0.5, 0.6) * fresnel * 0.15; // sky reflection
    // Fog
    float fog = smoothstep(uFogNear, uFogFar, vFogDepth);
    col = mix(col, uFogColor, fog);
    // Alpha: more opaque when deeper, with foam adding opacity
    float alpha = mix(0.45, 0.75, depthFactor);
    alpha = mix(alpha, 0.9, foam);
    gl_FragColor = vec4(col, alpha);
  }
`

const SKY_VERT = `
  varying vec3 vWorldPos;
  void main() {
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const SKY_FRAG = `
  uniform float uTime;
  varying vec3 vWorldPos;
  void main() {
    vec3 dir = normalize(vWorldPos);
    float sunAngle = uTime * 6.28318 - 1.5708;
    vec3 sunDir = vec3(cos(sunAngle) * 0.8, sin(sunAngle), cos(sunAngle) * 0.3);
    float sunH = sunDir.y;
    float day = smoothstep(-0.05, 0.25, sunH);
    // Richer day sky with gradient
    vec3 dayZenith = vec3(0.22, 0.45, 0.92);
    vec3 dayHorizon = vec3(0.6, 0.78, 1.0);
    vec3 dayCol = mix(dayHorizon, dayZenith, max(dir.y, 0.0));
    // Warm tint near horizon
    float horizonFade = 1.0 - abs(dir.y);
    dayCol += vec3(0.1, 0.05, 0.0) * horizonFade * horizonFade * day;
    vec3 nightCol = mix(vec3(0.01, 0.01, 0.05), vec3(0.005, 0.005, 0.02), max(dir.y, 0.0));
    vec3 col = mix(nightCol, dayCol, day);
    // Sunset/sunrise glow
    float hGlow = smoothstep(-0.05, 0.0, sunH) * smoothstep(0.3, 0.0, sunH);
    float sProx = max(dot(dir, sunDir), 0.0);
    col += vec3(0.9, 0.35, 0.1) * hGlow * pow(sProx, 4.0) * 0.7;
    col += vec3(1.0, 0.6, 0.2) * hGlow * pow(sProx, 2.0) * 0.3;
    col += vec3(1.0, 0.95, 0.8) * smoothstep(0.997, 0.9995, sProx) * day;
    // Moon
    vec3 moonDir = -sunDir;
    float mProx = max(dot(dir, moonDir), 0.0);
    col += vec3(0.7, 0.75, 0.85) * smoothstep(0.997, 0.9995, mProx) * (1.0 - day);
    // Moon glow
    col += vec3(0.1, 0.12, 0.18) * pow(mProx, 4.0) * (1.0 - day) * 0.5;
    // Stars with twinkling
    float star = (1.0 - day) * step(0.998, fract(sin(dot(floor(dir * 300.0), vec3(12.9898, 78.233, 45.164))) * 43758.5453)) * step(0.1, dir.y);
    col += vec3(1.0) * star * 0.8;
    // Milky way band
    float mwBand = (1.0 - day) * smoothstep(0.15, 0.0, abs(dir.y - 0.3)) * 0.08;
    col += vec3(0.6, 0.65, 0.8) * mwBand;
    gl_FragColor = vec4(col, 1.0);
  }
`

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════

const PLAYER_WIDTH = 0.6
const PLAYER_HEIGHT = 1.8
const PLAYER_EYE = 1.62
const GRAVITY = -28
const JUMP_VEL = 9.2
const WALK_SPEED = 4.3
const SPRINT_SPEED = 6.2
const SWIM_SPEED = 2.5
const REACH = 6
const DAY_LENGTH = 1200 // 20 min in seconds
const MAX_ENEMIES = 20
const MAX_ANIMALS = 10
const SPAWN_RANGE_MIN = 24
const SPAWN_RANGE_MAX = 48
const DESPAWN_RANGE = 64
const MAX_PARTICLES = 300
const WEATHER_CHANGE_MIN = 60
const WEATHER_CHANGE_MAX = 300

const BIOME_NAMES = ['Plains', 'Desert', 'Tundra', 'Forest', 'Mountain']

// ═══════════════════════════════════════════════════════════
// GAME ENGINE
// ═══════════════════════════════════════════════════════════

export class GameEngine {
  // Rendering
  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera
  private container: HTMLElement

  // Sky
  private skyMesh!: THREE.Mesh
  private sunLight!: THREE.DirectionalLight
  private ambientLight!: THREE.AmbientLight

  // World
  private world!: World
  private chunkGroup!: THREE.Group
  private chunkMeshes = new Map<string, { opaque: THREE.Mesh; transparent: THREE.Mesh; water: THREE.Mesh }>()
  private atlas!: THREE.Texture
  private opaqueMat!: THREE.ShaderMaterial
  private transparentMat!: THREE.ShaderMaterial
  private waterMat!: THREE.ShaderMaterial

  // Player
  private pos = new THREE.Vector3(8, 40, 8)
  private vel = new THREE.Vector3()
  private yaw = 0
  private pitch = 0
  private onGround = false
  private inWater = false
  private wasInWater = false
  private waterExitTimer = 0
  private sprinting = false

  // Input
  private keys = new Set<string>()
  private mouseLeft = false
  private mouseRight = false
  private pointerLocked = false
  private rightClickHandled = false

  // Targeting
  private targetBlock: { x: number; y: number; z: number } | null = null
  private targetNormal: { x: number; y: number; z: number } | null = null
  private highlightMesh!: THREE.LineSegments
  private breakOverlay!: THREE.Mesh
  private breakProgress = 0
  private breakTarget: { x: number; y: number; z: number } | null = null

  // Inventory
  private inventory: Slot[] = makeEmptyInventory()
  private selectedSlot = 0
  private inventoryOpen = false
  private craftGrid: Slot[] = new Array<Slot>(9).fill(null)
  private craftGridSize: 2 | 3 = 2
  private craftResult: Slot = null
  private cursorItem: Slot = null

  // Stats
  private health = 20
  private maxHealth = 20
  private hunger = 20
  private maxHunger = 20
  private stamina = 20
  private maxStamina = 20
  private thirst = 20
  private maxThirst = 20
  private dead = false
  private fallStartY = -1

  // Time
  private dayTime = 0.3 // start at morning
  private dayCount = 1

  // Weather
  private weather: 'clear' | 'rain' | 'snow' = 'clear'
  private weatherTimer = 120
  private rainParticles!: THREE.Points
  private snowParticles!: THREE.Points

  // Entities
  private enemies: Enemy[] = []
  private animals: Animal[] = []
  private enemyGroup!: THREE.Group
  private animalGroup!: THREE.Group

  // Item drops
  private itemDrops: ItemDrop[] = []
  private dropGroup!: THREE.Group
  private dropGeo!: THREE.BoxGeometry

  // Particles
  private particles: Particle[] = []
  private particleMesh!: THREE.Points
  private particleGeo!: THREE.BufferGeometry

  // Blood moon
  private isBloodMoon = false
  private bloodMoonChecked = false

  // Achievements
  private achievements: string[] = []

  // Lights
  private pointLights: THREE.PointLight[] = []
  private lightGroup!: THREE.Group

  // Audio state
  private lastFootstep = 0
  private lastCaveDrip = 0
  private wasNight = false
  private nearCampfire = false
  private campfirePopTimer = 0

  // Callbacks
  private statsCb: ((s: GameStats) => void) | null = null
  private toastCb: ((m: string) => void) | null = null

  // Loop
  private animId = 0
  private lastTime = 0
  private paused = false
  private message: string | null = null
  private msgTimer = 0
  private fps = 0
  private frameCount = 0
  private fpsTimer = 0
  private chunksLoadedThisFrame = 0

  // ─────────────────────────────────────────────────────────
  // CONSTRUCTOR
  // ─────────────────────────────────────────────────────────

  constructor(container: HTMLElement) {
    this.container = container
    this.setupScene()
    this.setupSky()
    this.setupLighting()
    this.setupWorld()
    this.setupMaterials()
    this.setupPlayer()
    this.setupInput()
    this.setupHighlight()
    this.setupWeather()
    this.setupParticles()
    this.setupEntities()
    this.setupLights()
    this.initInventory()
    this.emitStats()
  }

  // ─────────────────────────────────────────────────────────
  // SCENE SETUP
  // ─────────────────────────────────────────────────────────

  private setupScene() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.renderer.setClearColor(0x87ceeb)
    this.renderer.shadowMap.enabled = false
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.container.appendChild(this.renderer.domElement)
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0x87ceeb, 50, 120)
    this.camera = new THREE.PerspectiveCamera(70, this.container.clientWidth / this.container.clientHeight, 0.1, 500)
    window.addEventListener('resize', () => {
      const w = this.container.clientWidth, h = this.container.clientHeight
      this.camera.aspect = w / h
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(w, h)
    })
  }

  private setupSky() {
    const geo = new THREE.SphereGeometry(400, 32, 16)
    const mat = new THREE.ShaderMaterial({
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      uniforms: { uTime: { value: 0.3 } },
      side: THREE.BackSide,
      depthWrite: false,
    })
    this.skyMesh = new THREE.Mesh(geo, mat)
    this.scene.add(this.skyMesh)
  }

  private setupLighting() {
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.2)
    this.sunLight.position.set(50, 100, 30)
    this.scene.add(this.sunLight)
    // Hemisphere light for sky/ground color bleeding
    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x4a3520, 0.35)
    this.scene.add(hemiLight)
    this.ambientLight = new THREE.AmbientLight(0x404060, 0.3)
    this.scene.add(this.ambientLight)
  }

  private setupWorld() {
    this.world = new World(Math.floor(Math.random() * 999999))
    this.chunkGroup = new THREE.Group()
    this.scene.add(this.chunkGroup)
  }

  private setupMaterials() {
    this.atlas = createBlockAtlasTexture()
    const fogCol = new THREE.Color(0x87ceeb)
    const baseUniforms = {
      atlas: { value: this.atlas },
      uDaylight: { value: 1.0 },
      uFogColor: { value: fogCol },
      uFogNear: { value: 50.0 },
      uFogFar: { value: 120.0 },
    }
    this.opaqueMat = new THREE.ShaderMaterial({
      vertexShader: CHUNK_VERT, fragmentShader: CHUNK_FRAG,
      uniforms: { ...baseUniforms },
    })
    this.transparentMat = new THREE.ShaderMaterial({
      vertexShader: CHUNK_VERT, fragmentShader: CHUNK_FRAG,
      uniforms: { ...baseUniforms },
      transparent: true, side: THREE.DoubleSide, depthWrite: false,
    })
    this.waterMat = new THREE.ShaderMaterial({
      vertexShader: CHUNK_VERT, fragmentShader: WATER_FRAG,
      uniforms: { ...baseUniforms, uTime: { value: 0 } },
      transparent: true, side: THREE.DoubleSide, depthWrite: false,
    })
  }

  private setupPlayer() {
    // Ensure starting chunk is loaded
    const cx = Math.floor(this.pos.x / CHUNK_SIZE_X)
    const cz = Math.floor(this.pos.z / CHUNK_SIZE_Z)
    for (let dx = -1; dx <= 1; dx++)
      for (let dz = -1; dz <= 1; dz++)
        this.world.ensureChunk(cx + dx, cz + dz)
    // Find surface
    for (let y = CHUNK_SIZE_Y - 1; y >= 0; y--) {
      if (this.world.isSolid(Math.floor(this.pos.x), y, Math.floor(this.pos.z))) {
        this.pos.y = y + 1
        break
      }
    }
    this.vel.set(0, 0, 0)
  }

  private setupInput() {
    const canvas = this.renderer.domElement
    canvas.addEventListener('click', () => {
      if (!this.pointerLocked) canvas.requestPointerLock()
    })
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === canvas
      if (!this.pointerLocked && this.inventoryOpen) {
        // keep inventory open
      }
    })
    document.addEventListener('mousemove', (e) => {
      if (!this.pointerLocked || this.paused) return
      this.yaw -= e.movementX * 0.002
      this.pitch -= e.movementY * 0.002
      this.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.pitch))
    })
    document.addEventListener('keydown', (e) => {
      this.keys.add(e.code)
      if (e.code === 'KeyE') this.toggleInventory()
      if (e.code === 'KeyQ') this.dropHeldItem()
      if (e.code === 'KeyR' && this.dead) this.respawn()
      if (e.code >= 'Digit1' && e.code <= 'Digit9') this.selectedSlot = parseInt(e.code[5]) - 1
    })
    document.addEventListener('keyup', (e) => this.keys.delete(e.code))
    canvas.addEventListener('mousedown', (e) => {
      if (!this.pointerLocked) return
      if (e.button === 0) this.mouseLeft = true
      if (e.button === 2) { this.mouseRight = true; this.rightClickHandled = false }
    })
    canvas.addEventListener('mouseup', (e) => {
      if (e.button === 0) { this.mouseLeft = false; this.breakProgress = 0; this.breakTarget = null }
      if (e.button === 2) this.mouseRight = false
    })
    canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    canvas.addEventListener('wheel', (e) => {
      this.selectedSlot = (this.selectedSlot + Math.sign(e.deltaY) + HOTBAR_SIZE) % HOTBAR_SIZE
    })
  }

  private setupHighlight() {
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.005, 1.005, 1.005))
    this.highlightMesh = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }))
    this.highlightMesh.visible = false
    this.scene.add(this.highlightMesh)
    // Break overlay
    const breakGeo = new THREE.BoxGeometry(1.01, 1.01, 1.01)
    const breakMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false })
    this.breakOverlay = new THREE.Mesh(breakGeo, breakMat)
    this.breakOverlay.visible = false
    this.scene.add(this.breakOverlay)
  }

  private setupWeather() {
    // Rain
    const rainCount = 4000
    const rainPos = new Float32Array(rainCount * 3)
    for (let i = 0; i < rainCount; i++) {
      rainPos[i * 3] = (Math.random() - 0.5) * 60
      rainPos[i * 3 + 1] = Math.random() * 40
      rainPos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    const rainGeo = new THREE.BufferGeometry()
    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3))
    this.rainParticles = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0xaaccff, size: 0.15, transparent: true, opacity: 0.6 }))
    this.rainParticles.visible = false
    this.scene.add(this.rainParticles)
    // Snow
    const snowCount = 2000
    const snowPos = new Float32Array(snowCount * 3)
    for (let i = 0; i < snowCount; i++) {
      snowPos[i * 3] = (Math.random() - 0.5) * 60
      snowPos[i * 3 + 1] = Math.random() * 40
      snowPos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    const snowGeo = new THREE.BufferGeometry()
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3))
    this.snowParticles = new THREE.Points(snowGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, transparent: true, opacity: 0.8 }))
    this.snowParticles.visible = false
    this.scene.add(this.snowParticles)
  }

  private setupParticles() {
    this.particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(MAX_PARTICLES * 3)
    const colors = new Float32Array(MAX_PARTICLES * 3)
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    this.particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    this.particleGeo.setDrawRange(0, 0)
    this.particleMesh = new THREE.Points(this.particleGeo, new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, opacity: 0.8, depthWrite: false }))
    this.scene.add(this.particleMesh)
  }

  private setupEntities() {
    this.enemyGroup = new THREE.Group()
    this.scene.add(this.enemyGroup)
    this.animalGroup = new THREE.Group()
    this.scene.add(this.animalGroup)
    this.dropGroup = new THREE.Group()
    this.scene.add(this.dropGroup)
    this.dropGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3)
  }

  private setupLights() {
    this.lightGroup = new THREE.Group()
    this.scene.add(this.lightGroup)
    for (let i = 0; i < 8; i++) {
      const light = new THREE.PointLight(0xff8833, 0, 14, 2)
      light.position.set(0, -999, 0)
      this.lightGroup.add(light)
      this.pointLights.push(light)
    }
  }

  private initInventory() {
    // Give player a few starting items
    addItem(this.inventory, String(BLOCK.TORCH), 8)
    addItem(this.inventory, ITEM.BREAD, 3)
    addItem(this.inventory, String(BLOCK.PLANKS), 16)
  }

  // ─────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────

  start() {
    this.lastTime = performance.now()
    startAmbient()
    const loop = (now: number) => {
      this.animId = requestAnimationFrame(loop)
      const dt = Math.min((now - this.lastTime) / 1000, 0.1)
      this.lastTime = now
      if (!this.paused) this.update(dt)
      this.renderer.render(this.scene, this.camera)
      this.frameCount++
      this.fpsTimer += dt
      if (this.fpsTimer >= 1) { this.fps = this.frameCount; this.frameCount = 0; this.fpsTimer = 0 }
    }
    this.animId = requestAnimationFrame(loop)
  }

  dispose() {
    cancelAnimationFrame(this.animId)
    stopAmbient()
    stopRainAmbient()
    stopWindAmbient()
    stopCaveAmbient()
    stopCampfireAmbient()
    this.renderer.dispose()
    this.container.removeChild(this.renderer.domElement)
  }

  onStatsChange(fn: (s: GameStats) => void) { this.statsCb = fn }
  onToast(fn: (m: string) => void) { this.toastCb = fn }

  getYaw(): number { return this.yaw }

  sampleMapColor(x: number, z: number): [number, number, number] {
    const biome = this.world.gen.getBiome(x, z)
    switch (biome) {
      case 1: return [0.96, 0.87, 0.70] // desert
      case 2: return [0.96, 0.98, 1.0]  // tundra
      case 3: return [0.18, 0.49, 0.20]  // forest
      case 4: return [0.54, 0.54, 0.54]  // mountain
      default: return [0.30, 0.69, 0.31] // plains
    }
  }

  // Inventory UI interaction
  clickSlot(area: 'inventory' | 'craft', index: number) {
    const src = area === 'inventory' ? this.inventory : this.craftGrid
    const slot = src[index]
    if (this.cursorItem === null) {
      if (slot !== null) {
        this.cursorItem = slot
        src[index] = null
      }
    } else {
      if (slot === null) {
        src[index] = this.cursorItem
        this.cursorItem = null
      } else if (slot.id === this.cursorItem.id && itemDef(slot.id)!.stackSize > 1) {
        const space = itemDef(slot.id)!.stackSize - slot.count
        const add = Math.min(space, this.cursorItem.count)
        slot.count += add
        this.cursorItem.count -= add
        if (this.cursorItem.count <= 0) this.cursorItem = null
      } else {
        const tmp = slot
        src[index] = this.cursorItem
        this.cursorItem = tmp
      }
    }
    this.updateCraftResult()
    this.emitStats()
  }

  clickCraftResult() {
    if (!this.craftResult) return
    const result = this.craftResult
    if (this.cursorItem === null) {
      this.cursorItem = { id: result.id, count: result.count, durability: result.durability }
      consumeIngredients(this.craftGrid)
      SFX.craftComplete()
    } else if (this.cursorItem.id === result.id) {
      const def = itemDef(result.id)
      if (def && this.cursorItem.count + result.count <= def.stackSize) {
        this.cursorItem.count += result.count
        consumeIngredients(this.craftGrid)
        SFX.craftComplete()
      }
    }
    this.updateCraftResult()
    this.emitStats()
  }

  setCraftGridSize(s: 2 | 3) { this.craftGridSize = s; this.craftGrid = new Array<Slot>(s * s).fill(null); this.craftResult = null }

  getCursorItem(): Slot { return this.cursorItem }

  toggleInventory() {
    this.inventoryOpen = !this.inventoryOpen
    if (this.inventoryOpen) {
      this.setCraftGridSize(this.isNearCraftingTable() ? 3 : 2)
    } else {
      // Return cursor item to inventory
      if (this.cursorItem) {
        const leftover = addItem(this.inventory, this.cursorItem.id, this.cursorItem.count)
        if (leftover > 0) this.spawnDrop(this.pos.x, this.pos.y, this.pos.z, this.cursorItem.id, leftover)
        this.cursorItem = null
      }
      // Return craft grid items
      for (let i = 0; i < this.craftGrid.length; i++) {
        if (this.craftGrid[i]) {
          const leftover = addItem(this.inventory, this.craftGrid[i]!.id, this.craftGrid[i]!.count)
          if (leftover > 0) this.spawnDrop(this.pos.x, this.pos.y, this.pos.z, this.craftGrid[i]!.id, leftover)
          this.craftGrid[i] = null
        }
      }
      this.craftResult = null
    }
    this.emitStats()
  }

  respawn() {
    this.health = this.maxHealth
    this.hunger = this.maxHunger
    this.stamina = this.maxStamina
    this.thirst = this.maxThirst
    this.dead = false
    this.pos.set(8, 40, 8)
    this.setupPlayer()
    this.vel.set(0, 0, 0)
    this.emitStats()
  }

  // ─────────────────────────────────────────────────────────
  // MAIN UPDATE
  // ─────────────────────────────────────────────────────────

  private waterFlowTimer = 0
  private steamTimer = 0

  private update(dt: number) {
    if (this.dead) { this.emitStats(); return }
    this.updateDayNight(dt)
    this.updateWeather(dt)
    this.updatePlayer(dt)
    this.updateCamera()
    this.updateChunks()
    this.updateTarget()
    this.updateBreaking(dt)
    this.updateWaterFlow(dt)
    this.updateSteam(dt)
    this.updatePlacing()
    this.updateEnemies(dt)
    this.updateAnimals(dt)
    this.updateItemDrops(dt)
    this.updateParticles(dt)
    this.updateStats(dt)
    this.updateLights()
    this.updateAudio(dt)
    this.updateSky()
    this.updateMaterials()
    this.emitStats()
  }

  // ─────────────────────────────────────────────────────────
  // PLAYER MOVEMENT
  // ─────────────────────────────────────────────────────────

  private updatePlayer(dt: number) {
    if (this.inventoryOpen) return
    // Check water — sample head, torso, and feet levels for smooth transitions
    const headBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y + PLAYER_EYE), Math.floor(this.pos.z))
    const torsoBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y + 1.0), Math.floor(this.pos.z))
    const feetBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y + 0.4), Math.floor(this.pos.z))
    this.wasInWater = this.inWater
    this.inWater = headBlock === BLOCK.WATER || torsoBlock === BLOCK.WATER || feetBlock === BLOCK.WATER

    // Water exit boost: when just leaving water, give upward momentum to break surface
    if (this.wasInWater && !this.inWater) {
      if (this.vel.y > 0) {
        // Player was swimming up — give a boost to clear the surface
        this.vel.y = Math.max(this.vel.y, 6.0)
      }
      this.waterExitTimer = 0.4 // Grace period for jump after exiting water
    }
    if (this.waterExitTimer > 0) this.waterExitTimer -= dt

    // Movement input
    this.sprinting = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
    let moveX = 0, moveZ = 0
    if (this.keys.has('KeyW')) moveZ -= 1
    if (this.keys.has('KeyS')) moveZ += 1
    if (this.keys.has('KeyA')) moveX -= 1
    if (this.keys.has('KeyD')) moveX += 1
    const moving = moveX !== 0 || moveZ !== 0

    // Speed
    let speed = WALK_SPEED
    if (this.sprinting && this.stamina > 0 && moving) speed = SPRINT_SPEED
    if (this.inWater) speed = SWIM_SPEED
    if (this.hunger <= 0) speed *= 0.5

    // Direction — compute forward/right from yaw
    // Forward = (-sin(yaw), 0, -cos(yaw)) in Three.js YXZ Euler
    // Right   = ( cos(yaw), 0, -sin(yaw))
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw)
    const dx = (moveX * cos + moveZ * sin) * speed
    const dz = (-moveX * sin + moveZ * cos) * speed

    this.vel.x = dx
    this.vel.z = dz

    // Gravity & swimming
    if (this.inWater) {
      // Underwater physics: heavy drag + buoyancy
      this.vel.y *= 0.85
      this.vel.y += GRAVITY * 0.15 * dt
      if (this.keys.has('Space')) {
        this.vel.y = 3.5  // Swim up
      } else if (this.keys.has('ControlLeft') || this.keys.has('ControlRight')) {
        this.vel.y = -3.0 // Swim down (Ctrl key)
      }
      if (this.sprinting && moving) this.vel.y = Math.max(this.vel.y, 2.0) // Dolphin kick
    } else if (this.isClimbing()) {
      // Ladder climbing: very slow gravity, can go up/down with keys
      this.vel.y *= 0.5
      this.vel.y += GRAVITY * 0.1 * dt
      if (this.keys.has('Space') || (this.keys.has('KeyW') && moving)) {
        this.vel.y = 2.5  // Climb up
      } else if (this.keys.has('ControlLeft') || this.keys.has('ControlRight') || this.keys.has('ShiftLeft')) {
        this.vel.y = -2.0 // Climb down
      }
      if (this.vel.y < -2.0) this.vel.y = -2.0 // Cap fall speed on ladder
    } else {
      this.vel.y += GRAVITY * dt
      // Allow jump during water exit grace period OR when on ground
      if (this.keys.has('Space') && (this.onGround || this.waterExitTimer > 0)) {
        this.vel.y = JUMP_VEL
        this.onGround = false
        this.waterExitTimer = 0
        SFX.jump()
      }
    }

    // Track fall start
    if (this.onGround && this.vel.y <= 0) this.fallStartY = this.pos.y
    if (!this.onGround && this.vel.y < 0 && this.fallStartY < 0) this.fallStartY = this.pos.y

    // Stamina
    if (this.sprinting && moving && !this.inWater) {
      this.stamina = Math.max(0, this.stamina - 3 * dt)
      if (this.stamina <= 0) this.sprinting = false
    } else {
      this.stamina = Math.min(this.maxStamina, this.stamina + 1.5 * dt)
    }

    // Move with collision
    this.moveWithCollision(dt)
  }

  // ─────────────────────────────────────────────────────────
  // COLLISION
  // ─────────────────────────────────────────────────────────

  private moveWithCollision(dt: number) {
    const hw = PLAYER_WIDTH / 2
    // X axis
    this.pos.x += this.vel.x * dt
    if (this.collidesAt(this.pos.x, this.pos.y, this.pos.z)) {
      this.pos.x -= this.vel.x * dt
      // Nudge to wall
      const sign = Math.sign(this.vel.x)
      for (let i = 0; i < 4; i++) {
        this.pos.x += sign * 0.01
        if (this.collidesAt(this.pos.x, this.pos.y, this.pos.z)) { this.pos.x -= sign * 0.01; break }
      }
      this.vel.x = 0
    }
    // Z axis
    this.pos.z += this.vel.z * dt
    if (this.collidesAt(this.pos.x, this.pos.y, this.pos.z)) {
      this.pos.z -= this.vel.z * dt
      const sign = Math.sign(this.vel.z)
      for (let i = 0; i < 4; i++) {
        this.pos.z += sign * 0.01
        if (this.collidesAt(this.pos.x, this.pos.y, this.pos.z)) { this.pos.z -= sign * 0.01; break }
      }
      this.vel.z = 0
    }
    // Y axis
    const prevY = this.pos.y
    this.pos.y += this.vel.y * dt
    if (this.collidesAt(this.pos.x, this.pos.y, this.pos.z)) {
      this.pos.y = prevY
      if (this.vel.y < 0) {
        this.onGround = true
        // Fall damage
        const fallDist = this.fallStartY - this.pos.y
        if (fallDist > 3) {
          const dmg = Math.floor(fallDist - 3)
          this.takeDamage(dmg)
          SFX.land(fallDist)
        }
        this.fallStartY = this.pos.y
      }
      this.vel.y = 0
    } else {
      this.onGround = false
    }
    // Clamp
    if (this.pos.y < -10) { this.takeDamage(100); this.pos.y = 50 }
  }

  /** Check if the player is touching a ladder block */
  private isClimbing(): boolean {
    const hw = PLAYER_WIDTH / 2
    // Check blocks around the player's torso area for ladder
    for (let dy = 0; dy < PLAYER_HEIGHT; dy += 0.5) {
      for (let dx = -hw; dx <= hw; dx += hw) {
        for (let dz = -hw; dz <= hw; dz += hw) {
          const bx = Math.floor(this.pos.x + dx)
          const by = Math.floor(this.pos.y + dy)
          const bz = Math.floor(this.pos.z + dz)
          if (this.world.getBlock(bx, by, bz) === BLOCK.LADDER) return true
        }
      }
    }
    return false
  }

  private collidesAt(px: number, py: number, pz: number): boolean {
    const hw = PLAYER_WIDTH / 2
    const minX = Math.floor(px - hw), maxX = Math.floor(px + hw)
    const minY = Math.floor(py), maxY = Math.floor(py + PLAYER_HEIGHT - 0.01)
    const minZ = Math.floor(pz - hw), maxZ = Math.floor(pz + hw)
    for (let x = minX; x <= maxX; x++)
      for (let y = minY; y <= maxY; y++)
        for (let z = minZ; z <= maxZ; z++)
          if (this.world.isSolid(x, y, z)) return true
    return false
  }

  // ─────────────────────────────────────────────────────────
  // CAMERA
  // ─────────────────────────────────────────────────────────

  private updateCamera() {
    this.camera.position.set(this.pos.x, this.pos.y + PLAYER_EYE, this.pos.z)
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')
    this.camera.quaternion.setFromEuler(euler)
    this.skyMesh.position.copy(this.camera.position)
  }

  // ─────────────────────────────────────────────────────────
  // CHUNK MANAGEMENT
  // ─────────────────────────────────────────────────────────

  private updateChunks() {
    const pcx = Math.floor(this.pos.x / CHUNK_SIZE_X)
    const pcz = Math.floor(this.pos.z / CHUNK_SIZE_Z)
    // Load needed chunks
    this.chunksLoadedThisFrame = 0
    for (let dx = -RENDER_DISTANCE; dx <= RENDER_DISTANCE; dx++) {
      for (let dz = -RENDER_DISTANCE; dz <= RENDER_DISTANCE; dz++) {
        if (dx * dx + dz * dz > (RENDER_DISTANCE + 0.5) * (RENDER_DISTANCE + 0.5)) continue
        const cx = pcx + dx, cz = pcz + dz
        const key = `${cx},${cz}`
        if (!this.world.chunks.has(key)) {
          if (this.chunksLoadedThisFrame < 3) {
            this.world.ensureChunk(cx, cz)
            this.chunksLoadedThisFrame++
          }
          continue
        }
        const chunk = this.world.getChunk(cx, cz)!
        if (chunk.dirty && !this.chunkMeshes.has(key)) {
          this.buildChunkMesh(cx, cz, chunk)
        } else if (chunk.dirty && this.chunkMeshes.has(key)) {
          this.rebuildChunkMesh(cx, cz, chunk)
        }
      }
    }
    // Unload distant chunks
    for (const [key, meshes] of this.chunkMeshes) {
      const [cx, cz] = key.split(',').map(Number)
      if (Math.abs(cx - pcx) > RENDER_DISTANCE + 2 || Math.abs(cz - pcz) > RENDER_DISTANCE + 2) {
        this.chunkGroup.remove(meshes.opaque)
        this.chunkGroup.remove(meshes.transparent)
        this.chunkGroup.remove(meshes.water)
        meshes.opaque.geometry.dispose()
        meshes.transparent.geometry.dispose()
        meshes.water.geometry.dispose()
        this.chunkMeshes.delete(key)
      }
    }
  }

  private buildChunkMesh(cx: number, cz: number, chunk: Chunk) {
    const { opaque, transparent, water } = meshChunk(this.world, chunk)
    const oMesh = this.makeMesh(opaque, this.opaqueMat)
    const tMesh = this.makeMesh(transparent, this.transparentMat)
    const wMesh = this.makeMesh(water, this.waterMat)
    this.chunkGroup.add(oMesh)
    this.chunkGroup.add(tMesh)
    this.chunkGroup.add(wMesh)
    this.chunkMeshes.set(`${cx},${cz}`, { opaque: oMesh, transparent: tMesh, water: wMesh })
    chunk.dirty = false
  }

  private rebuildChunkMesh(cx: number, cz: number, chunk: Chunk) {
    const key = `${cx},${cz}`
    const old = this.chunkMeshes.get(key)!
    this.chunkGroup.remove(old.opaque)
    this.chunkGroup.remove(old.transparent)
    this.chunkGroup.remove(old.water)
    old.opaque.geometry.dispose()
    old.transparent.geometry.dispose()
    old.water.geometry.dispose()
    this.buildChunkMesh(cx, cz, chunk)
  }

  private makeMesh(data: MeshData, material: THREE.Material): THREE.Mesh {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(data.positions, 3))
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(data.normals, 3))
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(data.uvs, 2))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(data.colors, 3))
    geo.setIndex(data.indices)
    return new THREE.Mesh(geo, material)
  }

  // ─────────────────────────────────────────────────────────
  // RAYCAST (DDA)
  // ─────────────────────────────────────────────────────────

  private updateTarget() {
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
    const ox = this.camera.position.x, oy = this.camera.position.y, oz = this.camera.position.z
    let x = Math.floor(ox), y = Math.floor(oy), z = Math.floor(oz)
    const stepX = dir.x >= 0 ? 1 : -1
    const stepY = dir.y >= 0 ? 1 : -1
    const stepZ = dir.z >= 0 ? 1 : -1
    const tDeltaX = dir.x !== 0 ? Math.abs(1 / dir.x) : Infinity
    const tDeltaY = dir.y !== 0 ? Math.abs(1 / dir.y) : Infinity
    const tDeltaZ = dir.z !== 0 ? Math.abs(1 / dir.z) : Infinity
    let tMaxX = dir.x !== 0 ? ((dir.x > 0 ? (x + 1 - ox) : (ox - x)) * tDeltaX) : Infinity
    let tMaxY = dir.y !== 0 ? ((dir.y > 0 ? (y + 1 - oy) : (oy - y)) * tDeltaY) : Infinity
    let tMaxZ = dir.z !== 0 ? ((dir.z > 0 ? (z + 1 - oz) : (oz - z)) * tDeltaZ) : Infinity
    let nx = 0, ny = 0, nz = 0
    this.targetBlock = null
    this.targetNormal = null
    for (let i = 0; i < REACH * 3; i++) {
      const block = this.world.getBlock(x, y, z)
      if (block !== BLOCK.AIR && block !== BLOCK.WATER) {
        this.targetBlock = { x, y, z }
        this.targetNormal = { x: nx, y: ny, z: nz }
        break
      }
      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) { x += stepX; tMaxX += tDeltaX; nx = -stepX; ny = 0; nz = 0 }
        else { z += stepZ; tMaxZ += tDeltaZ; nx = 0; ny = 0; nz = -stepZ }
      } else {
        if (tMaxY < tMaxZ) { y += stepY; tMaxY += tDeltaY; nx = 0; ny = -stepY; nz = 0 }
        else { z += stepZ; tMaxZ += tDeltaZ; nx = 0; ny = 0; nz = -stepZ }
      }
      const dist = Math.sqrt((x - ox + 0.5) ** 2 + (y - oy + 0.5) ** 2 + (z - oz + 0.5) ** 2)
      if (dist > REACH) break
    }
    if (this.targetBlock) {
      this.highlightMesh.position.set(this.targetBlock.x + 0.5, this.targetBlock.y + 0.5, this.targetBlock.z + 0.5)
      this.highlightMesh.visible = true
    } else {
      this.highlightMesh.visible = false
    }
  }

  // ─────────────────────────────────────────────────────────
  // BLOCK BREAKING
  // ─────────────────────────────────────────────────────────

  private updateBreaking(dt: number) {
    if (!this.mouseLeft || !this.pointerLocked || this.inventoryOpen || !this.targetBlock) {
      this.breakProgress = 0
      this.breakOverlay.visible = false
      return
    }
    const tb = this.targetBlock
    // Check if target changed
    if (!this.breakTarget || this.breakTarget.x !== tb.x || this.breakTarget.y !== tb.y || this.breakTarget.z !== tb.z) {
      this.breakProgress = 0
      this.breakTarget = { ...tb }
    }
    const block = this.world.getBlock(tb.x, tb.y, tb.z)
    if (block === BLOCK.AIR || block === BLOCK.WATER || block === BLOCK.BEDROCK) return
    const def = BLOCK_DEFS[block]
    const held = this.inventory[this.selectedSlot]
    const { speed, canHarvest } = miningProfile(block, held?.id)
    const breakTime = def.breakTime / speed
    this.breakProgress += dt
    // Break overlay
    this.breakOverlay.position.set(tb.x + 0.5, tb.y + 0.5, tb.z + 0.5)
    this.breakOverlay.visible = true
    const pct = Math.min(this.breakProgress / breakTime, 1)
    ;(this.breakOverlay.material as THREE.MeshBasicMaterial).opacity = pct * 0.5
    ;(this.breakOverlay.material as THREE.MeshBasicMaterial).color.set(pct > 0.6 ? 0xff0000 : pct > 0.3 ? 0xffaa00 : 0xffffff)
    if (this.breakProgress >= breakTime) {
      // Break block
      SFX.breakBlock(block)
      this.spawnBreakParticles(tb.x, tb.y, tb.z, block)
      if (canHarvest) {
        const drops = blockDropItem(block)
        for (const drop of drops) this.spawnDrop(tb.x + 0.5, tb.y + 0.5, tb.z + 0.5, drop.id, drop.count)
      }
      this.world.setBlock(tb.x, tb.y, tb.z, BLOCK.AIR)
      this.breakProgress = 0
      this.breakTarget = null
      this.breakOverlay.visible = false
      this.checkAchievement('first_break')
      // Damage tool
      if (held && held.durability !== undefined) {
        held.durability--
        if (held.durability <= 0) { this.inventory[this.selectedSlot] = null; this.toast('Tool broke!') }
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  // BLOCK PLACING
  // ─────────────────────────────────────────────────────────

  private updatePlacing() {
    if (!this.mouseRight || !this.pointerLocked || this.inventoryOpen || this.rightClickHandled) return
    this.rightClickHandled = true
    const held = this.inventory[this.selectedSlot]
    if (!held) return
    const def = itemDef(held.id)
    if (!def) return
    // Food?
    if (def.food) {
      if (this.hunger < this.maxHunger || this.health < this.maxHealth) {
        this.hunger = Math.min(this.maxHunger, this.hunger + (def.food.hunger || 0))
        this.thirst = Math.min(this.maxThirst, this.thirst + (def.food.thirst || 0))
        if (def.food.health && def.food.health > 0) this.health = Math.min(this.maxHealth, this.health + def.food.health)
        held.count--
        if (held.count <= 0) this.inventory[this.selectedSlot] = null
        SFX.eat()
        this.toast(`Ate ${def.name}`)
      }
      return
    }
    // Place block
    if (!def.blockId || !this.targetBlock || !this.targetNormal) return
    const px = this.targetBlock.x + this.targetNormal.x
    const py = this.targetBlock.y + this.targetNormal.y
    const pz = this.targetBlock.z + this.targetNormal.z
    if (px < 0 || py < 0 || py >= CHUNK_SIZE_Y || pz < 0) return
    if (this.world.getBlock(px, py, pz) !== BLOCK.AIR) return
    // Don't place inside player
    const hw = PLAYER_WIDTH / 2
    if (px >= Math.floor(this.pos.x - hw) && px <= Math.floor(this.pos.x + hw) &&
        pz >= Math.floor(this.pos.z - hw) && pz <= Math.floor(this.pos.z + hw) &&
        py >= Math.floor(this.pos.y) && py <= Math.floor(this.pos.y + PLAYER_HEIGHT)) return
    this.world.setBlock(px, py, pz, def.blockId)
    held.count--
    if (held.count <= 0) this.inventory[this.selectedSlot] = null
    SFX.place()
    this.checkAchievement('first_place')
  }

  // ─────────────────────────────────────────────────────────
  // ENEMIES
  // ─────────────────────────────────────────────────────────

  private updateEnemies(dt: number) {
    const isNight = this.getSunHeight() < 0
    const spawnRate = this.isBloodMoon ? 3 : (isNight ? 1 : 0)
    // Spawn
    if (this.enemies.length < MAX_ENEMIES && spawnRate > 0 && Math.random() < spawnRate * dt * 0.3) {
      this.spawnEnemy()
    }
    // Update
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i]
      const dist = e.position.distanceTo(this.pos)
      // Despawn if far or daytime (not blood moon)
      if (dist > DESPAWN_RANGE || (!isNight && !this.isBloodMoon && Math.random() < dt * 0.3)) {
        this.removeEnemy(i)
        continue
      }
      // AI: move toward player
      const dir = new THREE.Vector3().subVectors(this.pos, e.position)
      dir.y = 0
      const d = dir.length()
      if (d > 0.1) dir.normalize()
      let speed = e.type === 'slime' ? 1.5 : (e.type === 'skeleton' ? 2.5 : 2.0)
      if (this.isBloodMoon) speed *= 1.3
      if (d > 1.5) {
        e.velocity.x = dir.x * speed
        e.velocity.z = dir.z * speed
      } else {
        e.velocity.x *= 0.8
        e.velocity.z *= 0.8
      }
      // Slime hop
      if (e.type === 'slime' && e.onGround && d > 1.5) {
        e.velocity.y = 6
        e.onGround = false
      }
      // Gravity
      e.velocity.y += GRAVITY * dt
      // Move
      e.position.x += e.velocity.x * dt
      e.position.z += e.velocity.z * dt
      e.position.y += e.velocity.y * dt
      // Ground check
      const groundY = this.getGroundY(e.position)
      if (e.position.y <= groundY) {
        e.position.y = groundY
        e.velocity.y = 0
        e.onGround = true
      }
      // Attack player
      e.attackCooldown -= dt
      if (d < 1.8 && e.attackCooldown <= 0) {
        const dmg = e.type === 'skeleton' ? 3 : (e.type === 'slime' ? 1 : 2)
        if (this.isBloodMoon) this.takeDamage(dmg + 1)
        else this.takeDamage(dmg)
        e.attackCooldown = 1.2
        SFX.enemyGrowl()
      }
      // Update mesh
      e.mesh.position.copy(e.position)
      // Player attack enemy
      if (this.mouseLeft && this.pointerLocked && !this.inventoryOpen) {
        const toE = new THREE.Vector3().subVectors(e.position, this.pos)
        toE.y = 0
        if (toE.length() < REACH && d < 4) {
          const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
          camDir.y = 0; camDir.normalize()
          toE.normalize()
          if (camDir.dot(toE) > 0.5) {
            const held = this.inventory[this.selectedSlot]
            const atk = (held && itemDef(held.id)?.attack) || 1
            e.health -= atk
            if (held && held.durability !== undefined) {
              held.durability--
              if (held.durability <= 0) { this.inventory[this.selectedSlot] = null }
            }
            SFX.hit()
            // Knockback
            e.velocity.x += toE.x * -5
            e.velocity.z += toE.z * -5
            e.velocity.y += 3
            if (e.health <= 0) {
              SFX.enemyDeath()
              this.spawnDrop(e.position.x, e.position.y + 0.5, e.position.z, ITEM.BONE, 1 + Math.floor(Math.random() * 2))
              if (Math.random() < 0.3) this.spawnDrop(e.position.x, e.position.y + 0.5, e.position.z, ITEM.MEAT_RAW, 1)
              this.removeEnemy(i)
              this.checkAchievement('first_kill')
            }
          }
        }
      }
    }
  }

  private spawnEnemy() {
    const angle = Math.random() * Math.PI * 2
    const dist = SPAWN_RANGE_MIN + Math.random() * (SPAWN_RANGE_MAX - SPAWN_RANGE_MIN)
    const x = Math.floor(this.pos.x + Math.cos(angle) * dist)
    const z = Math.floor(this.pos.z + Math.sin(angle) * dist)
    const y = this.getGroundY(new THREE.Vector3(x, 50, z))
    if (y < SEA_LEVEL - 1) return
    const types: Array<'zombie' | 'skeleton' | 'slime'> = ['zombie', 'skeleton', 'slime']
    const type = types[Math.floor(Math.random() * types.length)]
    const mesh = this.createEnemyMesh(type)
    mesh.position.set(x, y, z)
    this.enemyGroup.add(mesh)
    const maxHp = type === 'slime' ? 6 : (type === 'skeleton' ? 12 : 16)
    this.enemies.push({
      mesh, type,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3(),
      health: maxHp, maxHealth: maxHp,
      attackCooldown: 2, onGround: true,
    })
  }

  private createEnemyMesh(type: 'zombie' | 'skeleton' | 'slime'): THREE.Group {
    const g = new THREE.Group()
    const mat = (c: number) => new THREE.MeshLambertMaterial({ color: c })
    if (type === 'zombie') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.9, 0.3), mat(0x2d5a27))
      body.position.y = 0.9
      g.add(body)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), mat(0x3a7a32))
      head.position.y = 1.6
      g.add(head)
      const armL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), mat(0x2d5a27))
      armL.position.set(-0.35, 0.9, 0.15); armL.rotation.x = -0.8
      g.add(armL)
      const armR = armL.clone(); armR.position.x = 0.35
      g.add(armR)
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.6, 0.22), mat(0x224422))
      legL.position.set(-0.13, 0.3, 0); g.add(legL)
      const legR = legL.clone(); legR.position.x = 0.13; g.add(legR)
    } else if (type === 'skeleton') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 0.2), mat(0xd0d0c8))
      body.position.y = 0.9; g.add(body)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), mat(0xe0e0d8))
      head.position.y = 1.55; g.add(head)
      const armL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.7, 0.15), mat(0xc8c8c0))
      armL.position.set(-0.25, 0.9, 0.1); armL.rotation.x = -0.6; g.add(armL)
      const armR = armL.clone(); armR.position.x = 0.25; g.add(armR)
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.6, 0.15), mat(0xb8b8b0))
      legL.position.set(-0.1, 0.3, 0); g.add(legL)
      const legR = legL.clone(); legR.position.x = 0.1; g.add(legR)
    } else {
      const slime = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), mat(0x44bb44))
      slime.position.y = 0.4; g.add(slime)
    }
    return g
  }

  private removeEnemy(i: number) {
    this.enemyGroup.remove(this.enemies[i].mesh)
    this.enemies.splice(i, 1)
  }

  // ─────────────────────────────────────────────────────────
  // ANIMALS
  // ─────────────────────────────────────────────────────────

  private updateAnimals(dt: number) {
    const isDay = this.getSunHeight() > 0
    // Spawn during day
    if (this.animals.length < MAX_ANIMALS && isDay && Math.random() < dt * 0.05) {
      this.spawnAnimal()
    }
    for (let i = this.animals.length - 1; i >= 0; i--) {
      const a = this.animals[i]
      const dist = a.position.distanceTo(this.pos)
      if (dist > DESPAWN_RANGE) { this.removeAnimal(i); continue }
      // Flee from player
      const toPlayer = new THREE.Vector3().subVectors(this.pos, a.position)
      toPlayer.y = 0
      const pd = toPlayer.length()
      if (pd < 6 && pd > 0.1) {
        a.fleeTimer = 3
        a.wanderDir.copy(toPlayer).normalize().negate()
      }
      a.fleeTimer -= dt
      a.wanderTimer -= dt
      if (a.wanderTimer <= 0) {
        a.wanderDir.set(Math.random() - 0.5, 0, Math.random() - 0.5).normalize()
        a.wanderTimer = 3 + Math.random() * 5
      }
      const speed = a.fleeTimer > 0
        ? (a.type === 'rabbit' ? 5 : 3)
        : (a.type === 'rabbit' ? 2 : (a.type === 'cow' ? 0.8 : 1.5))
      a.velocity.x = a.wanderDir.x * speed
      a.velocity.z = a.wanderDir.z * speed
      a.velocity.y += GRAVITY * dt
      a.position.x += a.velocity.x * dt
      a.position.z += a.velocity.z * dt
      a.position.y += a.velocity.y * dt
      const gy = this.getGroundY(a.position)
      if (a.position.y <= gy) { a.position.y = gy; a.velocity.y = 0; a.onGround = true }
      a.mesh.position.copy(a.position)
      // Face direction
      if (Math.abs(a.velocity.x) + Math.abs(a.velocity.z) > 0.1) {
        a.mesh.rotation.y = Math.atan2(a.velocity.x, a.velocity.z)
      }
      // Attack by player
      if (this.mouseLeft && this.pointerLocked && !this.inventoryOpen && pd < REACH) {
        const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
        const toA = new THREE.Vector3().subVectors(a.position, this.pos); toA.y = 0; toA.normalize()
        if (camDir.dot(toA) > 0.5) {
          const held = this.inventory[this.selectedSlot]
          const atk = (held && itemDef(held.id)?.attack) || 1
          // Animals die in one hit from sword, 2 from other
          SFX.hit()
          this.spawnDrop(a.position.x, a.position.y + 0.5, a.position.z, ITEM.MEAT_RAW, 1 + Math.floor(Math.random() * 2))
          if (a.type === 'cow') this.spawnDrop(a.position.x, a.position.y + 0.5, a.position.z, ITEM.LEATHER, 1)
          this.removeAnimal(i)
        }
      }
    }
  }

  private spawnAnimal() {
    const angle = Math.random() * Math.PI * 2
    const dist = SPAWN_RANGE_MIN + Math.random() * (SPAWN_RANGE_MAX - SPAWN_RANGE_MIN)
    const x = Math.floor(this.pos.x + Math.cos(angle) * dist)
    const z = Math.floor(this.pos.z + Math.sin(angle) * dist)
    const y = this.getGroundY(new THREE.Vector3(x, 50, z))
    if (y < SEA_LEVEL) return
    const types: Array<'deer' | 'rabbit' | 'cow'> = ['deer', 'rabbit', 'cow']
    const type = types[Math.floor(Math.random() * types.length)]
    const mesh = this.createAnimalMesh(type)
    mesh.position.set(x, y, z)
    this.animalGroup.add(mesh)
    this.animals.push({
      mesh, type,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3(),
      wanderDir: new THREE.Vector3(Math.random() - 0.5, 0, Math.random() - 0.5).normalize(),
      wanderTimer: 3 + Math.random() * 5,
      fleeTimer: 0,
      onGround: true,
    })
  }

  private createAnimalMesh(type: 'deer' | 'rabbit' | 'cow'): THREE.Group {
    const g = new THREE.Group()
    const mat = (c: number) => new THREE.MeshLambertMaterial({ color: c })
    if (type === 'deer') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.9), mat(0x8B6914))
      body.position.y = 0.8; g.add(body)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.35, 0.3), mat(0xA07828))
      head.position.set(0, 1.1, 0.5); g.add(head)
      const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 0.12), mat(0x6B5010))
      leg1.position.set(-0.15, 0.28, -0.25); g.add(leg1)
      const leg2 = leg1.clone(); leg2.position.x = 0.15; g.add(leg2)
      const leg3 = leg1.clone(); leg3.position.z = 0.25; g.add(leg3)
      const leg4 = leg1.clone(); leg4.position.set(0.15, 0.28, 0.25); g.add(leg4)
    } else if (type === 'rabbit') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.2, 0.3), mat(0xC8A878))
      body.position.y = 0.25; g.add(body)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.2), mat(0xD0B888))
      head.position.set(0, 0.35, 0.18); g.add(head)
      const ear1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.04), mat(0xC89090))
      ear1.position.set(-0.06, 0.5, 0.16); g.add(ear1)
      const ear2 = ear1.clone(); ear2.position.x = 0.06; g.add(ear2)
    } else {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 1.1), mat(0xF5F5F0))
      body.position.y = 0.8; g.add(body)
      const spots = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.5), mat(0x222222))
      spots.position.set(0.1, 0.85, -0.1); g.add(spots)
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.4), mat(0xF0F0E8))
      head.position.set(0, 1.0, 0.6); g.add(head)
      const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.5, 0.15), mat(0xE0E0D8))
      leg1.position.set(-0.25, 0.25, -0.35); g.add(leg1)
      const leg2 = leg1.clone(); leg2.position.x = 0.25; g.add(leg2)
      const leg3 = leg1.clone(); leg3.position.z = 0.35; g.add(leg3)
      const leg4 = leg1.clone(); leg4.position.set(0.25, 0.25, 0.35); g.add(leg4)
    }
    return g
  }

  private removeAnimal(i: number) {
    this.animalGroup.remove(this.animals[i].mesh)
    this.animals.splice(i, 1)
  }

  // ─────────────────────────────────────────────────────────
  // ITEM DROPS
  // ─────────────────────────────────────────────────────────

  private updateItemDrops(dt: number) {
    for (let i = this.itemDrops.length - 1; i >= 0; i--) {
      const d = this.itemDrops[i]
      d.age += dt
      // Physics
      d.velocity.y += GRAVITY * 0.5 * dt
      d.position.add(d.velocity.clone().multiplyScalar(dt))
      const gy = this.getGroundY(d.position)
      if (d.position.y <= gy) {
        d.position.y = gy
        d.velocity.y = 0
        d.velocity.x *= 0.8
        d.velocity.z *= 0.8
        d.onGround = true
      }
      // Pickup
      const dist = d.position.distanceTo(this.pos)
      if (dist < 1.5 && d.age > 0.5) {
        const leftover = addItem(this.inventory, d.itemId, d.count)
        if (leftover === 0) {
          SFX.pickup()
          this.removeDrop(i)
          continue
        }
        d.count = leftover
      }
      // Despawn after 5 min
      if (d.age > 300) { this.removeDrop(i); continue }
      // Animate
      d.mesh.position.copy(d.position)
      d.mesh.rotation.y += dt * 2
      d.mesh.position.y += Math.sin(d.age * 3) * 0.05
    }
  }

  private spawnDrop(x: number, y: number, z: number, itemId: ItemId, count: number) {
    if (count <= 0) return
    const def = itemDef(itemId)
    const color = def?.color ? new THREE.Color(def.color) : new THREE.Color(0x888888)
    const meshMat = new THREE.MeshLambertMaterial({ color })
    const mesh = new THREE.Mesh(this.dropGeo, meshMat)
    mesh.position.set(x, y, z)
    this.dropGroup.add(mesh)
    this.itemDrops.push({
      mesh, itemId, count,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 2, 3 + Math.random() * 2, (Math.random() - 0.5) * 2),
      age: 0, onGround: false,
    })
  }

  private removeDrop(i: number) {
    this.dropGroup.remove(this.itemDrops[i].mesh)
    this.itemDrops.splice(i, 1)
  }

  private dropHeldItem() {
    const slot = this.inventory[this.selectedSlot]
    if (!slot) return
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
    this.spawnDrop(this.pos.x + dir.x, this.pos.y + PLAYER_EYE + dir.y, this.pos.z + dir.z, slot.id, 1)
    slot.count--
    if (slot.count <= 0) this.inventory[this.selectedSlot] = null
  }

  // ─────────────────────────────────────────────────────────
  // PARTICLES
  // ─────────────────────────────────────────────────────────

  private updateParticles(dt: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.age += dt
      if (p.age >= p.maxAge) { this.particles.splice(i, 1); continue }
      p.velocity.y += GRAVITY * 0.3 * dt
      p.position.add(p.velocity.clone().multiplyScalar(dt))
    }
    // Update geometry
    const posArr = this.particleGeo.attributes.position as THREE.BufferAttribute
    const colArr = this.particleGeo.attributes.color as THREE.BufferAttribute
    for (let i = 0; i < MAX_PARTICLES; i++) {
      if (i < this.particles.length) {
        const p = this.particles[i]
        posArr.setXYZ(i, p.position.x, p.position.y, p.position.z)
        const fade = 1 - p.age / p.maxAge
        colArr.setXYZ(i, p.color.r * fade, p.color.g * fade, p.color.b * fade)
      } else {
        posArr.setXYZ(i, 0, -999, 0)
        colArr.setXYZ(i, 0, 0, 0)
      }
    }
    posArr.needsUpdate = true
    colArr.needsUpdate = true
    this.particleGeo.setDrawRange(0, this.particles.length)
  }

  private spawnBreakParticles(bx: number, by: number, bz: number, blockId: BlockId) {
    const def = BLOCK_DEFS[blockId]
    let color = new THREE.Color(0x888888)
    if (blockId === BLOCK.GRASS) color = new THREE.Color(0x4CAF50)
    else if (blockId === BLOCK.DIRT) color = new THREE.Color(0x7A4E2E)
    else if (blockId === BLOCK.STONE) color = new THREE.Color(0x8A8A8A)
    else if (blockId === BLOCK.SAND) color = new THREE.Color(0xF5DEB3)
    else if (blockId === BLOCK.WOOD) color = new THREE.Color(0x6D4C30)
    else if (blockId === BLOCK.LEAVES) color = new THREE.Color(0x2E7D32)
    else if (blockId === BLOCK.SNOW) color = new THREE.Color(0xF0F0FF)
    const count = 8
    for (let i = 0; i < count && this.particles.length < MAX_PARTICLES; i++) {
      this.particles.push({
        position: new THREE.Vector3(bx + 0.2 + Math.random() * 0.6, by + 0.2 + Math.random() * 0.6, bz + 0.2 + Math.random() * 0.6),
        velocity: new THREE.Vector3((Math.random() - 0.5) * 4, 2 + Math.random() * 4, (Math.random() - 0.5) * 4),
        age: 0, maxAge: 0.5 + Math.random() * 0.5,
        color: color.clone().offsetHSL(0, 0, (Math.random() - 0.5) * 0.2),
      })
    }
  }

  // ─────────────────────────────────────────────────────────
  // DAY/NIGHT CYCLE
  // ─────────────────────────────────────────────────────────

  private updateDayNight(dt: number) {
    this.dayTime += dt / DAY_LENGTH
    if (this.dayTime >= 1) {
      this.dayTime -= 1
      this.dayCount++
      this.bloodMoonChecked = false
    }
    // Check blood moon
    if (!this.bloodMoonChecked && this.getSunHeight() < -0.1) {
      this.bloodMoonChecked = true
      this.isBloodMoon = this.dayCount % 7 === 0
      if (this.isBloodMoon) {
        SFX.bloodMoonRise()
        this.toast('⚠ Blood Moon Rising!')
        this.checkAchievement('blood_moon')
      }
    }
    if (this.getSunHeight() > 0.1) this.isBloodMoon = false
    // Night music
    const isNight = this.getSunHeight() < 0
    if (isNight && !this.wasNight) { setNightMusic(true); this.wasNight = true }
    if (!isNight && this.wasNight) { setNightMusic(false); this.wasNight = false }
  }

  private getSunHeight(): number {
    const angle = this.dayTime * Math.PI * 2 - Math.PI / 2
    return Math.sin(angle)
  }

  // ─────────────────────────────────────────────────────────
  // WEATHER
  // ─────────────────────────────────────────────────────────

  private updateWeather(dt: number) {
    this.weatherTimer -= dt
    if (this.weatherTimer <= 0) {
      this.weatherTimer = WEATHER_CHANGE_MIN + Math.random() * (WEATHER_CHANGE_MAX - WEATHER_CHANGE_MIN)
      const biome = this.world.gen.getBiome(Math.floor(this.pos.x), Math.floor(this.pos.z))
      const r = Math.random()
      if (biome === 2) { // tundra
        this.weather = r < 0.5 ? 'snow' : 'clear'
      } else if (biome === 1) { // desert
        this.weather = 'clear'
      } else {
        this.weather = r < 0.35 ? 'rain' : 'clear'
      }
      // Apply weather audio
      stopRainAmbient(); stopWindAmbient()
      if (this.weather === 'rain') startRainAmbient()
      if (this.weather === 'snow') startWindAmbient(0.08)
    }
    // Update particles
    this.rainParticles.visible = this.weather === 'rain'
    this.snowParticles.visible = this.weather === 'snow'
    if (this.weather === 'rain') {
      const pos = this.rainParticles.geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) - 25 * dt
        if (y < 0) y += 40
        pos.setY(i, y)
      }
      pos.needsUpdate = true
      this.rainParticles.position.set(this.pos.x, 0, this.pos.z)
    }
    if (this.weather === 'snow') {
      const pos = this.snowParticles.geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) - 4 * dt
        let x = pos.getX(i) + Math.sin(i + performance.now() * 0.001) * 0.02
        if (y < 0) y += 40
        pos.setX(i, x)
        pos.setY(i, y)
      }
      pos.needsUpdate = true
      this.snowParticles.position.set(this.pos.x, 0, this.pos.z)
    }
    // Thunder during rain
    if (this.weather === 'rain' && Math.random() < dt * 0.005) {
      SFX.thunder()
    }
  }

  // ─────────────────────────────────────────────────────────
  // SURVIVAL STATS
  // ─────────────────────────────────────────────────────────

  private updateStats(dt: number) {
    // Hunger decreases over time
    this.hunger -= 0.02 * dt
    if (this.sprinting) this.hunger -= 0.05 * dt
    // Thirst decreases over time
    let thirstRate = 0.025
    const biome = this.world.gen.getBiome(Math.floor(this.pos.x), Math.floor(this.pos.z))
    if (biome === 1) thirstRate = 0.06 // desert
    this.thirst -= thirstRate * dt
    if (this.sprinting) this.thirst -= 0.04 * dt
    // Drinking water
    if (this.inWater) {
      this.thirst = Math.min(this.maxThirst, this.thirst + 5 * dt)
    }
    // Clamp
    this.hunger = Math.max(0, Math.min(this.maxHunger, this.hunger))
    this.thirst = Math.max(0, Math.min(this.maxThirst, this.thirst))
    // Health regen when well-fed
    if (this.hunger > 16 && this.thirst > 16) {
      this.health = Math.min(this.maxHealth, this.health + 0.5 * dt)
    }
    // Damage from hunger/thirst
    if (this.hunger <= 0) this.takeDamage(dt * 0.5)
    if (this.thirst <= 0) this.takeDamage(dt * 0.3)
    // Magma damage
    const feetBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y), Math.floor(this.pos.z))
    if (feetBlock === BLOCK.MAGMA) this.takeDamage(dt * 3)
    // Lava damage — much more dangerous than magma
    if (feetBlock === BLOCK.LAVA) this.takeDamage(dt * 8)
    const torsoBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y + 1.0), Math.floor(this.pos.z))
    if (torsoBlock === BLOCK.LAVA) this.takeDamage(dt * 6)
  }

  private takeDamage(amount: number) {
    this.health -= amount
    if (this.health <= 0 && !this.dead) {
      this.health = 0
      this.dead = true
      SFX.death()
      this.toast('You died!')
    }
  }

  // ─────────────────────────────────────────────────────────
  // CAMPFIRE / TORCH LIGHTS
  // ─────────────────────────────────────────────────────────

  private updateLights() {
    const px = Math.floor(this.pos.x), py = Math.floor(this.pos.y), pz = Math.floor(this.pos.z)
    let lightIdx = 0
    const range = 12
    for (let dx = -range; dx <= range; dx++) {
      for (let dy = -range; dy <= range; dy++) {
        for (let dz = -range; dz <= range; dz++) {
          if (lightIdx >= this.pointLights.length) break
          const wx = px + dx, wy = py + dy, wz = pz + dz
          const b = this.world.getBlock(wx, wy, wz)
          const def = BLOCK_DEFS[b]
          if (def && def.emissive > 10) {
            const light = this.pointLights[lightIdx]
            light.position.set(wx + 0.5, wy + 0.8, wz + 0.5)
            light.intensity = def.emissive > 13 ? 1.5 : 0.8
            light.color.set(def.emissive > 13 ? 0xff6622 : 0xffaa44)
            light.distance = def.emissive > 13 ? 16 : 10
            lightIdx++
          }
        }
      }
    }
    // Turn off unused lights
    for (let i = lightIdx; i < this.pointLights.length; i++) {
      this.pointLights[i].position.set(0, -999, 0)
      this.pointLights[i].intensity = 0
    }
    // Campfire proximity
    this.nearCampfire = false
    for (let dx = -4; dx <= 4; dx++) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dz = -4; dz <= 4; dz++) {
          if (this.world.getBlock(px + dx, py + dy, pz + dz) === BLOCK.CAMPFIRE) {
            this.nearCampfire = true
            break
          }
        }
        if (this.nearCampfire) break
      }
      if (this.nearCampfire) break
    }
  }

  // ─────────────────────────────────────────────────────────
  // SKY + MATERIALS UPDATE
  // ─────────────────────────────────────────────────────────

  private updateSky() {
    const mat = this.skyMesh.material as THREE.ShaderMaterial
    mat.uniforms.uTime.value = this.dayTime
  }

  private updateMaterials() {
    const sunH = this.getSunHeight()
    const daylight = Math.max(0, Math.min(1, (sunH + 0.1) / 0.4))
    // Fog color
    const dayFog = new THREE.Color(0x87ceeb)
    const nightFog = new THREE.Color(0x0a0a1a)
    const duskFog = new THREE.Color(0x553322)
    let fogColor: THREE.Color
    if (daylight > 0.6) fogColor = dayFog
    else if (daylight > 0.1) fogColor = dayFog.clone().lerp(duskFog, 1 - (daylight - 0.1) / 0.5)
    else fogColor = nightFog.clone().lerp(duskFog, daylight / 0.1)
    // Sun light
    this.sunLight.intensity = daylight * 1.2
    this.ambientLight.intensity = 0.15 + daylight * 0.35
    this.sunLight.color.set(daylight > 0.3 ? 0xffffff : 0x4466aa)
    // Update fog
    const fog = this.scene.fog as THREE.Fog
    fog.color.copy(fogColor)
    fog.near = 30 + daylight * 20
    fog.far = 60 + daylight * 30
    // Update chunk materials
    const mats = [this.opaqueMat, this.transparentMat, this.waterMat]
    for (const m of mats) {
      m.uniforms.uDaylight.value = 0.15 + daylight * 0.85
      m.uniforms.uFogColor.value.copy(fogColor)
      m.uniforms.uFogNear.value = fog.near
      m.uniforms.uFogFar.value = fog.far
    }
    this.waterMat.uniforms.uTime.value = performance.now() / 1000
  }

  // ─────────────────────────────────────────────────────────
  // AUDIO
  // ─────────────────────────────────────────────────────────

  private updateAudio(dt: number) {
    // Footsteps
    const moving = this.keys.has('KeyW') || this.keys.has('KeyS') || this.keys.has('KeyA') || this.keys.has('KeyD')
    if (moving && this.onGround && !this.inventoryOpen) {
      const interval = this.sprinting ? 0.28 : 0.45
      this.lastFootstep += dt
      if (this.lastFootstep >= interval) {
        this.lastFootstep = 0
        const footBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y - 0.1), Math.floor(this.pos.z))
        SFX.step(blockSurface(footBlock), this.sprinting)
      }
    } else {
      this.lastFootstep = 0.3 // Ready to step immediately when starting
    }
    // Cave ambience
    const underground = this.pos.y < SEA_LEVEL - 5
    if (underground) {
      startCaveAmbient()
      this.lastCaveDrip += dt
      if (this.lastCaveDrip > 5 + Math.random() * 10) {
        playCaveDrip()
        this.lastCaveDrip = 0
      }
    } else {
      stopCaveAmbient()
    }
    // Campfire
    if (this.nearCampfire) {
      startCampfireAmbient()
      this.campfirePopTimer += dt
      if (this.campfirePopTimer > 1 + Math.random() * 3) {
        SFX.campfirePop()
        this.campfirePopTimer = 0
      }
    } else {
      stopCampfireAmbient()
    }
  }

  // ─────────────────────────────────────────────────────────
  // CRAFTING
  // ─────────────────────────────────────────────────────────

  private updateCraftResult() {
    const recipe = findRecipe(this.craftGrid, this.craftGridSize)
    if (recipe) {
      this.craftResult = { id: recipe.result.id, count: recipe.result.count }
    } else {
      this.craftResult = null
    }
  }

  private isNearCraftingTable(): boolean {
    const px = Math.floor(this.pos.x), py = Math.floor(this.pos.y), pz = Math.floor(this.pos.z)
    for (let dx = -3; dx <= 3; dx++)
      for (let dy = -3; dy <= 3; dy++)
        for (let dz = -3; dz <= 3; dz++)
          if (this.world.getBlock(px + dx, py + dy, pz + dz) === BLOCK.CRAFTING_TABLE) return true
    return false
  }

  // ─────────────────────────────────────────────────────────
  // ACHIEVEMENTS
  // ─────────────────────────────────────────────────────────

  private checkAchievement(id: string) {
    if (this.achievements.includes(id)) return
    this.achievements.push(id)
    SFX.achievement()
    const names: Record<string, string> = {
      first_break: 'First Break!',
      first_place: 'Builder!',
      first_kill: 'Monster Hunter!',
      blood_moon: 'Blood Moon Survivor!',
    }
    this.toast(`🏆 ${names[id] || id}`)
  }

  // ─────────────────────────────────────────────────────────
  // WATER FLOW SIMULATION
  // ─────────────────────────────────────────────────────────

  private updateWaterFlow(dt: number) {
    this.waterFlowTimer += dt
    if (this.waterFlowTimer < 0.5) return // Run every 0.5s for performance
    this.waterFlowTimer = 0

    const px = Math.floor(this.pos.x)
    const pz = Math.floor(this.pos.z)
    const py = Math.floor(this.pos.y)
    const range = 16
    let flowsThisTick = 0
    const maxFlowsPerTick = 8

    for (let dx = -range; dx <= range && flowsThisTick < maxFlowsPerTick; dx++) {
      for (let dz = -range; dz <= range && flowsThisTick < maxFlowsPerTick; dz++) {
        for (let dy = -8; dy <= 8 && flowsThisTick < maxFlowsPerTick; dy++) {
          const wx = px + dx
          const wy = py + dy
          const wz = pz + dz
          const block = this.world.getBlock(wx, wy, wz)
          if (block !== BLOCK.WATER) continue

          // Flow downward first
          const below = this.world.getBlock(wx, wy - 1, wz)
          if (below === BLOCK.AIR) {
            this.world.setBlock(wx, wy - 1, wz, BLOCK.WATER)
            flowsThisTick++
            continue
          }

          // Flow horizontally to air blocks (simple spread)
          const dirs: [number,number][] = [[1,0],[-1,0],[0,1],[0,-1]]
          for (const [ddx, ddz] of dirs) {
            if (flowsThisTick >= maxFlowsPerTick) break
            const nx = wx + ddx
            const nz = wz + ddz
            const neighbor = this.world.getBlock(nx, wy, nz)
            const neighborBelow = this.world.getBlock(nx, wy - 1, nz)
            // Only flow to air that has ground below, or flow down
            if (neighbor === BLOCK.AIR) {
              if (neighborBelow !== BLOCK.AIR) {
                this.world.setBlock(nx, wy, nz, BLOCK.WATER)
                flowsThisTick++
              } else {
                // Flow down instead
                this.world.setBlock(nx, wy - 1, nz, BLOCK.WATER)
                flowsThisTick++
              }
            }
          }
        }
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  // STEAM / MIST PARTICLES
  // ─────────────────────────────────────────────────────────

  private updateSteam(dt: number) {
    this.steamTimer += dt
    if (this.steamTimer < 0.3) return
    this.steamTimer = 0

    const px = Math.floor(this.pos.x)
    const pz = Math.floor(this.pos.z)
    const py = Math.floor(this.pos.y)
    const range = 10

    for (let dx = -range; dx <= range; dx++) {
      for (let dz = -range; dz <= range; dz++) {
        for (let dy = -5; dy <= 5; dy++) {
          const wx = px + dx
          const wy = py + dy
          const wz = pz + dz

          // Steam: water directly above magma
          if (this.world.getBlock(wx, wy, wz) === BLOCK.WATER) {
            const below = this.world.getBlock(wx, wy - 1, wz)
            if (below === BLOCK.MAGMA && Math.random() < 0.15) {
              // Spawn steam particle
              if (this.particles.length < MAX_PARTICLES) {
                this.particles.push({
                  position: new THREE.Vector3(wx + 0.5, wy + 0.5, wz + 0.5),
                  velocity: new THREE.Vector3((Math.random() - 0.5) * 0.5, 1.5 + Math.random() * 2, (Math.random() - 0.5) * 0.5),
                  age: 0,
                  maxAge: 1.5 + Math.random() * 1.5,
                  color: new THREE.Color(0.9, 0.92, 0.95),
                })
              }
            }
          }

          // Water surface mist in cold biomes
          if (this.world.getBlock(wx, wy, wz) === BLOCK.WATER && this.world.getBlock(wx, wy + 1, wz) === BLOCK.AIR) {
            const biome = this.world.gen.getBiome(wx, wz)
            if ((biome === 2 || biome === 4) && Math.random() < 0.03) {
              if (this.particles.length < MAX_PARTICLES) {
                this.particles.push({
                  position: new THREE.Vector3(wx + Math.random(), wy + 1.0, wz + Math.random()),
                  velocity: new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.3 + Math.random() * 0.5, (Math.random() - 0.5) * 0.3),
                  age: 0,
                  maxAge: 2 + Math.random() * 2,
                  color: new THREE.Color(0.85, 0.88, 0.92),
                })
              }
            }
          }
        }
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────

  private getGroundY(pos: THREE.Vector3): number {
    const x = Math.floor(pos.x), z = Math.floor(pos.z)
    for (let y = CHUNK_SIZE_Y - 1; y >= 0; y--) {
      if (this.world.isSolid(x, y, z)) return y + 1
    }
    return 0
  }

  private toast(msg: string) {
    this.message = msg
    this.msgTimer = 3
    if (this.toastCb) this.toastCb(msg)
  }

  // ─────────────────────────────────────────────────────────
  // STATS EMISSION
  // ─────────────────────────────────────────────────────────

  private emitStats() {
    if (!this.statsCb) return
    // Message timer
    if (this.msgTimer > 0) {
      this.msgTimer -= 0.016
      if (this.msgTimer <= 0) this.message = null
    }
    const biome = this.world.gen.getBiome(Math.floor(this.pos.x), Math.floor(this.pos.z))
    this.statsCb({
      health: Math.ceil(this.health),
      maxHealth: this.maxHealth,
      hunger: Math.ceil(this.hunger),
      maxHunger: this.maxHunger,
      stamina: Math.ceil(this.stamina),
      maxStamina: this.maxStamina,
      thirst: Math.ceil(this.thirst),
      maxThirst: this.maxThirst,
      time: this.dayTime,
      dayCount: this.dayCount,
      biome: BIOME_NAMES[biome] || 'Unknown',
      fps: this.fps,
      selectedSlot: this.selectedSlot,
      inventory: [...this.inventory],
      craftGrid: [...this.craftGrid],
      craftGridSize: this.craftGridSize,
      craftResult: this.craftResult,
      inventoryOpen: this.inventoryOpen,
      position: { x: Math.floor(this.pos.x), y: Math.floor(this.pos.y), z: Math.floor(this.pos.z) },
      paused: this.paused,
      dead: this.dead,
      message: this.message,
      enemiesNear: this.enemies.filter(e => e.position.distanceTo(this.pos) < 20).length,
      weather: this.weather,
      isBloodMoon: this.isBloodMoon,
      achievements: [...this.achievements],
    })
  }
}
