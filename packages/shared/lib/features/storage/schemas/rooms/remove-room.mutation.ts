import { IExtensionStorageMutation } from "../../interfaces"
import { IRoom } from "./room"

export const removeRoom: IExtensionStorageMutation<IRoom["id"]> = (
  state,
  id
) => {
  state.rooms = state.rooms.filter((i) => i.id !== id)
}
