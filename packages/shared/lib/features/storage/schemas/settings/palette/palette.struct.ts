import { defaulted, object } from "superstruct"
import { PaletteModeStruct } from "./mode"

export const PaletteStruct = defaulted(
  object({
    mode: PaletteModeStruct
  }),
  () => ({})
)
