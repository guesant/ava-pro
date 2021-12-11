import { IDetectedRoom } from "../../Interfaces/IDetectedRoom"
import { IDetectedRoomResponse } from "../../Interfaces/IDetectedRoomResponse"
import { IExtensionStorageMutation } from "../../Interfaces/IExtensionStorageMutation"

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

export const updateDetectedRoom: IExtensionStorageMutation<{
  url: IDetectedRoom["url"]
  recipe: (detectedRoom: IDetectedRoom) => void
}> = (state, { url, recipe }) => {
  const detectedRoom = state.detectedRooms.find((i) => i.url === url)

  if (detectedRoom) {
    recipe(detectedRoom)
  }
}

export const removeDetectedRoom: IExtensionStorageMutation<
  IDetectedRoom["url"]
> = (state, url) => {
  state.detectedRooms = state.detectedRooms.filter((i) => i.url !== url)
}
