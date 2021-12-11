import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import browser from "webextension-polyfill"

export const notifyUnreadRoomMessages = async (
  unreadChatsCount: number,
  unreadMessagesCount: number,
  roomName: IRoom["name"]
) => {
  await browser.notifications.create({
    type: "basic",
    title: `Você possui novas mensagens não lidas no ambiente "${roomName}"`,
    message: `${unreadMessagesCount} mensagem(s) de ${unreadChatsCount} chat(s).`,
    iconUrl: browser.runtime.getURL("icons/icon.png")
  })
}
