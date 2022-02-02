import { IExtensionStorageSlicer } from "../../interfaces"
import { IRoom } from "./room"

export const listRooms: IExtensionStorageSlicer<IRoom[]> = (state) =>
  state.rooms
