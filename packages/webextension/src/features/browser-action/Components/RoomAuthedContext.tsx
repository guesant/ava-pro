import { FC, useCallback, useEffect, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomContext } from "./RoomContext"
import { useRoomSmartLogin } from "./useRoomSmartLogin"

type IRoomAuthedContext = {
  isLoggedIn: boolean
  userId: null | number
}

export const RoomAuthedContext = createContext({} as IRoomAuthedContext)

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
