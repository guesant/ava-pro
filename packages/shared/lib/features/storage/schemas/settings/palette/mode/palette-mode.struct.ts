import { defaulted, enums } from "superstruct"
import { IPaletteMode } from "./IPaletteMode"

export const PaletteModeStruct = defaulted(
  enums([IPaletteMode.DARK, IPaletteMode.LIGHT]),
  () => IPaletteMode.LIGHT
)
