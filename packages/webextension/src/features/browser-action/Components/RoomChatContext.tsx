import { FC } from "react"
import { createContext } from "use-context-selector"
import { IRoomConversation, useRoomConversation } from "./useRoomConversation"

type IRoomChatContextProviderProps = {
  conversationId: number
}

type IRoomChatContext = {
  conversationId: number
} & IRoomConversation

export const RoomChatContext = createContext({} as IRoomChatContext)

export const RoomChatContextProvider: FC<IRoomChatContextProviderProps> = ({
  children,
  conversationId
}) => {
  const { chatQuery, infoQuery } = useRoomConversation(+conversationId)

  return (
    <RoomChatContext.Provider
      value={{ conversationId: +conversationId, chatQuery, infoQuery }}
    >
      {children}
    </RoomChatContext.Provider>
  )
}
