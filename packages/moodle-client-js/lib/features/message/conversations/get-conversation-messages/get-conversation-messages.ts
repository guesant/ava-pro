import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import { IGetConversationMessagesRequest } from "./IGetConversationMessagesRequest"
import { IGetConversationMessagesResponse } from "./IGetConversationMessagesResponse"

export const getConversationMessages = (
  client: MoodleClient,
  payload: IGetConversationMessagesRequest
) =>
  ajax<IGetConversationMessagesResponse>(
    client,
    "core_message_get_conversation_messages",
    payload
  )

export { IGetConversationMessagesRequest, IGetConversationMessagesResponse }
