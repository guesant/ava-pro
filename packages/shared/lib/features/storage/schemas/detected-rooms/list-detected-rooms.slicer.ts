import { IExtensionStorageSlicer } from "../../interfaces"
import { IDetectedRoom } from "./detected-room"

export const listDetectedRooms: IExtensionStorageSlicer<IDetectedRoom[]> = (
  state
) => state.detectedRooms
