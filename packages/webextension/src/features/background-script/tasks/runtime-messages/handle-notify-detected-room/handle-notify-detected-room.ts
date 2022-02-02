import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { IDetectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room"
import browser from "webextension-polyfill"

export type IHandleNotifyDetectedRoomPayload = Pick<IDetectedRoom, "name">

export const handleNotifyDetectedRoom = async ({
  name
}: IHandleNotifyDetectedRoomPayload) => {
  await browser.notifications.create({
    type: "basic",
    title: getMessage("notification_newDetectedRoom_title"),
    message: getMessage("notification_newDetectedRoom_description", name),
    iconUrl: browser.runtime.getURL("icons/icon.png")
  })
}
