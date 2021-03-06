import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage"
import { getRoomById } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { FC, useMemo } from "react"
import { useParams } from "react-router-dom"
import { createContext } from "use-context-selector"

type IShowRoomContext = {
  room: IRoom | null
  isLoading: boolean
}

export const ShowRoomContext = createContext({} as IShowRoomContext)

export const ShowRoomContextProvider: FC = ({ children }) => {
  const { id = "" } = useParams<"id">()

  const getRoomSlicer = useMemo(() => getRoomById(id), [id])

  const { value: room, isLoading } = useExtensionStorageSlicer<null | IRoom>(
    getRoomSlicer,
    null
  )

  return (
    <ShowRoomContext.Provider value={{ isLoading, room }}>
      {children}
    </ShowRoomContext.Provider>
  )
}
