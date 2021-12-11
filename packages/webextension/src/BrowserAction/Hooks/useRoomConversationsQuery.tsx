import { Conversations } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/DataForMessageArea/Conversations"
import { useQuery } from "react-query"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../Components/RoomAuthedContext"
import { RoomContext } from "../Components/RoomContext"

export const useRoomConversationsQuery = () => {
  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const conversationsQuery = useQuery(
    [userId, "conversations", crawlerFetch],
    async () => {
      if (userId !== null) {
        const { contacts } = await Conversations(crawlerFetch)({
          userid: userId
        })
        return contacts
      }
      return []
    }
  )

  return { conversationsQuery }
}
