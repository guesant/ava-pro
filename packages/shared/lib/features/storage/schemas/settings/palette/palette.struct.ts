import { defaulted, object } from "superstruct"
import { PaletteModeStruct } from "./mode/palette-mode.struct"

export const PaletteStruct = defaulted(
  object({
    mode: PaletteModeStruct
  }),
  () => ({})
)
