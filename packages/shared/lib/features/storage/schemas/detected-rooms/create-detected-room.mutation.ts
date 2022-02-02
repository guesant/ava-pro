import { IExtensionStorageMutation } from "../../interfaces"
import { IDetectedRoom } from "./detected-room"
import { IDetectedRoomResponse } from "./detected-room/response"

export const createDetectedRoom: IExtensionStorageMutation<
  Omit<IDetectedRoom, "response"> & Partial<Pick<IDetectedRoom, "response">>
> = (state, { url, name, response }) => {
  const detectedRoom: IDetectedRoom = {
    url,
    name,
    response: response ?? IDetectedRoomResponse.NONE
  }

  state.detectedRooms.push(detectedRoom)

  return detectedRoom
}
