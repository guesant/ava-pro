import { FC } from "react"
import { createContext } from "use-context-selector"
import { useRoomConversationsQuery } from "../../Hooks/useRoomConversationsQuery"

type IShowRoomSearchChatsConversationsContext = {
  conversationsQuery: ReturnType<
    typeof useRoomConversationsQuery
  >["conversationsQuery"]
}

export const ShowRoomSearchMessagingConversationsContext = createContext(
  {} as IShowRoomSearchChatsConversationsContext
)

export const ShowRoomSearchChatsConversationsContextProvider: FC = ({
  children
}) => {
  const { conversationsQuery } = useRoomConversationsQuery()

  return (
    <ShowRoomSearchMessagingConversationsContext.Provider
      value={{ conversationsQuery }}
    >
      {children}
    </ShowRoomSearchMessagingConversationsContext.Provider>
  )
}
