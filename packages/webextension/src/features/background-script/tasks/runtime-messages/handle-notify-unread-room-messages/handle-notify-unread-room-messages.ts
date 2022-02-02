import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import browser from "webextension-polyfill"

export type IHandleNotifyUnreadRoomMessagesPayload = {
  unreadConversationsCount: number
  unreadMessagesCount: number
  roomName: IRoom["name"]
}

export const handleNotifyUnreadRoomMessages = async ({
  roomName,
  unreadMessagesCount,
  unreadConversationsCount
}: IHandleNotifyUnreadRoomMessagesPayload) => {
  await browser.notifications.create({
    type: "basic",
    title: getMessage("notification_unreadRoomMessages_title", [roomName]),
    message: getMessage("notification_unreadRoomMessages_description", [
      unreadMessagesCount,
      unreadConversationsCount
    ]),
    iconUrl: browser.runtime.getURL("icons/icon.png")
  })
}
