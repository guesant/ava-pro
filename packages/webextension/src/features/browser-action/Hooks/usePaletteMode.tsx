import {
  makeStorageMutator,
  useExtensionStorageSlicer
} from "@ava-pro/shared/lib/features/storage"
import { IExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage/interfaces/IExtensionStorageSlicer"
import { IPaletteMode } from "@ava-pro/shared/lib/features/storage/schemas/settings/palette/mode/IPaletteMode"

const getPaletteModeSlicer: IExtensionStorageSlicer<IPaletteMode> = (state) =>
  state.settings.palette.mode

const togglePaletteMode = makeStorageMutator((state) => {
  state.settings.palette.mode =
    state.settings.palette.mode === IPaletteMode.DARK
      ? IPaletteMode.LIGHT
      : IPaletteMode.DARK
})

export const usePaletteMode = () => {
  const { value: paletteMode } = useExtensionStorageSlicer(
    getPaletteModeSlicer,
    IPaletteMode.DARK
  )
  return { paletteMode, togglePaletteMode }
}
