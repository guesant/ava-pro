import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/Hooks/useExtensionStorageSlicer"
import { IExtensionStorageSlicer } from "@ava-pro/shared/lib/Interfaces/IExtensionStorageSlicer"
import { IPaletteMode } from "@ava-pro/shared/lib/Interfaces/IPaletteMode"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"

const getPaletteModeSlicer: IExtensionStorageSlicer<IPaletteMode> = (state) =>
  state.settings.palette.mode

const togglePaletteMode = makeStorageMutator<void>((state) => {
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
