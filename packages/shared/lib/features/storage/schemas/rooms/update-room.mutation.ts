import { produce } from "immer"
import { IExtensionStorageMutation } from "../../interfaces"
import { IRoom } from "./room"

type IUpdateRoomPayload = {
  id: IRoom["id"]
  recipe: (room: Omit<IRoom, "id">) => void
}

export const updateRoom: IExtensionStorageMutation<IUpdateRoomPayload> = (
  state,
  { id, recipe }
) => {
  state.rooms = state.rooms.map((i) =>
    i.id === id ? { ...produce(i, recipe), id } : i
  )
}
