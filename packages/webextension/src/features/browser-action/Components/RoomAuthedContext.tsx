import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { updateRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { FC, useCallback, useEffect, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomContext } from "./RoomContext"

type IRoomAuthedContext = {
  isLoggedIn: boolean
  userId: null | number
}

export const RoomAuthedContext = createContext({} as IRoomAuthedContext)

const handleUpdateRoom = makeStorageMutator(updateRoom)

const useRoomSmartLogin = () => {
  const handleRoomUpdateAutoLogin = useCallback(
    (id: IRoom["id"], autoLogin: boolean) =>
      handleUpdateRoom({
        id,
        recipe: (room) => {
          room.credentials.autoLogin = autoLogin
        }
      }),
    []
  )

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const id = useContextSelector(RoomContext, ({ room: { id } }) => id)

  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const { username, password, autoLogin } = useContextSelector(
    RoomContext,
    ({ room: { credentials } }) => credentials
  )

  const handleAutoLogin = useCallback(async () => {
    await moodleClient.checkLogin()

    if (!moodleClient.isAuthed && autoLogin && username && password) {
      await moodleClient.login(username, password, { skipLogout: true })

      if (!moodleClient.isAuthed) {
        await handleRoomUpdateAutoLogin(id, false)
      }
    }

    setIsLoggedIn(moodleClient.isAuthed)
  }, [username, password, autoLogin, handleRoomUpdateAutoLogin, moodleClient])

  useEffect(() => void handleAutoLogin(), [handleAutoLogin])

  return { isLoggedIn }
}

export const RoomAuthedContextProvider: FC = ({ children }) => {
  const { isLoggedIn } = useRoomSmartLogin()

  const [userId, setUserId] = useState<number | null>(null)

  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const handleFetchTokens = useCallback(async () => {
    setUserId(await moodleClient.userId)
  }, [moodleClient, isLoggedIn])

  useEffect(() => void handleFetchTokens(), [handleFetchTokens])

  return (
    <RoomAuthedContext.Provider value={{ isLoggedIn, userId }}>
      {children}
    </RoomAuthedContext.Provider>
  )
}
