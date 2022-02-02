import { IExtensionStorageSlicer } from "../../interfaces"
import { IRoom } from "./room"

export const listRoomsOmitCache: IExtensionStorageSlicer<
  Omit<IRoom, "cache">[]
> = (state) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  return state.rooms.map(({ cache: _, ...room }) => room)
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
