import { IDetectedRoom } from "../../../Interfaces/IDetectedRoom"
import { IDetectedRoomResponse } from "../../../Interfaces/IDetectedRoomResponse"
import { applyStorageMutation } from "../../applyStorageMutation"
import { updateDetectedRoom } from "../../Mutations/StorageDetectedRoomMutations"

export const rejectDetectedRoom = ({ url }: IDetectedRoom) =>
  applyStorageMutation(updateDetectedRoom, {
    url,
    recipe: (detectedRoom) => {
      detectedRoom.response = IDetectedRoomResponse.REJECTED
    }
  })
