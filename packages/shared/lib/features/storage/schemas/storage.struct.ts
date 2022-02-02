import { defaulted, type } from "superstruct"
import { DetectedRoomsStruct } from "./detected-rooms"
import { LastMigrationStruct } from "./last-migration"
import { RoomsStruct } from "./rooms"
import { SettingsStruct } from "./settings"
import { VersionStruct } from "./version"

export const StorageStruct = defaulted(
  type({
    rooms: RoomsStruct,

    version: VersionStruct,

    settings: SettingsStruct,

    detectedRooms: DetectedRoomsStruct,

    lastMigration: LastMigrationStruct
  }),
  () => ({})
)
