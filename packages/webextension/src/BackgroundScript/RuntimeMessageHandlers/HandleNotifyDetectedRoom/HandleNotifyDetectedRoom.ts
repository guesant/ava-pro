import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import { IDetectedRoom } from "@ava-pro/shared/lib/Interfaces/IDetectedRoom"
import browser from "webextension-polyfill"

export const handleNotifyDetectedRoom = async ({ name }: IDetectedRoom) => {
  await browser.notifications.create({
    type: "basic",
    title: getMessage("notification_newDetectedRoom_title"),
    message: getMessage("notification_newDetectedRoom_description", name),
    iconUrl: browser.runtime.getURL("icons/icon.png")
  })
}
