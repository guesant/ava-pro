import { applyStorageMutation } from "../../../apply-storage-mutation"
import { updateDetectedRoom } from "../update-detected-room.mutation"
import { IDetectedRoom } from "./interfaces"
import { IDetectedRoomResponse } from "./response"

export const rejectDetectedRoomAction = ({ url }: IDetectedRoom) =>
  applyStorageMutation(updateDetectedRoom, {
    url,
    recipe: (detectedRoom) => {
      detectedRoom.response = IDetectedRoomResponse.REJECTED
    }
  })
