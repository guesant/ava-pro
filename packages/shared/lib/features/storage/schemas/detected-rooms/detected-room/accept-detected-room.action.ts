import { getStorageDataSliced } from "../../../get-storage-data-sliced/get-storage-data-sliced"
import { applyStorageMutation } from "../../../index"
import { addRoom } from "../../rooms/add-room.mutation"
import { listRooms } from "../../rooms/list-rooms.slicer"
import { updateDetectedRoom } from "../update-detected-room.mutation"
import { IDetectedRoom } from "./index"
import { IDetectedRoomResponse } from "./response"

export const acceptDetectedRoomAction = async ({
  url,
  name
}: IDetectedRoom) => {
  await applyStorageMutation(updateDetectedRoom, {
    url,
    recipe: (detectedRoom) => {
      detectedRoom.response = IDetectedRoomResponse.ACCEPTED
    }
  })

  const rooms = await getStorageDataSliced(listRooms)

  const isDetectedRoomAlreadyRegistered =
    rooms.find((i) => i.url === url) !== undefined

  if (!isDetectedRoomAlreadyRegistered) {
    await applyStorageMutation(addRoom, { url, name })
  }
}
