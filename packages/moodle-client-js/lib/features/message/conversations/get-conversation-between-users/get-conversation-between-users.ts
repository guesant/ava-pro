import { MoodleClient } from "../../../../MoodleClient"
import { ajax } from "../../../ajax/ajax"
import { patchConversation } from "../get-conversations"
import {
  IGetConversationBetweenUsersRequest,
  IGetConversationBetweenUsersResponse
} from "./interfaces"

export const getConversationBetweenUsers = async (
  client: MoodleClient,
  payload: IGetConversationBetweenUsersRequest
) => {
  const conversation = await ajax<IGetConversationBetweenUsersResponse>(
    client,
    "core_message_get_conversation_between_users",
    {
      includecontactrequests: true,
      includeprivacyinfo: true,
      memberlimit: 0,
      memberoffset: 0,
      messagelimit: 0,
      messageoffset: 0,
      newestmessagesfirst: true,
      ...payload
    }
  )
  return patchConversation(conversation)
}
