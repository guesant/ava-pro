import { MoodleClient } from "@ava-pro/moodle-client-js"
import { data } from "@ava-pro/shared/lib/features/central-storage"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { handleNotifyUnreadRoomMessages } from "../../runtime-messages"

const prevChatData = new Map<IRoom["id"], number>()

export const handleCheckConversationsUpdates = async () => {
  const { rooms } = await data

  for (const {
    id,
    url,
    name,
    credentials: { username, password, autoLogin }
  } of rooms) {
    const moodleClient = new MoodleClient(url)

    await moodleClient.checkLogin()

    if (!moodleClient.isAuthed && autoLogin) {
      await moodleClient.login(username, password, { skipLogout: true })
    }

    if (moodleClient.isAuthed) {
      const userId = await moodleClient.userId

      if (userId !== null) {
        const conversations = await moodleClient.getConversations({
          userid: userId
        })

        const unreadConversations = conversations.filter(
          (i) => (i.unreadcount ?? 0) > 0
        )

        const unreadConversationsCount = unreadConversations.length

        const unreadMessagesCount = unreadConversations.reduce(
          (acc, i) => acc + (i.unreadcount ?? 0),
          0
        )

        const prevUnreadMessagesCount = prevChatData.get(id) ?? 0

        if (unreadMessagesCount > prevUnreadMessagesCount) {
          await handleNotifyUnreadRoomMessages({
            unreadConversationsCount,
            unreadMessagesCount,
            roomName: name
          })
        }

        prevChatData.set(id, unreadMessagesCount)
      }
    }
  }
}
