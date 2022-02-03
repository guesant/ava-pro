import { IExtensionStorageMutation } from "../../../../interfaces"
import { IPaletteMode } from "./IPaletteMode"

export const togglePaletteMode: IExtensionStorageMutation = (state) => {
  state.settings.palette.mode =
    state.settings.palette.mode === IPaletteMode.DARK
      ? IPaletteMode.LIGHT
      : IPaletteMode.DARK
}
