import { IExtensionStorageSlicer } from "../../interfaces"
import { IDetectedRoom } from "./detected-room"

export const getDetectedRoomByUrl: (
  url: IDetectedRoom["url"]
) => IExtensionStorageSlicer<IDetectedRoom | undefined> = (url) => (state) => {
  return state.detectedRooms.find((detectedRoom) =>
    url.startsWith(detectedRoom.url)
  )
}
