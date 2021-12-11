import { string, type } from "superstruct"
import { DetectedRoomResponse } from "./DetectedRoomResponse"

export const DetectedRoom = type({
  url: string(),
  name: string(),
  response: DetectedRoomResponse
})
