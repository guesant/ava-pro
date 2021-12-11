import { array, defaulted, nullable, number, type } from "superstruct"
import { DetectedRoom } from "./DetectedRoom"
import { Room } from "./Room"
import { Settings } from "./Settings"

export const Storage = type({
  rooms: defaulted(array(Room), () => []),
  detectedRooms: defaulted(array(DetectedRoom), () => []),
  lastMigration: defaulted(nullable(number()), () => null),
  settings: Settings
})
