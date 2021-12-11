import { Conversations } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/DataForMessageArea/Conversations"
import { CheckLogin } from "@ava-pro/crawlers/lib/Scrappers/CheckLogin/CheckLogin"
import { ExtractTokensUserId } from "@ava-pro/crawlers/lib/Scrappers/ExtractTokens/ExtractTokens"
import { Login } from "@ava-pro/crawlers/lib/Scrappers/Login/Login"
import { data } from "@ava-pro/shared/lib/centralStorage"
import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { makeCrawlerFetch } from "@ava-pro/shared/lib/makeCrawlerFetch"
import { notifyUnreadRoomMessages } from "./NotifyUnreadRoomMessages"

const prevChatData = new Map<IRoom["id"], number>()

export const handleCheckChatsUpdates = async () => {
  const { rooms } = await data

  for (const {
    id,
    url,
    name,
    credentials: { username, password, autoLogin }
  } of rooms) {
    const crawlerFetch = makeCrawlerFetch(url)

    let isLoggedIn = await CheckLogin(crawlerFetch)()

    if (!isLoggedIn && autoLogin) {
      isLoggedIn = await Login(crawlerFetch)(username, password, true)
    }

    if (isLoggedIn) {
      const userId = await ExtractTokensUserId(crawlerFetch)()

      if (userId !== null) {
        const { contacts } = await Conversations(crawlerFetch)({
          userid: userId
        })

        const unreadChats = contacts.filter((i) => (i.unreadcount ?? 0) > 0)

        const unreadChatsCount = unreadChats.length

        const unreadMessagesCount = unreadChats.reduce(
          (acc, i) => acc + (i.unreadcount ?? 0),
          0
        )

        const prevUnreadMessagesCount = prevChatData.get(id) ?? 0

        if (unreadMessagesCount !== prevUnreadMessagesCount) {
          await notifyUnreadRoomMessages(
            unreadChatsCount,
            unreadMessagesCount,
            name
          )
        }

        prevChatData.set(id, unreadMessagesCount)
      }
    }
  }
}
