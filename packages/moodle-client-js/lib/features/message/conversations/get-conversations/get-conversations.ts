import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import { IGetConversationsRequest } from "./IGetConversationsRequest"
import { IGetConversationsResponse } from "./IGetConversationsResponse"

export const getConversations = async (
  client: MoodleClient,
  payload: IGetConversationsRequest
) => {
  const { conversations } = await ajax<IGetConversationsResponse>(
    client,
    "core_message_get_conversations",
    {
      type: null,
      ...payload
    }
  )
  return conversations
}
