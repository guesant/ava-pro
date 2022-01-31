import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import { ISendMessagesToConversationRequest } from "./ISendMessagesToConversationRequest"
import { ISendMessagesToConversationResponse } from "./ISendMessagesToConversationResponse"

export const sendMessagesToConversation = (
  client: MoodleClient,
  payload: ISendMessagesToConversationRequest
) =>
  ajax<ISendMessagesToConversationResponse>(
    client,
    "core_message_send_messages_to_conversation",
    {
      ...payload
    }
  )
