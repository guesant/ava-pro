import { string, type } from "superstruct"
import { DetectedRoomResponseStruct } from "./response"

export const DetectedRoomStruct = type({
  url: string(),
  name: string(),
  response: DetectedRoomResponseStruct
})
