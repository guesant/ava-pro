import {
  getPaletteMode,
  togglePaletteMode
} from "@ava-pro/shared/lib/features/storage/schemas/settings/palette/mode"
import {
  makeStorageMutator,
  useExtensionStorageSlicer
} from "@ava-pro/shared/lib/features/storage"
import { IPaletteMode } from "@ava-pro/shared/lib/features/storage/schemas/settings/palette/mode/IPaletteMode"

const togglePaletteModeMutator = makeStorageMutator(togglePaletteMode)

export const usePaletteMode = () => {
  const { value: paletteMode } = useExtensionStorageSlicer(
    getPaletteMode,
    IPaletteMode.DARK
  )
  return { paletteMode, togglePaletteMode: togglePaletteModeMutator }
}
