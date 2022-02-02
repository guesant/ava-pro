import { IDetectedRoom } from "../detected-rooms/detected-room"
import { IRoom } from "../rooms/room"
import { ISettings } from "../settings"
import { STORAGE_VERSION } from "../version"

export type IStorage = {
  rooms: IRoom[]

  settings: ISettings

  detectedRooms: IDetectedRoom[]

  lastMigration?: null | number

  version: typeof STORAGE_VERSION
}
