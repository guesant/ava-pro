import { IMayBePromise } from "../../../../interfaces/may-be-promise"
import { MoodleClient } from "../../../../MoodleClient"
import { getConversations } from "../get-conversations"

export const getConversation = async (
  client: MoodleClient,
  conversationId: number,
  incomingUserId: IMayBePromise<number>
) => {
  const conversations = await getConversations(client, {
    userid: await incomingUserId
  })
  return conversations.find(
    (conversation) => conversationId === +conversation.id
  )
}
