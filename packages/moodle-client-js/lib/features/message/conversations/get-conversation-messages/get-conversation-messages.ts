import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import {
  IGetConversationMessagesRequest,
  IGetConversationMessagesResponse
} from "./interfaces"

export * from "./interfaces"

export const getConversationMessages = async (
  client: MoodleClient,
  payload: IGetConversationMessagesRequest
) =>
  ajax<IGetConversationMessagesResponse>(
    client,
    "core_message_get_conversation_messages",
    {
      ...payload,
      currentuserid: payload.currentuserid ?? (await client.userId)
    }
  )
