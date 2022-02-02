import { IExtensionStorageMutation } from "../../interfaces"
import { IRoom } from "../rooms/room"

export const updateSelectedRoom: IExtensionStorageMutation<
  IRoom["id"] | null
> = (state, payload) => {
  state.settings.selectedRoom = payload
}
