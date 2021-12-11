import { CheckLogin } from "@ava-pro/crawlers/lib/Scrappers/CheckLogin/CheckLogin"
import { ExtractTokens } from "@ava-pro/crawlers/lib/Scrappers/ExtractTokens/ExtractTokens"
import { Login } from "@ava-pro/crawlers/lib/Scrappers/Login/Login"
import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { updateRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import { FC, useCallback, useEffect, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomContext } from "./RoomContext"

type IRoomAuthedContext = {
  isLoggedIn: boolean
  userId: number | null
  sessKey: string | null
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

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const { username, password, autoLogin } = useContextSelector(
    RoomContext,
    ({ room: { credentials } }) => credentials
  )

  const handleAutoLogin = useCallback(async () => {
    let isLoggedIn = await CheckLogin(crawlerFetch)()

    if (!isLoggedIn && autoLogin && username && password) {
      isLoggedIn = await Login(crawlerFetch)(username, password, true)

      if (!isLoggedIn) {
        await handleRoomUpdateAutoLogin(id, false)
      }
    }

    setIsLoggedIn(isLoggedIn)
  }, [username, password, autoLogin, crawlerFetch, handleRoomUpdateAutoLogin])

  useEffect(() => void handleAutoLogin(), [handleAutoLogin])

  return { isLoggedIn }
}

export const RoomAuthedContextProvider: FC = ({ children }) => {
  const { isLoggedIn } = useRoomSmartLogin()

  const [userId, setUserId] = useState<number | null>(null)
  const [sessKey, setSessKey] = useState<string | null>(null)

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const handleFetchTokens = useCallback(async () => {
    const { userId, sessKey } = await ExtractTokens(crawlerFetch)()
    setUserId(userId)
    setSessKey(sessKey)
  }, [crawlerFetch, isLoggedIn])

  useEffect(() => {
    void handleFetchTokens()
  }, [handleFetchTokens])

  return (
    <RoomAuthedContext.Provider value={{ isLoggedIn, userId, sessKey }}>
      {children}
    </RoomAuthedContext.Provider>
  )
}
