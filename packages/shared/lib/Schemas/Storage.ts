import { array, defaulted, nullable, number, string, type } from "superstruct"
import { DetectedRoom } from "./DetectedRoom"
import { Room } from "./Room"
import { Settings } from "./Settings"
import { STORAGE_VERSION } from "./STORAGE_VERSION"

export const Storage = type({
  rooms: defaulted(array(Room), () => []),

  detectedRooms: defaulted(array(DetectedRoom), () => []),

  lastMigration: defaulted(nullable(number()), () => null),

  settings: Settings,

  version: defaulted(string(), () => STORAGE_VERSION)
})
