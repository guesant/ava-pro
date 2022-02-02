import { IExtensionStorageSlicer } from "../../interfaces"
import { IRoom } from "./room"

export const hasRoom: (id: IRoom["id"]) => IExtensionStorageSlicer<any> =
  (id) => (state) =>
    state.rooms.findIndex((i) => i.id === id) > -1
