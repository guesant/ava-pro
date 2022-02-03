import { features } from "@ava-pro/moodle-client-js"
import { FC } from "react"
import { UseQueryResult } from "react-query"
import { createContext } from "use-context-selector"
import { useRoomConversationsQuery } from "./useRoomConversationsQuery"

type IRoomChatsContext = {
  conversationsQuery: UseQueryResult<
    features.message.IGetConversationsConversationDto[]
  >
}

export const RoomConversationsContext = createContext({} as IRoomChatsContext)

export const RoomConversationsContextProvider: FC = ({ children }) => {
  const { conversationsQuery } = useRoomConversationsQuery()

  return (
    <RoomConversationsContext.Provider value={{ conversationsQuery }}>
      {children}
    </RoomConversationsContext.Provider>
  )
}
