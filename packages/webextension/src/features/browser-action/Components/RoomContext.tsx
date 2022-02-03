import { MoodleClient } from "@ava-pro/moodle-client-js"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { FC, useMemo } from "react"
import { createContext } from "use-context-selector"

type IRoomContext = {
  room: IRoom

  moodleClient: MoodleClient
}

export const RoomContext = createContext({} as IRoomContext)

export const RoomContextProvider: FC<{ room: IRoom }> = ({
  room,
  children
}) => {
  const moodleClient = useMemo(() => new MoodleClient(room.url), [room.url])

  return (
    <RoomContext.Provider value={{ room, moodleClient }}>
      {children}
    </RoomContext.Provider>
  )
}
