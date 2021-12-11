import { defaulted, enums } from "superstruct"
import { IDetectedRoomResponse } from "../Interfaces/IDetectedRoomResponse"

export const DetectedRoomResponse = defaulted(
  enums(Object.values(IDetectedRoomResponse as any) as number[]),
  IDetectedRoomResponse.NONE
)
