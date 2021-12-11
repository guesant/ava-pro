import { IDetectedRoom } from "../../Interfaces/IDetectedRoom"
import { IExtensionStorageSlicer } from "../../Interfaces/IExtensionStorageSlicer"

export const getDetectedRoomByUrl: (
  url: IDetectedRoom["url"]
) => IExtensionStorageSlicer<IDetectedRoom | undefined> = (url) => (state) => {
  return state.detectedRooms.find((detectedRoom) =>
    url.startsWith(detectedRoom.url)
  )
}

export const listDetectedRooms: IExtensionStorageSlicer<IDetectedRoom[]> = (
  state
) => state.detectedRooms
