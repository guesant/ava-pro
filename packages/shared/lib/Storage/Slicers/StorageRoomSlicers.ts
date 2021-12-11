import { IExtensionStorageSlicer } from "../../Interfaces/IExtensionStorageSlicer"
import { IRoom } from "../../Interfaces/IRoom"

export const getRoomById: (
  id: IRoom["id"]
) => IExtensionStorageSlicer<IRoom | null> = (id) => (state) =>
  state.rooms.find((i) => i.id === id) || null

export const hasRoom: (id: IRoom["id"]) => IExtensionStorageSlicer<any> =
  (id) => (state) =>
    state.rooms.findIndex((i) => i.id === id) > -1

export const listRooms: IExtensionStorageSlicer<IRoom[]> = (state) =>
  state.rooms

export const listRoomsOmitCache: IExtensionStorageSlicer<
  Omit<IRoom, "cache">[]
> = (state) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  return state.rooms.map(({ cache: _, ...room }) => room)
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
