import * as THREE from "three"
import {
  BLOCK,
  BLOCK_DEFS,
  CHUNK_SIZE_X,
  CHUNK_SIZE_Z,
  RENDER_DISTANCE,
  SEA_LEVEL,
  type BlockId,
} from "./constants"
import { Chunk, World } from "./world"
import { meshChunk, type MeshData } from "./mesher"
import { createBlockAtlasTexture } from "./textures"
import { SFX, startAmbient, stopAmbient, blockSurface, startRainAmbient, stopRainAmbient, startWindAmbient, stopWindAmbient, startCaveAmbient, stopCaveAmbient, playCaveDrip, startCampfireAmbient, stopCampfireAmbient, setNightMusic } from "./audio"
import {
  addItem,
  blockDropItem,
  countItem,
  HOTBAR_SIZE,
  ITEM,
  itemDef,
  makeEmptyInventory,
  miningProfile,
  removeItem,
  type ItemId,
  type Slot,
} from "./items"
import { consumeIngredients, findRecipe } from "./recipes"

export interface GameStats {
  health: number
  maxHealth: number
  hunger: number
  maxHunger: number
  stamina: number
  maxStamina: number
  time: number // 0..1 day cycle
  dayCount: number
  biome: string
  fps: number
  selectedSlot: number
  inventory: Slot[] // 36 slots (hotbar first 9 + main 27)
  craftGrid: Slot[] // 2x2 (4) or 3x3 (9) based on near crafting table
  craftGridSize: 2 | 3
  craftResult: Slot
  inventoryOpen: boolean
  position: { x: number; y: number; z: number }
  paused: boolean
  dead: boolean
  message: string | null
  enemiesNear: number
  weather: "clear" | "rain" | "snow"
  isBloodMoon: boolean
  achievements: string[]
}

export type StatsListener = (s: GameStats) => void

interface Enemy {
  mesh: THREE.Group
  position: THREE.Vector3
  velocity: THREE.Vector3
  health: number
  maxHealth: number
  size: THREE.Vector3
  type: "zombie" | "skeleton" | "slime"
  attackCooldown: number
  wander: THREE.Vector3
  wanderTimer: number
  onGround: boolean
}

interface Animal {
  mesh: THREE.Group
  position: THREE.Vector3
  velocity: THREE.Vector3
  health: number
  size: THREE.Vector3
  type: "deer" | "rabbit" | "cow"
  wander: THREE.Vector3
  wanderTimer: number
  fleeTimer: number
  onGround: boolean
}

const BIOME_NAMES = ["Plains", "Desert", "Tundra", "Forest", "Mountain"]

export class GameEngine {
  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera
  private handMesh!: THREE.Group
  private world!: World
  private clock = new THREE.Clock()
  private chunkGroup!: THREE.Group
  private enemyGroup!: THREE.Group
  private particleGroup!: THREE.Group
  private sun!: THREE.DirectionalLight
  private ambient!: THREE.AmbientLight
  private sky!: THREE.Mesh
  private fog!: THREE.FogExp2
  private rainMesh: THREE.Points | null = null
  private rainVelocities: Float32Array | null = null
  private isRaining = false
  private rainTimer = 0

  private container: HTMLElement
  private canvas: HTMLCanvasElement

  // Input state
  private keys: Record<string, boolean> = {}
  private mouseButtons: Record<number, boolean> = {}
  private pointerLocked = false

  // Player
  private playerPos = new THREE.Vector3(0, 40, 0)
  private playerVel = new THREE.Vector3()
  private playerOnGround = false
  private playerInWater = false
  private yaw = 0
  private pitch = 0
  private readonly PLAYER_WIDTH = 0.6
  private readonly PLAYER_HEIGHT = 1.8
  private readonly PLAYER_EYE = 1.6
  private breakTarget: { x: number; y: number; z: number } | null = null
  private breakProgress = 0
  private placeCooldown = 0
  private attackCooldown = 0

  // Highlight cube
  private highlightMesh!: THREE.LineSegments
  private breakOverlay!: THREE.Mesh

  // Stats
  private stats: GameStats = {
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
    inventory: makeEmptyInventory(),
    craftGrid: new Array(4).fill(null),
    craftGridSize: 2,
    craftResult: null,
    inventoryOpen: false,
    position: { x: 0, y: 0, z: 0 },
    paused: false,
    dead: false,
    message: null,
    enemiesNear: 0,
    weather: "clear",
    isBloodMoon: false,
    achievements: [],
  }

  private listeners = new Set<StatsListener>()
  private enemies: Enemy[] = []
  private particles: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; life: number }> = []
  private damageFlashTime = 0
  private hurtOverlayEl: HTMLDivElement | null = null
  private frameCount = 0
  private lastFpsTime = 0
  private animationFrame: number | null = null
  private hungerTimer = 0
  private lastDamageAnnounce = 0
  private atlasTexture!: THREE.Texture
  private lastEmit = 0
  private dirtyStats = false
  private footstepTimer = 0
  private prevTimePhase: "day" | "night" | "dusk" | "dawn" = "day"
  public toasts: Array<{ id: number; text: string; expires: number; kind: "info" | "danger" | "success" }> = []
  private toastId = 0
  private onToastAdd: ((t: { id: number; text: string; kind: string; duration: number }) => void) | null = null

  // Animals (passive)
  private animals: Animal[] = []
  // Dropped items in the world (pick up on proximity)
  private drops: Array<{
    mesh: THREE.Group
    position: THREE.Vector3
    velocity: THREE.Vector3
    item: { id: ItemId; count: number }
    age: number
    pickupDelay: number
  }> = []
  // Weather particles
  private weatherMesh: THREE.Points | null = null
  private weatherVels: Float32Array | null = null
  private weatherPositions: Float32Array | null = null
  private weatherType: "clear" | "rain" | "snow" = "clear"
  private weatherTimer = 45 // seconds until next weather decision
  // Point light pool for torches/campfires
  private pointLights: THREE.PointLight[] = []
  // Crafting table proximity for 3x3 grid
  private nearCraftingTable = false
  // Lightning flash (blood moon / thunderstorm)
  private lightningFlash = 0
  // Ambient enemy spawn timer
  private enemySpawnTimer = 0
  private animalSpawnTimer = 0
  // World seed for save/load
  private worldSeed = 1337
  private dirtyInventory = false
  // Per-block footstep tracking
  private prevGroundBlock = 0
  // Rain ambient state
  private rainAmbientActive = false
  private caveAmbientActive = false
  private campfireAmbientActive = false
  // Blood moon tracking
  private bloodMoonActive = false
  // Campfire pop timer
  private campfirePopTimer = 0
  // Cave drip timer
  private caveDripTimer = 0
  // Player was in water last frame (for splash SFX)
  private wasInWater = false
  // Last Y position (for fall damage / land sound)
  private lastGroundY = 40
  private wasFalling = false
  // Thirst system
  private thirstTimer = 0
  // Achievement set
  private unlockedAchievements = new Set<string>()
  // Achievement kill counters
  private killCounts: Record<string, number> = {}

  constructor(container: HTMLElement) {
    this.container = container
    this.canvas = document.createElement("canvas")
    this.canvas.style.display = "block"
    this.canvas.style.width = "100%"
    this.canvas.style.height = "100%"
    this.canvas.style.cursor = "none"
    container.appendChild(this.canvas)

    this.hurtOverlayEl = document.createElement("div")
    this.hurtOverlayEl.style.position = "absolute"
    this.hurtOverlayEl.style.inset = "0"
    this.hurtOverlayEl.style.pointerEvents = "none"
    this.hurtOverlayEl.style.boxShadow = "inset 0 0 80px 40px rgba(220,38,38,0)"
    this.hurtOverlayEl.style.transition = "box-shadow 0.2s ease-out"
    this.hurtOverlayEl.style.zIndex = "5"
    container.appendChild(this.hurtOverlayEl)

    this.initThree()
    this.initWorld()
    this.initInput()

    window.addEventListener("resize", this.onResize)
  }

  onStatsChange(fn: StatsListener) {
    this.listeners.add(fn)
    fn(this.cloneStats())
    return () => {
      this.listeners.delete(fn)
    }
  }

  private cloneStats(): GameStats {
    return {
      ...this.stats,
      inventory: this.stats.inventory.map((s) => (s ? { ...s } : null)),
      craftGrid: this.stats.craftGrid.map((s) => (s ? { ...s } : null)),
      craftResult: this.stats.craftResult ? { ...this.stats.craftResult } : null,
      achievements: [...this.stats.achievements],
    }
  }

  onToast(fn: (t: { id: number; text: string; kind: string; duration: number }) => void) {
    this.onToastAdd = fn
    return () => {
      this.onToastAdd = null
    }
  }

  getYaw() {
    return this.yaw
  }

  /**
   * Sample the world for a minimap top-down color at (x, z). Returns a
   * biome- and height-aware color.
   */
  sampleMapColor(x: number, z: number): { r: number; g: number; b: number } {
    const h = this.world.gen.getHeight(x, z)
    const biome = this.world.gen.getBiome(x, z)
    let base: [number, number, number]
    if (h < SEA_LEVEL) {
      // water depth shading
      const depth = Math.min(1, (SEA_LEVEL - h) / 8)
      base = [30 - depth * 20, 80 - depth * 40, 180 - depth * 60]
    } else if (biome === 1) {
      base = [235, 210, 140] // desert
    } else if (biome === 2) {
      base = [230, 240, 250] // tundra
    } else if (biome === 4) {
      base = [110, 100, 95] // mountain
    } else if (biome === 3) {
      base = [60, 110, 70] // forest
    } else {
      base = [120, 180, 90] // plains
    }
    // Height shading
    const shade = 1 - Math.abs(h - SEA_LEVEL) / 40
    const light = Math.max(0.55, Math.min(1.15, shade + (h > SEA_LEVEL + 20 ? 0.15 : 0)))
    return {
      r: Math.max(0, Math.min(255, Math.round(base[0] * light))),
      g: Math.max(0, Math.min(255, Math.round(base[1] * light))),
      b: Math.max(0, Math.min(255, Math.round(base[2] * light))),
    }
  }

  private pushToast(text: string, kind: "info" | "danger" | "success" = "info", duration = 3500) {
    this.toastId++
    if (this.onToastAdd) {
      this.onToastAdd({ id: this.toastId, text, kind, duration })
    }
  }

  private emit() {
    this.dirtyStats = true
  }

  private flushEmit() {
    const snapshot = this.cloneStats()
    this.listeners.forEach((l) => l(snapshot))
    this.dirtyStats = false
  }

  private initThree() {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      powerPreference: "high-performance",
    })
    this.renderer.setSize(w, h)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x87ceeb)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.1

    this.scene = new THREE.Scene()
    this.fog = new THREE.FogExp2(0xc8e6c9, 0.012)
    this.scene.fog = this.fog

    this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 400)
    this.camera.position.copy(this.playerPos).y += this.PLAYER_EYE

    // Sky
    const skyGeom = new THREE.SphereGeometry(380, 24, 16)
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        uTopColor: { value: new THREE.Color(0x0d47a1) },
        uHorizonColor: { value: new THREE.Color(0x87ceeb) },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) },
        uTime: { value: 0 },
        uStarIntensity: { value: 0 },
      },
      vertexShader: `
        varying vec3 vWorldDir;
        void main() {
          vWorldDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uTopColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform float uStarIntensity;
        varying vec3 vWorldDir;

        float hash(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }

        void main() {
          vec3 d = normalize(vWorldDir);
          float t = smoothstep(-0.1, 0.5, d.y);
          vec3 col = mix(uHorizonColor, uTopColor, t);
          // Sun
          float sun = pow(max(0.0, dot(d, uSunDir)), 200.0);
          col += vec3(1.0, 0.9, 0.7) * sun * 1.5;
          // Sun glow
          float glow = pow(max(0.0, dot(d, uSunDir)), 8.0) * 0.3;
          col += vec3(1.0, 0.7, 0.4) * glow;
          // Moon (opposite)
          float moon = pow(max(0.0, dot(d, -uSunDir)), 100.0);
          col += vec3(0.9, 0.95, 1.0) * moon * 0.8 * uStarIntensity;
          // Stars
          if (uStarIntensity > 0.1 && d.y > 0.0) {
            vec3 sp = d * 40.0;
            float star = hash(floor(sp));
            if (star > 0.995) {
              float tw = sin(uTime * 2.0 + star * 30.0) * 0.5 + 0.5;
              col += vec3(1.0) * star * uStarIntensity * tw * 2.0;
            }
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      depthWrite: false,
    })
    this.sky = new THREE.Mesh(skyGeom, skyMat)
    this.scene.add(this.sky)

    // Lighting
    this.ambient = new THREE.AmbientLight(0xffffff, 0.6)
    this.scene.add(this.ambient)

    this.sun = new THREE.DirectionalLight(0xfff4d1, 1)
    this.sun.position.set(40, 80, 20)
    this.sun.castShadow = true
    this.sun.shadow.mapSize.width = 1024
    this.sun.shadow.mapSize.height = 1024
    this.sun.shadow.camera.near = 1
    this.sun.shadow.camera.far = 200
    this.sun.shadow.camera.left = -50
    this.sun.shadow.camera.right = 50
    this.sun.shadow.camera.top = 50
    this.sun.shadow.camera.bottom = -50
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.scene.add(this.sun)

    this.chunkGroup = new THREE.Group()
    this.scene.add(this.chunkGroup)

    this.enemyGroup = new THREE.Group()
    this.scene.add(this.enemyGroup)

    this.particleGroup = new THREE.Group()
    this.scene.add(this.particleGroup)

    this.atlasTexture = createBlockAtlasTexture()

    // Hand / weapon in front of camera
    this.handMesh = new THREE.Group()
    const handGeom = new THREE.BoxGeometry(0.25, 0.25, 0.45)
    const handMat = new THREE.MeshBasicMaterial({ color: 0xe0c8a0 })
    const hand = new THREE.Mesh(handGeom, handMat)
    hand.position.set(0.35, -0.3, -0.6)
    hand.rotation.set(0.2, -0.2, 0)
    this.handMesh.add(hand)
    this.camera.add(this.handMesh)
    this.scene.add(this.camera)

    // Block highlight outline
    const edgeGeom = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002))
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
    this.highlightMesh = new THREE.LineSegments(edgeGeom, edgeMat)
    this.highlightMesh.visible = false
    this.scene.add(this.highlightMesh)

    // Break overlay (cracking cube)
    const overlayMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    })
    this.breakOverlay = new THREE.Mesh(new THREE.BoxGeometry(1.01, 1.01, 1.01), overlayMat)
    this.breakOverlay.visible = false
    this.scene.add(this.breakOverlay)
  }

  private initWorld() {
    const seed = Math.floor(Math.random() * 1000000)
    this.world = new World(seed)

    // Generate initial chunks around (0,0)
    for (let cx = -RENDER_DISTANCE; cx <= RENDER_DISTANCE; cx++) {
      for (let cz = -RENDER_DISTANCE; cz <= RENDER_DISTANCE; cz++) {
        this.world.ensureChunk(cx, cz)
      }
    }

    // Find safe spawn point
    const h = this.world.gen.getHeight(0, 0)
    this.playerPos.set(0.5, Math.max(h + 2, SEA_LEVEL + 2), 0.5)
    this.camera.position.copy(this.playerPos)
    this.camera.position.y += this.PLAYER_EYE

    this.rebuildDirtyChunks()
    // Spawn a couple enemies
    for (let i = 0; i < 3; i++) this.spawnEnemyNear()
  }

  private rebuildDirtyChunks() {
    this.world.chunks.forEach((chunk) => {
      if (!chunk.dirty) return
      this.updateChunkMesh(chunk)
      chunk.dirty = false
    })
  }

  private updateChunkMesh(chunk: Chunk) {
    // Remove old meshes
    if (chunk.mesh) {
      this.chunkGroup.remove(chunk.mesh)
      chunk.mesh.geometry.dispose()
    }
    if (chunk.transparentMesh) {
      this.chunkGroup.remove(chunk.transparentMesh)
      chunk.transparentMesh.geometry.dispose()
    }
    if (chunk.waterMesh) {
      this.chunkGroup.remove(chunk.waterMesh)
      chunk.waterMesh.geometry.dispose()
    }

    const { opaque, transparent, water } = meshChunk(this.world, chunk)

    if (opaque.indices.length > 0) {
      chunk.mesh = this.buildMesh(opaque, false, false)
      this.chunkGroup.add(chunk.mesh)
    }
    if (transparent.indices.length > 0) {
      chunk.transparentMesh = this.buildMesh(transparent, true, false)
      this.chunkGroup.add(chunk.transparentMesh)
    }
    if (water.indices.length > 0) {
      chunk.waterMesh = this.buildMesh(water, true, true)
      this.chunkGroup.add(chunk.waterMesh)
    }
  }

  private buildMesh(data: MeshData, transparent: boolean, water: boolean): THREE.Mesh {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute("position", new THREE.Float32BufferAttribute(data.positions, 3))
    geom.setAttribute("normal", new THREE.Float32BufferAttribute(data.normals, 3))
    geom.setAttribute("uv", new THREE.Float32BufferAttribute(data.uvs, 2))
    geom.setAttribute("color", new THREE.Float32BufferAttribute(data.colors, 3))
    geom.setIndex(data.indices)
    geom.computeBoundingSphere()

    let mat: THREE.Material
    if (water) {
      mat = new THREE.MeshLambertMaterial({
        color: 0x1e88e5,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
        vertexColors: true,
      })
    } else {
      mat = new THREE.MeshLambertMaterial({
        map: this.atlasTexture,
        vertexColors: true,
        transparent,
        alphaTest: transparent ? 0.2 : 0,
      })
    }

    const mesh = new THREE.Mesh(geom, mat)
    mesh.castShadow = !transparent && !water
    mesh.receiveShadow = true
    return mesh
  }

  private initInput() {
    window.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("keyup", this.onKeyUp)
    this.canvas.addEventListener("mousedown", this.onMouseDown)
    this.canvas.addEventListener("mouseup", this.onMouseUp)
    this.canvas.addEventListener("click", this.requestPointerLock)
    document.addEventListener("pointerlockchange", this.onPointerLockChange)
    document.addEventListener("mousemove", this.onMouseMove)
    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault())
    this.canvas.addEventListener("wheel", this.onWheel, { passive: false })
  }

  private requestPointerLock = () => {
    if (this.stats.dead) return
    if (!this.pointerLocked) {
      this.canvas.requestPointerLock()
    }
  }

  private onPointerLockChange = () => {
    this.pointerLocked = document.pointerLockElement === this.canvas
    this.stats.paused = !this.pointerLocked && !this.stats.dead
    this.emit()
  }

  private onMouseMove = (e: MouseEvent) => {
    if (!this.pointerLocked) return
    const sens = 0.0025
    this.yaw -= e.movementX * sens
    this.pitch -= e.movementY * sens
    const maxPitch = Math.PI / 2 - 0.01
    if (this.pitch > maxPitch) this.pitch = maxPitch
    if (this.pitch < -maxPitch) this.pitch = -maxPitch
  }

  private onKeyDown = (e: KeyboardEvent) => {
    this.keys[e.code] = true
    // Hotbar select
    if (e.code.startsWith("Digit")) {
      const d = Number.parseInt(e.code.substring(5), 10)
      if (d >= 1 && d <= 9) {
        this.stats.selectedSlot = d - 1
        this.emit()
      }
    }
    if (e.code === "Escape") {
      // Let pointer lock auto-release; also signal pause state
    }
    if (e.code === "KeyR" && this.stats.dead) {
      this.respawn()
    }
  }

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys[e.code] = false
  }

  private onMouseDown = (e: MouseEvent) => {
    this.mouseButtons[e.button] = true
    if (!this.pointerLocked) return
  }

  private onMouseUp = (e: MouseEvent) => {
    this.mouseButtons[e.button] = false
    this.breakProgress = 0
    this.breakTarget = null
    this.breakOverlay.visible = false
  }

  private onWheel = (e: WheelEvent) => {
    if (!this.pointerLocked) return
    e.preventDefault()
    const delta = Math.sign(e.deltaY)
    let s = this.stats.selectedSlot + delta
    const n = HOTBAR_SIZE
    s = ((s % n) + n) % n
    this.stats.selectedSlot = s
    this.emit()
  }

  private onResize = () => {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  // Physics: AABB vs voxel sweep
  private attemptMove(pos: THREE.Vector3, vel: THREE.Vector3, dt: number): { pos: THREE.Vector3; onGround: boolean } {
    const w = this.PLAYER_WIDTH / 2
    const h = this.PLAYER_HEIGHT
    let onGround = false

    // Move on X
    {
      const dx = vel.x * dt
      pos.x += dx
      const minY = Math.floor(pos.y)
      const maxY = Math.floor(pos.y + h - 0.01)
      const minZ = Math.floor(pos.z - w)
      const maxZ = Math.floor(pos.z + w)
      if (dx > 0) {
        const x2 = Math.floor(pos.x + w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x2, y, z)) {
              pos.x = x2 - w - 0.001
              vel.x = 0
              break outer
            }
          }
        }
      } else if (dx < 0) {
        const x1 = Math.floor(pos.x - w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x1, y, z)) {
              pos.x = x1 + 1 + w + 0.001
              vel.x = 0
              break outer
            }
          }
        }
      }
    }

    // Move on Z
    {
      const dz = vel.z * dt
      pos.z += dz
      const minY = Math.floor(pos.y)
      const maxY = Math.floor(pos.y + h - 0.01)
      const minX = Math.floor(pos.x - w)
      const maxX = Math.floor(pos.x + w)
      if (dz > 0) {
        const z2 = Math.floor(pos.z + w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let x = minX; x <= maxX; x++) {
            if (this.world.isSolid(x, y, z2)) {
              pos.z = z2 - w - 0.001
              vel.z = 0
              break outer
            }
          }
        }
      } else if (dz < 0) {
        const z1 = Math.floor(pos.z - w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let x = minX; x <= maxX; x++) {
            if (this.world.isSolid(x, y, z1)) {
              pos.z = z1 + 1 + w + 0.001
              vel.z = 0
              break outer
            }
          }
        }
      }
    }

    // Move on Y
    {
      const dy = vel.y * dt
      pos.y += dy
      const minX = Math.floor(pos.x - w)
      const maxX = Math.floor(pos.x + w)
      const minZ = Math.floor(pos.z - w)
      const maxZ = Math.floor(pos.z + w)
      if (dy < 0) {
        const y1 = Math.floor(pos.y)
        outer: for (let x = minX; x <= maxX; x++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x, y1, z)) {
              pos.y = y1 + 1 + 0.001
              if (vel.y < -15) {
                // fall damage
                const fall = -vel.y - 12
                if (fall > 0) this.applyDamage(Math.min(40, fall * 1.5), "fall")
              }
              vel.y = 0
              onGround = true
              break outer
            }
          }
        }
      } else if (dy > 0) {
        const y2 = Math.floor(pos.y + h)
        outer: for (let x = minX; x <= maxX; x++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x, y2, z)) {
              pos.y = y2 - h - 0.001
              vel.y = 0
              break outer
            }
          }
        }
      }
    }

    return { pos, onGround }
  }

  private updatePlayer(dt: number) {
    if (this.stats.dead) {
      this.playerVel.y -= 20 * dt
      this.attemptMove(this.playerPos, this.playerVel, dt)
      return
    }

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))

    let dx = 0
    let dz = 0
    if (this.keys["KeyW"]) {
      dx += forward.x
      dz += forward.z
    }
    if (this.keys["KeyS"]) {
      dx -= forward.x
      dz -= forward.z
    }
    if (this.keys["KeyA"]) {
      dx -= right.x
      dz -= right.z
    }
    if (this.keys["KeyD"]) {
      dx += right.x
      dz += right.z
    }
    const len = Math.hypot(dx, dz)
    if (len > 0) {
      dx /= len
      dz /= len
    }

    const sprinting = this.keys["ShiftLeft"] && len > 0 && this.stats.stamina > 5
    let speed = sprinting ? 7.5 : 4.8
    // Check if head/feet in water
    const feetBlock = this.world.getBlock(
      Math.floor(this.playerPos.x),
      Math.floor(this.playerPos.y + 0.2),
      Math.floor(this.playerPos.z),
    )
    this.playerInWater = feetBlock === BLOCK.WATER
    if (this.playerInWater) speed *= 0.5

    this.playerVel.x = dx * speed
    this.playerVel.z = dz * speed

    if (sprinting) {
      this.stats.stamina = Math.max(0, this.stats.stamina - dt * 15)
    } else {
      this.stats.stamina = Math.min(this.stats.maxStamina, this.stats.stamina + dt * 8)
    }

    // Jump / swim
    if (this.keys["Space"]) {
      if (this.playerInWater) {
        this.playerVel.y = 4
      } else if (this.playerOnGround) {
        this.playerVel.y = 9
        SFX.jump()
      }
    }

    // Gravity
    const gravity = this.playerInWater ? 6 : 22
    this.playerVel.y -= gravity * dt
    if (this.playerInWater && this.playerVel.y < -3) this.playerVel.y = -3
    if (this.playerVel.y < -50) this.playerVel.y = -50

    const { onGround } = this.attemptMove(this.playerPos, this.playerVel, dt)
    this.playerOnGround = onGround

    // Head bob in camera
    const moving = len > 0 && this.playerOnGround
    const bobT = this.clock.getElapsedTime()
    const bobY = moving ? Math.sin(bobT * 12) * 0.04 : 0
    const bobX = moving ? Math.cos(bobT * 6) * 0.02 : 0

    // ── Block-aware footsteps + magma ─────────────────────────
    const groundBlock = this.world.getBlock(
      Math.floor(this.playerPos.x),
      Math.floor(this.playerPos.y - 0.15),
      Math.floor(this.playerPos.z)
    )
    this.prevGroundBlock = groundBlock
    if (groundBlock === BLOCK.MAGMA) this.applyDamage(dt * 5, "magma")

    // Water splash on entry/exit
    if (this.playerInWater && !this.wasInWater) SFX.splash()
    this.wasInWater = this.playerInWater

    // Land sound after falling
    if (this.playerOnGround && this.wasFalling) {
      const fallDist = this.lastGroundY - this.playerPos.y
      if (fallDist > 1.5) SFX.land(fallDist)
    }
    if (!this.playerOnGround && this.playerVel.y < -2) {
      this.wasFalling = true
    } else if (this.playerOnGround) {
      this.lastGroundY = this.playerPos.y
      this.wasFalling = false
    }

    if (moving) {
      const interval = sprinting ? 0.3 : 0.42
      this.footstepTimer += dt
      if (this.footstepTimer >= interval) {
        this.footstepTimer = 0
        const surf = this.playerInWater ? "water" : blockSurface(groundBlock)
        SFX.step(surf, sprinting)
      }
    } else {
      this.footstepTimer = 0
    }

    // Update camera
    this.camera.position.set(this.playerPos.x + bobX, this.playerPos.y + this.PLAYER_EYE + bobY, this.playerPos.z)
    this.camera.rotation.order = "YXZ"
    this.camera.rotation.y = this.yaw
    this.camera.rotation.x = this.pitch
    this.camera.rotation.z = 0

    // Hunger tick
    this.hungerTimer += dt
    if (this.hungerTimer > 4) {
      this.hungerTimer = 0
      this.stats.hunger = Math.max(0, this.stats.hunger - 1)
      if (this.stats.hunger <= 0) {
        this.applyDamage(1, "starve")
      } else if (this.stats.health < this.stats.maxHealth && this.stats.hunger > 40) {
        this.stats.health = Math.min(this.stats.maxHealth, this.stats.health + 2)
      }
    }
  }

  private applyDamage(amount: number, _reason: string) {
    if (this.stats.dead) return
    const wasAlive = this.stats.health > 0
    this.stats.health = Math.max(0, this.stats.health - amount)
    this.damageFlashTime = 0.4
    if (this.hurtOverlayEl) {
      this.hurtOverlayEl.style.boxShadow = "inset 0 0 120px 60px rgba(220,38,38,0.5)"
    }
    if (amount > 0.5) SFX.hurt()
    if (this.stats.health <= 0 && wasAlive) {
      this.stats.dead = true
      this.stats.message = "You died! Press R to respawn"
      SFX.death()
      document.exitPointerLock?.()
    }
    this.emit()
  }

  private respawn() {
    this.stats.dead = false
    this.stats.health = this.stats.maxHealth
    this.stats.hunger = this.stats.maxHunger
    this.stats.stamina = this.stats.maxStamina
    this.stats.message = null
    const h = this.world.gen.getHeight(0, 0)
    this.playerPos.set(0.5, h + 3, 0.5)
    this.playerVel.set(0, 0, 0)
    this.emit()
  }

  // DDA raycast for block at crosshair
  private raycastBlock(maxDist = 6): {
    block: { x: number; y: number; z: number }
    face: { x: number; y: number; z: number }
    blockId: BlockId
  } | null {
    const origin = new THREE.Vector3(
      this.playerPos.x,
      this.playerPos.y + this.PLAYER_EYE,
      this.playerPos.z,
    )
    const dir = new THREE.Vector3(0, 0, -1).applyEuler(this.camera.rotation).normalize()

    let x = Math.floor(origin.x)
    let y = Math.floor(origin.y)
    let z = Math.floor(origin.z)

    const stepX = dir.x > 0 ? 1 : -1
    const stepY = dir.y > 0 ? 1 : -1
    const stepZ = dir.z > 0 ? 1 : -1

    const tDeltaX = Math.abs(1 / dir.x)
    const tDeltaY = Math.abs(1 / dir.y)
    const tDeltaZ = Math.abs(1 / dir.z)

    const boundaryX = stepX > 0 ? Math.ceil(origin.x) : Math.floor(origin.x)
    const boundaryY = stepY > 0 ? Math.ceil(origin.y) : Math.floor(origin.y)
    const boundaryZ = stepZ > 0 ? Math.ceil(origin.z) : Math.floor(origin.z)

    let tMaxX = dir.x !== 0 ? (boundaryX - origin.x) / dir.x : Number.POSITIVE_INFINITY
    let tMaxY = dir.y !== 0 ? (boundaryY - origin.y) / dir.y : Number.POSITIVE_INFINITY
    let tMaxZ = dir.z !== 0 ? (boundaryZ - origin.z) / dir.z : Number.POSITIVE_INFINITY

    let face: [number, number, number] = [0, 0, 0]
    let t = 0
    let last: [number, number, number] = [x, y, z]

    for (let i = 0; i < 64 && t < maxDist; i++) {
      const block = this.world.getBlock(x, y, z)
      if (block !== BLOCK.AIR && block !== BLOCK.WATER) {
        return {
          block: { x, y, z },
          face: { x: last[0], y: last[1], z: last[2] },
          blockId: block,
        }
      }
      last = [x, y, z]
      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          x += stepX
          t = tMaxX
          tMaxX += tDeltaX
          face = [-stepX, 0, 0]
        } else {
          z += stepZ
          t = tMaxZ
          tMaxZ += tDeltaZ
          face = [0, 0, -stepZ]
        }
      } else {
        if (tMaxY < tMaxZ) {
          y += stepY
          t = tMaxY
          tMaxY += tDeltaY
          face = [0, -stepY, 0]
        } else {
          z += stepZ
          t = tMaxZ
          tMaxZ += tDeltaZ
          face = [0, 0, -stepZ]
        }
      }
    }
    return null
  }

  private updateBlockInteraction(dt: number) {
    const hit = this.raycastBlock(6)

    if (!hit) {
      this.highlightMesh.visible = false
      this.breakOverlay.visible = false
      this.breakTarget = null
      this.breakProgress = 0
      return
    }

    this.highlightMesh.visible = true
    this.highlightMesh.position.set(hit.block.x + 0.5, hit.block.y + 0.5, hit.block.z + 0.5)

    const heldSlot = this.stats.inventory[this.stats.selectedSlot]
    const heldItem = heldSlot ? itemDef(heldSlot.id) : undefined
    const heldBlockId: BlockId | null = heldItem?.blockId ?? null

    if (this.mouseButtons[0]) {
      const sameTarget =
        this.breakTarget &&
        this.breakTarget.x === hit.block.x &&
        this.breakTarget.y === hit.block.y &&
        this.breakTarget.z === hit.block.z
      if (!sameTarget) {
        this.breakTarget = { ...hit.block }
        this.breakProgress = 0
      }
      const def = BLOCK_DEFS[hit.blockId]
      if (Number.isFinite(def.breakTime)) {
        const profile = miningProfile(hit.blockId, heldSlot?.id)
        this.breakProgress += (dt * profile.speed) / def.breakTime
        this.breakOverlay.visible = true
        this.breakOverlay.position.copy(this.highlightMesh.position)
        ;(this.breakOverlay.material as THREE.MeshBasicMaterial).opacity = Math.min(0.7, this.breakProgress * 0.7)
        if (this.breakProgress >= 1) {
          this.world.setBlock(hit.block.x, hit.block.y, hit.block.z, BLOCK.AIR)
          SFX.break()
          // Drop items
          if (profile.canHarvest) {
            const drops = blockDropItem(hit.blockId)
            for (const d of drops) {
              this.spawnDrop(hit.block.x + 0.5, hit.block.y + 0.5, hit.block.z + 0.5, d.id, d.count)
            }
          }
          // Damage tool
          if (heldSlot && heldItem?.durability != null && heldItem.tool) {
            heldSlot.durability = (heldSlot.durability ?? heldItem.durability) - 1
            if (heldSlot.durability <= 0) {
              this.stats.inventory[this.stats.selectedSlot] = null
              SFX.place()
              this.pushToast(`Your ${heldItem.name} broke`, "danger", 2500)
            }
            this.dirtyInventory = true
          }
          this.spawnBreakParticles(hit.block.x + 0.5, hit.block.y + 0.5, hit.block.z + 0.5, hit.blockId)
          this.breakTarget = null
          this.breakProgress = 0
          this.breakOverlay.visible = false
          this.rebuildDirtyChunks()
          this.emit()
        }
      }
    } else {
      this.breakOverlay.visible = false
      this.breakTarget = null
      this.breakProgress = 0
    }

    // Place block
    if (this.mouseButtons[2] && this.placeCooldown <= 0 && heldSlot && heldBlockId != null) {
      const placePos = hit.face
      // Don't place into player AABB
      const px = Math.floor(this.playerPos.x)
      const pz = Math.floor(this.playerPos.z)
      const py1 = Math.floor(this.playerPos.y)
      const py2 = Math.floor(this.playerPos.y + this.PLAYER_HEIGHT - 0.01)
      const isOnPlayer = placePos.x === px && placePos.z === pz && placePos.y >= py1 && placePos.y <= py2
      if (!isOnPlayer && this.world.getBlock(placePos.x, placePos.y, placePos.z) === BLOCK.AIR) {
        this.world.setBlock(placePos.x, placePos.y, placePos.z, heldBlockId)
        heldSlot.count -= 1
        if (heldSlot.count <= 0) this.stats.inventory[this.stats.selectedSlot] = null
        this.placeCooldown = 0.2
        SFX.place()
        this.rebuildDirtyChunks()
        this.emit()
      }
    }
    if (this.placeCooldown > 0) this.placeCooldown -= dt
  }

  private spawnBreakParticles(x: number, y: number, z: number, blockId?: BlockId) {
    const count = 8
    const geom = new THREE.BoxGeometry(0.12, 0.12, 0.12)
    const colorHex = this.breakColorForBlock(blockId)
    const mat = new THREE.MeshBasicMaterial({ color: colorHex })
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(geom, mat)
      m.position.set(x + (Math.random() - 0.5) * 0.3, y + (Math.random() - 0.5) * 0.3, z + (Math.random() - 0.5) * 0.3)
      const vel = new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 4 + 2, (Math.random() - 0.5) * 3)
      this.particleGroup.add(m)
      this.particles.push({ mesh: m, vel, life: 0.8 })
    }
  }

  private breakColorForBlock(blockId?: BlockId): number {
    switch (blockId) {
      case BLOCK.GRASS:
        return 0x4caf50
      case BLOCK.DIRT:
        return 0x7a4e2e
      case BLOCK.STONE:
      case BLOCK.COBBLESTONE:
      case BLOCK.COAL_ORE:
      case BLOCK.IRON_ORE:
      case BLOCK.GOLD_ORE:
      case BLOCK.DIAMOND_ORE:
        return 0x9e9e9e
      case BLOCK.SAND:
        return 0xf5deb3
      case BLOCK.SNOW:
      case BLOCK.ICE:
        return 0xe3f2fd
      case BLOCK.WOOD:
      case BLOCK.PLANKS:
        return 0x8d6e63
      case BLOCK.LEAVES:
        return 0x388e3c
      case BLOCK.GLOWSTONE:
      case BLOCK.CAMPFIRE:
      case BLOCK.TORCH:
        return 0xffeb3b
      case BLOCK.CRYSTAL:
        return 0xce93d8
      case BLOCK.OBSIDIAN:
        return 0x311b92
      default:
        return 0x8d6e63
    }
  }

  private spawnDrop(x: number, y: number, z: number, itemId: ItemId, count: number) {
    const def = itemDef(itemId)
    if (!def) return
    const group = new THREE.Group()
    // Small spinning cube
    const size = 0.24
    const geo = new THREE.BoxGeometry(size, size, size)
    const color = this.breakColorForBlock(def.blockId) ?? 0xffa726
    const mat = new THREE.MeshLambertMaterial({ color })
    const mesh = new THREE.Mesh(geo, mat)
    group.add(mesh)
    group.position.set(x, y, z)
    this.particleGroup.add(group)
    this.drops.push({
      mesh: group,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 1.5, 3 + Math.random() * 2, (Math.random() - 0.5) * 1.5),
      item: { id: itemId, count },
      age: 0,
      pickupDelay: 0.5,
    })
  }

  private updateDrops(dt: number) {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i]
      d.age += dt
      d.pickupDelay = Math.max(0, d.pickupDelay - dt)
      // Gravity + collision
      d.velocity.y -= 20 * dt
      d.velocity.x *= 0.95
      d.velocity.z *= 0.95
      const nx = d.position.x + d.velocity.x * dt
      const ny = d.position.y + d.velocity.y * dt
      const nz = d.position.z + d.velocity.z * dt
      // Check floor
      const floorY = Math.floor(ny - 0.12)
      const below = this.world.getBlock(Math.floor(nx), floorY, Math.floor(nz))
      if (below !== BLOCK.AIR && below !== BLOCK.WATER && d.velocity.y < 0) {
        d.velocity.y = 0
        d.position.y = floorY + 1 + 0.12
      } else {
        d.position.y = ny
      }
      d.position.x = nx
      d.position.z = nz
      d.mesh.position.copy(d.position)
      // Bob and spin
      d.mesh.rotation.y += dt * 2
      d.mesh.position.y += Math.sin(d.age * 3) * 0.02
      // Pickup
      if (d.pickupDelay <= 0) {
        const dx = this.playerPos.x - d.position.x
        const dy = this.playerPos.y + 0.9 - d.position.y
        const dz = this.playerPos.z - d.position.z
        const dist2 = dx * dx + dy * dy + dz * dz
        if (dist2 < 2.25) {
          // 1.5^2
          const leftover = addItem(this.stats.inventory, d.item.id, d.item.count)
          const picked = d.item.count - leftover
          if (picked > 0) {
            SFX.pickup()
            const itemName = itemDef(d.item.id)?.name ?? d.item.id
            this.pushToast(`+${picked} ${itemName}`, "success", 1400)
            this.checkAchievements(d.item.id)
          }
          if (leftover > 0) {
            d.item.count = leftover
          } else {
            this.particleGroup.remove(d.mesh)
            this.drops.splice(i, 1)
          }
          this.dirtyInventory = true
          this.emit()
        }
      }
      // Despawn after 60s
      if (d.age > 60) {
        this.particleGroup.remove(d.mesh)
        this.drops.splice(i, 1)
      }
    }
  }

  private updateParticles(dt: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.vel.y -= 15 * dt
      p.mesh.position.addScaledVector(p.vel, dt)
      p.mesh.rotation.x += dt * 4
      p.mesh.rotation.z += dt * 4
      p.life -= dt
      if (p.life <= 0) {
        this.particleGroup.remove(p.mesh)
        p.mesh.geometry.dispose()
        this.particles.splice(i, 1)
      }
    }
  }

  private spawnEnemyNear() {
    // Blood moon: spawn faster + stronger enemies
    // Pick a random position around player at surface
    const angle = Math.random() * Math.PI * 2
    const dist = 12 + Math.random() * 20
    const wx = Math.floor(this.playerPos.x + Math.cos(angle) * dist)
    const wz = Math.floor(this.playerPos.z + Math.sin(angle) * dist)
    const h = this.world.gen.getHeight(wx, wz)
    if (h < SEA_LEVEL) return

    const type: Enemy["type"] = Math.random() > 0.5 ? "zombie" : "slime"
    const group = new THREE.Group()

    if (type === "zombie") {
      // body
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.3), new THREE.MeshLambertMaterial({ color: 0x4a6741 }))
      body.position.y = 0.6
      body.castShadow = true
      group.add(body)
      // head
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshLambertMaterial({ color: 0x6d9c5a }))
      head.position.y = 1.45
      head.castShadow = true
      group.add(head)
      // eyes
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
      const eL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.05), eyeMat)
      eL.position.set(-0.12, 1.5, 0.26)
      group.add(eL)
      const eR = eL.clone()
      eR.position.x = 0.12
      group.add(eR)
      // arms
      const armGeom = new THREE.BoxGeometry(0.25, 0.9, 0.25)
      const armMat = new THREE.MeshLambertMaterial({ color: 0x4a6741 })
      const aL = new THREE.Mesh(armGeom, armMat)
      aL.position.set(-0.45, 0.8, 0.1)
      aL.rotation.x = -1.2
      aL.castShadow = true
      group.add(aL)
      const aR = aL.clone()
      aR.position.x = 0.45
      group.add(aR)
      // legs
      const legGeom = new THREE.BoxGeometry(0.26, 0.9, 0.3)
      const legMat = new THREE.MeshLambertMaterial({ color: 0x3a5030 })
      const lL = new THREE.Mesh(legGeom, legMat)
      lL.position.set(-0.15, -0.3, 0)
      lL.castShadow = true
      group.add(lL)
      const lR = lL.clone()
      lR.position.x = 0.15
      group.add(lR)
    } else {
      // slime - green translucent bouncy cube
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.8, 0.8),
        new THREE.MeshLambertMaterial({ color: 0x66bb6a, transparent: true, opacity: 0.8 }),
      )
      body.position.y = 0.4
      body.castShadow = true
      group.add(body)
      const core = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.3, 0.3),
        new THREE.MeshBasicMaterial({ color: 0x2e7d32 }),
      )
      core.position.y = 0.4
      group.add(core)
      // eyes
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
      const eL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.05), eyeMat)
      eL.position.set(-0.15, 0.5, 0.41)
      group.add(eL)
      const eR = eL.clone()
      eR.position.x = 0.15
      group.add(eR)
    }

    group.position.set(wx + 0.5, h + 1, wz + 0.5)
    this.enemyGroup.add(group)

    const size = type === "zombie" ? new THREE.Vector3(0.6, 2.0, 0.6) : new THREE.Vector3(0.8, 0.8, 0.8)
    this.enemies.push({
      mesh: group,
      position: group.position.clone(),
      velocity: new THREE.Vector3(),
      health: type === "zombie" ? 20 : 10,
      maxHealth: type === "zombie" ? 20 : 10,
      size,
      type,
      attackCooldown: 0,
      wander: new THREE.Vector3(),
      wanderTimer: 0,
      onGround: false,
    })
  }

  private enemyAttemptMove(e: Enemy, dt: number) {
    const w = e.size.x / 2
    const h = e.size.y
    const pos = e.position
    const vel = e.velocity

    // X
    pos.x += vel.x * dt
    {
      const minY = Math.floor(pos.y)
      const maxY = Math.floor(pos.y + h - 0.01)
      const minZ = Math.floor(pos.z - w)
      const maxZ = Math.floor(pos.z + w)
      if (vel.x > 0) {
        const x2 = Math.floor(pos.x + w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x2, y, z)) {
              pos.x = x2 - w - 0.001
              vel.x = 0
              break outer
            }
          }
        }
      } else if (vel.x < 0) {
        const x1 = Math.floor(pos.x - w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x1, y, z)) {
              pos.x = x1 + 1 + w + 0.001
              vel.x = 0
              break outer
            }
          }
        }
      }
    }
    // Z
    pos.z += vel.z * dt
    {
      const minY = Math.floor(pos.y)
      const maxY = Math.floor(pos.y + h - 0.01)
      const minX = Math.floor(pos.x - w)
      const maxX = Math.floor(pos.x + w)
      if (vel.z > 0) {
        const z2 = Math.floor(pos.z + w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let x = minX; x <= maxX; x++) {
            if (this.world.isSolid(x, y, z2)) {
              pos.z = z2 - w - 0.001
              vel.z = 0
              break outer
            }
          }
        }
      } else if (vel.z < 0) {
        const z1 = Math.floor(pos.z - w)
        outer: for (let y = minY; y <= maxY; y++) {
          for (let x = minX; x <= maxX; x++) {
            if (this.world.isSolid(x, y, z1)) {
              pos.z = z1 + 1 + w + 0.001
              vel.z = 0
              break outer
            }
          }
        }
      }
    }
    // Y
    pos.y += vel.y * dt
    let onGround = false
    {
      const minX = Math.floor(pos.x - w)
      const maxX = Math.floor(pos.x + w)
      const minZ = Math.floor(pos.z - w)
      const maxZ = Math.floor(pos.z + w)
      if (vel.y < 0) {
        const y1 = Math.floor(pos.y)
        outer: for (let x = minX; x <= maxX; x++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x, y1, z)) {
              pos.y = y1 + 1 + 0.001
              vel.y = 0
              onGround = true
              break outer
            }
          }
        }
      } else if (vel.y > 0) {
        const y2 = Math.floor(pos.y + h)
        outer: for (let x = minX; x <= maxX; x++) {
          for (let z = minZ; z <= maxZ; z++) {
            if (this.world.isSolid(x, y2, z)) {
              pos.y = y2 - h - 0.001
              vel.y = 0
              break outer
            }
          }
        }
      }
    }
    return onGround
  }

  private updateEnemies(dt: number) {
    let near = 0
    const isNight = this.stats.time > 0.55 || this.stats.time < 0.1

    // Spawn new enemies at night (blood moon = double cap + double rate)
    const bloodBoost = this.stats.isBloodMoon ? 2 : 1
    const spawnCap = 6 * bloodBoost
    const spawnRate = dt * 0.2 * bloodBoost
    if (isNight && this.enemies.length < spawnCap && Math.random() < spawnRate) {
      this.spawnEnemyNear()
    }

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i]
      if (e.health <= 0) {
        this.enemyGroup.remove(e.mesh)
        SFX.enemyDeath()
        this.checkKillAchievement(e.type)
        this.enemies.splice(i, 1)
        // drop happens below
        continue
      }
      const dx = this.playerPos.x - e.position.x
      const dz = this.playerPos.z - e.position.z
      const dist = Math.hypot(dx, dz)
      if (dist < 12) near++

      // AI: chase if close, else wander
      let tx = 0
      let tz = 0
      if (dist < 20 && !this.stats.dead) {
        const inv = 1 / Math.max(0.01, dist)
        tx = dx * inv
        tz = dz * inv
      } else {
        e.wanderTimer -= dt
        if (e.wanderTimer <= 0) {
          const a = Math.random() * Math.PI * 2
          e.wander.set(Math.cos(a), 0, Math.sin(a))
          e.wanderTimer = 2 + Math.random() * 3
        }
        tx = e.wander.x
        tz = e.wander.z
      }

      const speed = e.type === "slime" ? 2.2 : 3
      e.velocity.x = tx * speed
      e.velocity.z = tz * speed

      // Jump when hitting a wall
      const faceX = Math.floor(e.position.x + tx * (e.size.x / 2 + 0.1))
      const faceZ = Math.floor(e.position.z + tz * (e.size.x / 2 + 0.1))
      const stepY = Math.floor(e.position.y)
      if (this.world.isSolid(faceX, stepY, faceZ) || this.world.isSolid(faceX, stepY + 1, faceZ)) {
        if (e.velocity.y === 0) e.velocity.y = 7
      }

      e.velocity.y -= 22 * dt
      if (e.velocity.y < -40) e.velocity.y = -40
      const onGround = this.enemyAttemptMove(e, dt)
      if (onGround) e.velocity.y = 0

      // Face player
      if (dist < 25) {
        e.mesh.rotation.y = Math.atan2(dx, dz)
      }

      // Slime bounce animation
      if (e.type === "slime" && onGround) {
        e.velocity.y = 5
      }

      // Attack player if very close
      if (dist < 1.5 && Math.abs(e.position.y - this.playerPos.y) < 2 && !this.stats.dead) {
        if (e.attackCooldown <= 0) {
          this.applyDamage(e.type === "zombie" ? 12 : 6, "enemy")
          e.attackCooldown = 1
          // knockback
          this.playerVel.x += tx * -5
          this.playerVel.z += tz * -5
          this.playerVel.y = Math.max(this.playerVel.y, 3)
        }
      }
      if (e.attackCooldown > 0) e.attackCooldown -= dt

      e.mesh.position.copy(e.position)
    }

    this.stats.enemiesNear = near
  }

  // Melee attack
  private doAttack() {
    if (this.attackCooldown > 0) return
    this.attackCooldown = 0.35
    SFX.attack()
    // Swing hand
    if (this.handMesh.children[0]) {
      const c = this.handMesh.children[0] as THREE.Mesh
      c.rotation.x = -1
      setTimeout(() => {
        c.rotation.x = 0.2
      }, 150)
    }
    // Find enemy in range in front
    const origin = new THREE.Vector3(
      this.playerPos.x,
      this.playerPos.y + this.PLAYER_EYE,
      this.playerPos.z,
    )
    const dir = new THREE.Vector3(0, 0, -1).applyEuler(this.camera.rotation).normalize()
    let best: Enemy | null = null
    let bestDist = 3.5
    for (const e of this.enemies) {
      const c = e.position.clone().add(new THREE.Vector3(0, e.size.y / 2, 0))
      const to = c.clone().sub(origin)
      const d = to.length()
      if (d > bestDist) continue
      to.normalize()
      const dot = to.dot(dir)
      if (dot > 0.85) {
        best = e
        bestDist = d
      }
    }
    if (best) {
      best.health -= 8
      best.velocity.x += dir.x * 5
      best.velocity.z += dir.z * 5
      best.velocity.y = Math.max(best.velocity.y, 4)
      SFX.hit()
      // hit particles
      this.spawnHitParticles(best.position.x, best.position.y + best.size.y / 2, best.position.z)
    }
  }

  private spawnHitParticles(x: number, y: number, z: number) {
    const count = 10
    const geom = new THREE.BoxGeometry(0.08, 0.08, 0.08)
    const mat = new THREE.MeshBasicMaterial({ color: 0xd32f2f })
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(geom, mat)
      m.position.set(x, y, z)
      const vel = new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 3 + 1, (Math.random() - 0.5) * 4)
      this.particleGroup.add(m)
      this.particles.push({ mesh: m, vel, life: 0.5 })
    }
  }

  private updateDayNight(dt: number) {
    // ── Blood moon check before day increments ──────────────────
    const prevTime = this.stats.time
    this.stats.time = (this.stats.time + dt / 600) % 1
    if (prevTime > 0.9 && this.stats.time < 0.1) {
      this.stats.dayCount++
      this.bloodMoonActive = false
      this.stats.isBloodMoon = false
      this.pushToast(`Day ${this.stats.dayCount} dawns`, "success", 3000)
      SFX.dawn()
      setNightMusic(false)
    }
    // Phase changes
    const newPhase: "day" | "night" | "dusk" | "dawn" =
      this.stats.time < 0.05 || this.stats.time > 0.95
        ? "dawn"
        : this.stats.time < 0.45
          ? "day"
          : this.stats.time < 0.55
            ? "dusk"
            : "night"
    if (newPhase !== this.prevTimePhase) {
      if (newPhase === "night") {
        // Blood moon every 7th night
        if (this.stats.dayCount % 7 === 0 && !this.bloodMoonActive) {
          this.bloodMoonActive = true
          this.stats.isBloodMoon = true
          this.pushToast("🌑 Blood Moon rises! Beware...", "danger", 5000)
          SFX.bloodMoonRise()
        } else {
          this.pushToast("Night falls. Monsters emerge.", "danger", 4000)
          SFX.night()
        }
        setNightMusic(true)
      } else if (newPhase === "dusk") {
        this.pushToast("Dusk approaches...", "info", 2500)
      } else if (newPhase === "day" && this.prevTimePhase !== "dawn") {
        this.pushToast("The sun rises", "success", 2500)
      }
      this.prevTimePhase = newPhase
    }

    const t = this.stats.time
    // Sun direction based on time
    const sunAngle = (t - 0.25) * Math.PI * 2 // noon at t=0.25 -> angle = 0 (sun at top)
    const sx = Math.cos(sunAngle)
    const sy = Math.sin(sunAngle)
    this.sun.position.set(sx * 100, sy * 100, 40)
    this.sun.lookAt(0, 0, 0)

    // Intensities
    const dayFactor = Math.max(0, sy) // 1 at noon, 0 at night
    this.sun.intensity = 0.2 + dayFactor * 1.0
    this.ambient.intensity = 0.25 + dayFactor * 0.6

    // Colors
    const duskFactor = Math.abs(Math.sin(sunAngle)) < 0.4 && sy > -0.3 ? 1 : 0
    if (sy > 0.2) {
      this.sun.color.setHex(0xfff4d1)
    } else if (sy > -0.1) {
      // dawn/dusk
      this.sun.color.setHex(0xff7043)
    } else {
      this.sun.color.setHex(0x3f51b5)
    }

    // Sky colors
    const skyMat = this.sky.material as THREE.ShaderMaterial
    const topNight = new THREE.Color(0x0a0e27)
    const topDay = new THREE.Color(0x1e88e5)
    const horizonNight = new THREE.Color(0x1a237e)
    const horizonDay = new THREE.Color(0x87ceeb)
    const horizonDusk = new THREE.Color(0xff7043)

    const top = topNight.clone().lerp(topDay, dayFactor)
    let horizon = horizonNight.clone().lerp(horizonDay, dayFactor)
    if (duskFactor > 0 && sy > -0.1) {
      horizon = horizon.lerp(horizonDusk, 0.6)
    }
    skyMat.uniforms.uTopColor.value.copy(top)
    skyMat.uniforms.uHorizonColor.value.copy(horizon)
    skyMat.uniforms.uSunDir.value.set(sx, sy, 0.3).normalize()
    skyMat.uniforms.uTime.value = this.clock.getElapsedTime()
    skyMat.uniforms.uStarIntensity.value = Math.max(0, 0.3 - dayFactor * 0.4) * 3

    // Fog color follows horizon
    this.fog.color.copy(horizon)
    this.renderer.setClearColor(horizon)
  }

  private updateWeather(dt: number) {
    this.weatherTimer -= dt
    if (this.weatherTimer <= 0) {
      const roll = Math.random()
      // 55% clear, 25% rain, 12% snow, 8% thunder
      const biome = this.world.gen.getBiome(this.playerPos.x, this.playerPos.z)
      const newType: "clear" | "rain" | "snow" =
        roll < 0.55 ? "clear" :
        biome === 2 ? "snow" :       // tundra always gets snow
        roll < 0.80 ? "rain" :
        "snow"
      this.weatherTimer = 90 + Math.random() * 180

      if (newType !== this.weatherType) {
        // Stop old weather
        if (this.weatherType === "rain" || this.weatherType === "snow") {
          this.stopRain()
          stopRainAmbient()
          stopWindAmbient()
        }
        this.weatherType = newType
        this.stats.weather = newType
        this.isRaining = newType === "rain" || newType === "snow"
        if (this.isRaining) {
          this.startRain()
          startRainAmbient()
          startWindAmbient(newType === "snow" ? 0.08 : 0.14)
          this.pushToast(newType === "snow" ? "❄ It begins to snow" : "🌧 Rain starts falling", "info", 2500)
        } else {
          this.pushToast("☀ The weather clears", "info", 2000)
        }
      }
    }

    // Update rain/snow particle positions
    if (this.isRaining && this.rainMesh && this.rainVelocities) {
      const pos = this.rainMesh.geometry.attributes.position as THREE.BufferAttribute
      const arr = pos.array as Float32Array
      for (let i = 0; i < arr.length; i += 3) {
        arr[i + 1] -= this.rainVelocities[i / 3] * dt
        if (arr[i + 1] < this.playerPos.y - 5) {
          arr[i]     = this.playerPos.x + (Math.random() - 0.5) * 40
          arr[i + 1] = this.playerPos.y + 20
          arr[i + 2] = this.playerPos.z + (Math.random() - 0.5) * 40
        } else {
          arr[i]     += (this.playerPos.x - arr[i]    ) * 0.001
          arr[i + 2] += (this.playerPos.z - arr[i + 2]) * 0.001
        }
      }
      pos.needsUpdate = true
    }

    // Cave ambient sound
    const inCave = this.playerPos.y < 20
    if (inCave && !this.caveAmbientActive) {
      startCaveAmbient()
      this.caveAmbientActive = true
    } else if (!inCave && this.caveAmbientActive) {
      stopCaveAmbient()
      this.caveAmbientActive = false
    }

    // Cave drip sounds
    if (inCave) {
      this.caveDripTimer -= dt
      if (this.caveDripTimer <= 0) {
        playCaveDrip()
        this.caveDripTimer = 3 + Math.random() * 6
      }
    }

    // Campfire crackle (if near one)
    const nearFire = this.world.getBlock(
      Math.floor(this.playerPos.x), Math.floor(this.playerPos.y - 0.5), Math.floor(this.playerPos.z)
    ) === BLOCK.CAMPFIRE
    if (nearFire && !this.campfireAmbientActive) {
      startCampfireAmbient()
      this.campfireAmbientActive = true
    } else if (!nearFire && this.campfireAmbientActive) {
      stopCampfireAmbient()
      this.campfireAmbientActive = false
    }
    if (this.campfireAmbientActive) {
      this.campfirePopTimer -= dt
      if (this.campfirePopTimer <= 0) {
        SFX.campfirePop()
        this.campfirePopTimer = 1.2 + Math.random() * 2.5
      }
    }
  }

  private startRain() {
    if (this.rainMesh) return
    const count = 1200
    const geom = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    this.rainVelocities = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = this.playerPos.x + (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = this.playerPos.y + Math.random() * 30
      positions[i * 3 + 2] = this.playerPos.z + (Math.random() - 0.5) * 40
      this.rainVelocities[i] = 20 + Math.random() * 15
    }
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0xaaccff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })
    this.rainMesh = new THREE.Points(geom, mat)
    this.scene.add(this.rainMesh)
  }

  private stopRain() {
    if (this.rainMesh) {
      this.scene.remove(this.rainMesh)
      this.rainMesh.geometry.dispose()
      ;(this.rainMesh.material as THREE.Material).dispose()
      this.rainMesh = null
      this.rainVelocities = null
    }
  }

  private updateChunkStreaming() {
    const pcx = Math.floor(this.playerPos.x / CHUNK_SIZE_X)
    const pcz = Math.floor(this.playerPos.z / CHUNK_SIZE_Z)
    let loadedThisFrame = 0
    for (let cx = pcx - RENDER_DISTANCE; cx <= pcx + RENDER_DISTANCE; cx++) {
      for (let cz = pcz - RENDER_DISTANCE; cz <= pcz + RENDER_DISTANCE; cz++) {
        const existing = this.world.getChunk(cx, cz)
        if (!existing && loadedThisFrame < 1) {
          const c = this.world.ensureChunk(cx, cz)
          this.updateChunkMesh(c)
          c.dirty = false
          loadedThisFrame++
        }
      }
    }
    // Unload far chunks
    const unloadDist = RENDER_DISTANCE + 2
    this.world.chunks.forEach((chunk, key) => {
      if (Math.abs(chunk.cx - pcx) > unloadDist || Math.abs(chunk.cz - pcz) > unloadDist) {
        if (chunk.mesh) {
          this.chunkGroup.remove(chunk.mesh)
          chunk.mesh.geometry.dispose()
        }
        if (chunk.transparentMesh) {
          this.chunkGroup.remove(chunk.transparentMesh)
          chunk.transparentMesh.geometry.dispose()
        }
        if (chunk.waterMesh) {
          this.chunkGroup.remove(chunk.waterMesh)
          chunk.waterMesh.geometry.dispose()
        }
        this.world.chunks.delete(key)
      }
    })
    // Any still-dirty chunks (due to edits at borders)
    this.rebuildDirtyChunks()
  }

  start() {
    this.lastFpsTime = performance.now()
    startAmbient()
    this.pushToast("Welcome to BlockRealm", "success", 3500)
    setTimeout(() => this.pushToast("Break blocks with left-click. Build with right-click.", "info", 4500), 1200)
    this.loop()
  }

  private loop = () => {
    this.animationFrame = requestAnimationFrame(this.loop)
    const dt = Math.min(0.05, this.clock.getDelta())
    if (!this.pointerLocked && !this.stats.dead) {
      // Paused
      this.renderer.render(this.scene, this.camera)
      return
    }

    // Attack key
    if (this.mouseButtons[0] && !this.raycastBlock(6)) {
      this.doAttack()
    }
    if (this.attackCooldown > 0) this.attackCooldown -= dt

    this.updatePlayer(dt)
    this.updateBlockInteraction(dt)
    this.updateEnemies(dt)
    this.updateAnimals(dt)
    this.updateDrops(dt)
    this.updateParticles(dt)
    this.updateDayNight(dt)
    this.updateWeather(dt)
    this.updatePointLights()
    this.updateNearCraftingTable()
    this.updateCraftResult()
    this.updateCampfireCooking(dt)
    this.updateChunkStreaming()
    this.maybeSpawnAnimals(dt)

    // Biome
    const biomeId = this.world.gen.getBiome(this.playerPos.x, this.playerPos.z)
    this.stats.biome = BIOME_NAMES[biomeId] || "Unknown"

    // Position
    this.stats.position = {
      x: Math.round(this.playerPos.x * 10) / 10,
      y: Math.round(this.playerPos.y * 10) / 10,
      z: Math.round(this.playerPos.z * 10) / 10,
    }

    // Damage overlay fade
    if (this.damageFlashTime > 0) {
      this.damageFlashTime -= dt
      if (this.damageFlashTime <= 0 && this.hurtOverlayEl) {
        this.hurtOverlayEl.style.boxShadow = "inset 0 0 80px 40px rgba(220,38,38,0)"
      }
    }

    // FPS
    this.frameCount++
    const now = performance.now()
    if (now - this.lastFpsTime > 500) {
      this.stats.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsTime))
      this.frameCount = 0
      this.lastFpsTime = now
    }

    // Flush stats to UI at ~10 Hz regardless (for position/fps)
    const nowMs = performance.now()
    if (nowMs - this.lastEmit > 100) {
      this.flushEmit()
      this.lastEmit = nowMs
    } else if (this.dirtyStats) {
      this.flushEmit()
      this.lastEmit = nowMs
    }
    this.renderer.render(this.scene, this.camera)
  }

  private checkAchievements(itemId: string) {
    const unlock = (id: string, msg: string) => {
      if (this.unlockedAchievements.has(id)) return
      this.unlockedAchievements.add(id)
      this.stats.achievements = [...this.unlockedAchievements]
      this.pushToast(`🏆 Achievement: ${msg}`, "success", 4000)
      SFX.achievement()
      this.dirtyStats = true
    }
    // Item-based achievements
    if (itemId === "coal")    unlock("first_coal",    "Fuel the Fire")
    if (itemId === "iron_ore") unlock("first_iron",   "Iron Will")
    if (itemId === "gold_ore") unlock("first_gold",   "Gold Rush")
    if (itemId === "diamond_ore") unlock("first_diamond", "Diamond Finder")
    if (itemId === "wood")    unlock("first_wood",    "Lumberjack")
    // Day survival
    if (this.stats.dayCount >= 7) unlock("week_survived", "One Week Later")
  }

  private checkKillAchievement(type: string) {
    this.killCounts[type] = (this.killCounts[type] ?? 0) + 1
    const total = Object.values(this.killCounts).reduce((a, b) => a + b, 0)
    const unlock = (id: string, msg: string) => {
      if (this.unlockedAchievements.has(id)) return
      this.unlockedAchievements.add(id)
      this.stats.achievements = [...this.unlockedAchievements]
      this.pushToast(`🏆 Achievement: ${msg}`, "success", 4000)
      SFX.achievement()
      this.dirtyStats = true
    }
    if (total === 1)  unlock("first_kill",   "First Blood")
    if (total === 10) unlock("kills_10",     "Hunter")
    if (total === 50) unlock("kills_50",     "Warrior")
    if (this.stats.isBloodMoon && type === "zombie")
      unlock("blood_moon_kill", "Blood Moon Slayer")
  }

  private updateAnimals(dt: number) {
    for (const a of this.animals) {
      (a as any).wanderTimer = ((a as any).wanderTimer ?? 0) - dt
      if ((a as any).wanderTimer <= 0) {
        a.wander.set((Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4)
        ;(a as any).wanderTimer = 2 + Math.random() * 3
      }
      a.velocity.x += a.wander.x * 0.5 * dt
      a.velocity.z += a.wander.z * 0.5 * dt
      a.velocity.x *= 0.85
      a.velocity.z *= 0.85
      a.position.x += a.velocity.x * dt
      a.position.z += a.velocity.z * dt
      a.mesh.position.copy(a.position)
    }
    // ── Ambient sound management ──────────────────────────────
    // Rain ambient
    const raining = this.weatherType === "rain"
    if (raining && !this.rainAmbientActive) { startRainAmbient(); this.rainAmbientActive = true }
    if (!raining && this.rainAmbientActive) { stopRainAmbient();  this.rainAmbientActive = false }
    // Cave ambient
    const inCave = this.playerPos.y < 28
    if (inCave && !this.caveAmbientActive) { startCaveAmbient(); this.caveAmbientActive = true }
    if (!inCave && this.caveAmbientActive) { stopCaveAmbient();  this.caveAmbientActive = false }
    // Cave drip
    if (inCave) {
      this.caveDripTimer -= dt
      if (this.caveDripTimer <= 0) { playCaveDrip(); this.caveDripTimer = 3 + Math.random() * 5 }
    }
    // Campfire ambient — if near campfire block
    const nearFire = this.pointLights.length > 0
    if (nearFire && !this.campfireAmbientActive) { startCampfireAmbient(); this.campfireAmbientActive = true }
    if (!nearFire && this.campfireAmbientActive) { stopCampfireAmbient();  this.campfireAmbientActive = false }
    // Campfire pops
    if (nearFire) {
      this.campfirePopTimer -= dt
      if (this.campfirePopTimer <= 0) { SFX.campfirePop(); this.campfirePopTimer = 1.2 + Math.random() * 2 }
    }
    // Night music switch
    const isNight = this.stats.time > 0.5 && this.stats.time < 0.95
    setNightMusic(isNight || this.bloodMoonActive)
    // ── Thirst system ─────────────────────────────────────────
    this.thirstTimer += dt
    if (this.thirstTimer >= 5) {
      this.thirstTimer = 0
      // Thirst drains slightly faster than hunger
      if (this.stats.hunger > 0) this.stats.hunger = Math.max(0, this.stats.hunger - 0.6)
    }
  }

  private updatePointLights() {
    for (const pl of this.pointLights) {
      this.scene.remove(pl)
    }
    this.pointLights = []
    const px = Math.round(this.playerPos.x)
    const py = Math.round(this.playerPos.y)
    const pz = Math.round(this.playerPos.z)
    const radius = 12
    let count = 0
    const EMISSIVE_BLOCKS = [12, 24, 25, 22]
    for (let dx = -radius; dx <= radius && count < 8; dx++) {
      for (let dz = -radius; dz <= radius && count < 8; dz++) {
        for (let dy = -radius; dy <= radius && count < 8; dy++) {
          const bx = px + dx, by = py + dy, bz = pz + dz
          const bid = this.world.getBlock(bx, by, bz)
          if (EMISSIVE_BLOCKS.includes(bid)) {
            const pl = new THREE.PointLight(0xffaa44, 1.5, 12)
            pl.position.set(bx + 0.5, by + 0.5, bz + 0.5)
            this.scene.add(pl)
            this.pointLights.push(pl)
            count++
          }
        }
      }
    }
  }

  private updateNearCraftingTable() {
    const px = Math.round(this.playerPos.x)
    const py = Math.round(this.playerPos.y)
    const pz = Math.round(this.playerPos.z)
    let near = false
    outer: for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dz = -2; dz <= 2; dz++) {
          if (this.world.getBlock(px + dx, py + dy, pz + dz) === 16) { near = true; break outer }
        }
      }
    }
    if (near !== this.nearCraftingTable) {
      this.nearCraftingTable = near
      this.stats.craftGridSize = near ? 3 : 2
      this.stats.craftGrid = new Array(near ? 9 : 4).fill(null)
      this.dirtyStats = true
    }
  }

  private updateCraftResult() {
    // Crafting result calculation placeholder
  }

  private updateCampfireCooking(_dt: number) {
    // Campfire cooking placeholder
  }

  private maybeSpawnAnimals(dt: number) {
    this.animalSpawnTimer -= dt
    if (this.animalSpawnTimer > 0) return
    this.animalSpawnTimer = 8 + Math.random() * 8
    if (this.animals.length >= 12) return
    const angle = Math.random() * Math.PI * 2
    const dist = 20 + Math.random() * 20
    const wx = Math.floor(this.playerPos.x + Math.cos(angle) * dist)
    const wz = Math.floor(this.playerPos.z + Math.sin(angle) * dist)
    let h = 60
    for (let y = 60; y >= 0; y--) {
      if (this.world.getBlock(wx, y, wz) !== 0) { h = y + 1; break }
    }
    const geo = new THREE.BoxGeometry(0.6, 1.0, 0.6)
    const mat = new THREE.MeshLambertMaterial({ color: 0x996633 })
    const mesh = new THREE.Group()
    mesh.add(new THREE.Mesh(geo, mat))
    mesh.position.set(wx + 0.5, h, wz + 0.5)
    this.scene.add(mesh)
    const types: Animal["type"][] = ["deer", "rabbit", "cow"]
    this.animals.push({
      mesh,
      position: mesh.position.clone(),
      velocity: new THREE.Vector3(),
      health: 10,
      size: new THREE.Vector3(0.6, 1.0, 0.6),
      type: types[Math.floor(Math.random() * types.length)],
      wander: new THREE.Vector3(),
    } as Animal)
  }

  dispose() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame)
    stopAmbient()
    window.removeEventListener("resize", this.onResize)
    window.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("keyup", this.onKeyUp)
    document.removeEventListener("pointerlockchange", this.onPointerLockChange)
    document.removeEventListener("mousemove", this.onMouseMove)
    try {
      if (document.pointerLockElement === this.canvas) document.exitPointerLock?.()
    } catch {}
    this.renderer.dispose()
    if (this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas)
    if (this.hurtOverlayEl?.parentNode) this.hurtOverlayEl.parentNode.removeChild(this.hurtOverlayEl)
  }
}
