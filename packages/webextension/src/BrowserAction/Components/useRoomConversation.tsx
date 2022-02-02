import { features } from "@ava-pro/moodle-client-js"
import { useQuery, UseQueryResult } from "react-query"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "./RoomAuthedContext"
import { RoomContext } from "./RoomContext"

export type IRoomConversation = {
  chatQuery: UseQueryResult<features.message.IGetConversationMessagesResponse | null>
  infoQuery: UseQueryResult<
    features.message.IGetConversationsConversationDto | undefined | null
  >
}

export const useRoomConversation = (
  conversationId: number
): IRoomConversation => {
  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const chatQuery = useQuery(
    [userId, conversationId, moodleClient, "chat"],
    async () => {
      if (userId !== null) {
        const response = await moodleClient.getConversationMessages({
          currentuserid: userId,
          convid: conversationId
        })

        if (response.messages.length > 0) {
          await moodleClient.markAllConversationsMessagesAsRead({
            userid: userId,
            conversationid: conversationId
          })
        }

        return response
      }

      return null
    }
  )

  const infoQuery = useQuery(
    [userId, conversationId, moodleClient, "info"],
    async () => {
      if (userId !== null) {
        return moodleClient.getConversation(conversationId, userId)
      }
      return null
    }
  )

  return { chatQuery, infoQuery }
}
