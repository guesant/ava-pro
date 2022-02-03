import { useQuery, UseQueryResult } from "react-query"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "./RoomAuthedContext"
import { RoomContext } from "./RoomContext"

export type IRoomConversationsQuery = {
  conversationsQuery: UseQueryResult<any | null>
}

export const useRoomConversationsQuery = () => {
  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const conversationsQuery = useQuery(
    [userId, "conversations", moodleClient],
    async () => {
      if (userId !== null) {
        return moodleClient.getConversations({
          userid: userId
        })
      }
      return []
    }
  )

  return { conversationsQuery }
}
