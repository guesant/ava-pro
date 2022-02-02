import { IExtensionStorageMutation } from "../../interfaces"
import { IDetectedRoom } from "./detected-room"

export const removeDetectedRoom: IExtensionStorageMutation<
  IDetectedRoom["url"]
> = (state, url) => {
  state.detectedRooms = state.detectedRooms.filter((i) => i.url !== url)
}
