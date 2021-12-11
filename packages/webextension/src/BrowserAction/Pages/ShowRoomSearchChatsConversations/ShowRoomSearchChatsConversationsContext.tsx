import { FC } from "react"
import { createContext } from "use-context-selector"
import { useRoomConversationsQuery } from "../../Hooks/useRoomConversationsQuery"

type IShowRoomSearchChatsConversationsContext = {
  conversationsQuery: ReturnType<
    typeof useRoomConversationsQuery
  >["conversationsQuery"]
}

export const ShowRoomSearchChatsConversationsContext = createContext(
  {} as IShowRoomSearchChatsConversationsContext
)

export const ShowRoomSearchChatsConversationsContextProvider: FC = ({
  children
}) => {
  const { conversationsQuery } = useRoomConversationsQuery()

  return (
    <ShowRoomSearchChatsConversationsContext.Provider
      value={{ conversationsQuery }}
    >
      {children}
    </ShowRoomSearchChatsConversationsContext.Provider>
  )
}
