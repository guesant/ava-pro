import { IExtensionStorageMutation } from "../../interfaces"
import { IDetectedRoom } from "./detected-room"

export const updateDetectedRoom: IExtensionStorageMutation<{
  url: IDetectedRoom["url"]
  recipe: (detectedRoom: IDetectedRoom) => void
}> = (state, { url, recipe }) => {
  const detectedRoom = state.detectedRooms.find((i) => i.url === url)

  if (detectedRoom) {
    recipe(detectedRoom)
  }
}
