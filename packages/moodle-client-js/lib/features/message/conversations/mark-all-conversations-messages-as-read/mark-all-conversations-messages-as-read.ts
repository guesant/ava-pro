import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import { IMarkAllConversationsMessagesAsReadRequest } from "./interfaces"

export * from "./interfaces"

export const markAllConversationsMessagesAsRead = async (
  client: MoodleClient,
  payload: IMarkAllConversationsMessagesAsReadRequest
) =>
  ajax<null>(client, "core_message_mark_all_conversation_messages_as_read", {
    ...payload,
    userid: payload.userid ?? (await client.userId)
  })
