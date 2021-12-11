import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { makeCrawlerFetch } from "@ava-pro/shared/lib/makeCrawlerFetch"
import { FC, useMemo } from "react"
import { createContext } from "use-context-selector"

type IRoomContext = {
  room: IRoom
  crawlerFetch: ICrawlerFetch
}

export const RoomContext = createContext({} as IRoomContext)

export const RoomContextProvider: FC<{ room: IRoom }> = ({
  room,
  children
}) => {
  const crawlerFetch = useMemo(() => makeCrawlerFetch(room.url), [room.url])
  return (
    <RoomContext.Provider value={{ room, crawlerFetch }}>
      {children}
    </RoomContext.Provider>
  )
}
