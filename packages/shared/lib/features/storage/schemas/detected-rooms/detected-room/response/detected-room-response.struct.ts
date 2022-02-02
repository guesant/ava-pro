import { defaulted, enums } from "superstruct"
import { IDetectedRoomResponse } from "./interfaces"

export const DetectedRoomResponseStruct = defaulted(
  enums(Object.values(IDetectedRoomResponse as any) as number[]),
  IDetectedRoomResponse.NONE
)
