import { MoodleClient } from "../../../MoodleClient"

export const updateTokensCache = async (client: MoodleClient) => {
  client.cachedSessKey = await client.sessKey
  client.cachedUserId = await client.userId
}
