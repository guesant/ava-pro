import { IMessageAreaContact } from "@ava-pro/crawlers/lib/Typings/IMessageAreaContact"
import { FC } from "react"
import { UseQueryResult } from "react-query"
import { createContext } from "use-context-selector"
import { useRoomConversationsQuery } from "../Hooks/useRoomConversationsQuery"

type IRoomChatsContext = {
  conversationsQuery: UseQueryResult<IMessageAreaContact[]>
}

export const RoomChatsContext = createContext({} as IRoomChatsContext)

export const RoomChatsContextProvider: FC = ({ children }) => {
  const { conversationsQuery } = useRoomConversationsQuery()
  return (
    <RoomChatsContext.Provider value={{ conversationsQuery }}>
      {children}
    </RoomChatsContext.Provider>
  )
}
