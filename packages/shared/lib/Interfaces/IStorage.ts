import { IDetectedRoom } from "./IDetectedRoom"
import { IRoom } from "./IRoom"
import { ISettings } from "./ISettings"

export type IStorage = {
  rooms: IRoom[]
  detectedRooms: IDetectedRoom[]
  settings: ISettings
  lastMigration?: null | number
}
