import { Messages } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/DataForMessageArea/Messages"
import { MarkAllMessagesAsRead } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/MarkAllMessagesAsRead"
import { IMessageArea } from "@ava-pro/crawlers/lib/Typings/IMessageArea"
import { FC } from "react"
import { useQuery, UseQueryResult } from "react-query"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "./RoomAuthedContext"
import { RoomContext } from "./RoomContext"

type IRoomChatContext = {
  contactId: number
  chatQuery: UseQueryResult<IMessageArea | null>
}

export const RoomChatContext = createContext({} as IRoomChatContext)

type IRoomChatContextProviderProps = {
  contactId: number
}

const useRoomChat = (contactId: number) => {
  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const chatQuery = useQuery(
    [userId, "chat", contactId, crawlerFetch],
    async () => {
      if (userId !== null) {
        const response = await Messages(crawlerFetch)({
          currentuserid: userId,
          otheruserid: contactId
        })

        if (response.messages.length > 0) {
          await MarkAllMessagesAsRead(crawlerFetch)({
            useridfrom: contactId,
            useridto: userId
          })
        }

        return response
      }

      return null
    }
  )

  return chatQuery
}

export const RoomChatContextProvider: FC<IRoomChatContextProviderProps> = ({
  children,
  contactId
}) => {
  const chatQuery = useRoomChat(+contactId)

  return (
    <RoomChatContext.Provider value={{ contactId: +contactId, chatQuery }}>
      {children}
    </RoomChatContext.Provider>
  )
}
