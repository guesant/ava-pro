import { nanoid } from "nanoid"
import normalizeUrl from "normalize-url"
import { IExtensionStorageMutation } from "../../interfaces"
import { IRoom } from "./room"

export const addRoom: IExtensionStorageMutation<Pick<IRoom, "url" | "name">> = (
  state,
  { url, name }
) => {
  const normalizedUrl = normalizeUrl(url, {
    removeSingleSlash: true,
    removeTrailingSlash: true,
    stripHash: true
  })

  const room: Partial<IRoom> = {
    name,
    id: nanoid(),
    url: normalizedUrl
  }

  state.rooms.push(room as IRoom)

  return room
}
