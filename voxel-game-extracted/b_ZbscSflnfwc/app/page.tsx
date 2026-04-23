import { VoxelGame } from "@/components/voxel-game"

export default function Page() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-neutral-950">
      <VoxelGame />
    </main>
  )
}
