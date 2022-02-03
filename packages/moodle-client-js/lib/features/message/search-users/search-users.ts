import { MoodleClient } from "../../../MoodleClient"
import { ajax } from "../../ajax/ajax"
import { ISearchUsersRequest, ISearchUsersResponse } from "./interfaces"

export * from "./interfaces"

export const searchUsers = async (
  client: MoodleClient,
  payload: ISearchUsersRequest
) =>
  ajax<ISearchUsersResponse>(client, "core_message_message_search_users", {
    ...payload,
    userid: payload.userid ?? (await client.userId)
  })
