import { IDetectedRoom } from "../../../Interfaces/IDetectedRoom"
import { IDetectedRoomResponse } from "../../../Interfaces/IDetectedRoomResponse"
import { applyStorageMutation } from "../../applyStorageMutation"
import { getSlicedStorageData } from "../../getSlicedStorageData"
import { updateDetectedRoom } from "../../Mutations/StorageDetectedRoomMutations"
import { addRoom } from "../../Mutations/StorageRoomsMutations"
import { listRooms } from "../../Slicers/StorageRoomSlicers"

export const acceptDetectedRoom = async ({ url, name }: IDetectedRoom) => {
  await applyStorageMutation(updateDetectedRoom, {
    url,
    recipe: (detectedRoom) => {
      detectedRoom.response = IDetectedRoomResponse.ACCEPTED
    }
  })

  const rooms = await getSlicedStorageData(listRooms)

  const isDetectedRoomAlreadyRegistered =
    rooms.find((i) => i.url === url) !== undefined

  if (!isDetectedRoomAlreadyRegistered) {
    await applyStorageMutation(addRoom, { url, name })
  }
}
