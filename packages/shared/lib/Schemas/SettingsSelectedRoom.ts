import { defaulted, nullable } from "superstruct"
import { Room } from "./Room"

export const SettingsSelectedRoom = defaulted(
  nullable(Room.schema.id),
  () => null
)
