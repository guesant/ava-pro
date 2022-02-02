import { IExtensionStorageSlicer } from "../../interfaces"
import { IRoom } from "./room"

export const getRoomById: (
  id: IRoom["id"]
) => IExtensionStorageSlicer<IRoom | null> = (id) => (state) =>
  state.rooms.find((i) => i.id === id) || null
