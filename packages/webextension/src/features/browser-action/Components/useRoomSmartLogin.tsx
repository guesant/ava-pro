import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { updateRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { useCallback, useEffect, useState } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "./RoomContext"
import { useRoomCredentials } from "./useRoomCredentials"

const handleUpdateRoom = makeStorageMutator(updateRoom)

export const handleRoomUpdateAutoLogin = (
  id: IRoom["id"],
  autoLogin: boolean
) =>
  handleUpdateRoom({
    id,
    recipe: (room) => {
      room.credentials.autoLogin = autoLogin
    }
  })

export const useRoomSmartLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const id = useContextSelector(RoomContext, ({ room: { id } }) => id)

  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const credentials = useRoomCredentials()

  const handleLoginRefresh = useCallback(
    async (credentials: ReturnType<typeof useRoomCredentials>) => {
      await moodleClient.checkLogin()

      const { autoLogin, username, password } = credentials

      if (autoLogin) {
        if (username && password) {
          await moodleClient.login(username, password, {
            skipLogout: !moodleClient.isAuthed
          })
        }

        if (!moodleClient.isAuthed) {
          await handleRoomUpdateAutoLogin(id, false)
        }
      }

      setIsLoggedIn(moodleClient.isAuthed)
    },
    [moodleClient]
  )

  const handleAutoLogin = useCallback(async () => {
    await handleLoginRefresh(credentials)
    setIsLoggedIn(moodleClient.isAuthed)
  }, [moodleClient, handleLoginRefresh, credentials])

  useEffect(() => void handleAutoLogin(), [handleAutoLogin])

  return { isLoggedIn }
}
