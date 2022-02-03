import { IExtensionStorageSlicer } from "../../../../interfaces"
import { IPaletteMode } from "./IPaletteMode"

export const getPaletteMode: IExtensionStorageSlicer<IPaletteMode> = (state) =>
  state.settings.palette.mode
