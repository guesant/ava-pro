import { array, defaulted } from "superstruct"
import { DetectedRoomStruct } from "./detected-room/detected-room.struct"

export const DetectedRoomsStruct = defaulted(
  array(DetectedRoomStruct),
  () => []
)
