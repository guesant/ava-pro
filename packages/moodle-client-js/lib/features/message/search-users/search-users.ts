import { MoodleClient } from "../../../MoodleClient"
import { ajax } from "../../ajax/ajax"
import { ISearchUsersRequest } from "./ISearchUsersRequest"
import { ISearchUsersResponse } from "./ISearchUsersResponse"

export const searchUsers = (
  client: MoodleClient,
  payload: ISearchUsersRequest
) =>
  ajax<ISearchUsersResponse>(
    client,
    "core_message_message_search_users",
    payload
  )

export { ISearchUsersRequest, ISearchUsersResponse }
