import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax"
import {
  ISendMessagesToConversationRequest,
  ISendMessagesToConversationResponse
} from "./interfaces"

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
