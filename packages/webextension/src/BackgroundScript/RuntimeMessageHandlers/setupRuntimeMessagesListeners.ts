import { IRuntimeMessageType } from "@ava-pro/shared/lib/Interfaces/IRuntimeMessageType"
import { addRuntimeMessageListener } from "@ava-pro/shared/lib/RuntimeMessage/addRuntimeMessageListener"
import { handleNotifyDetectedRoom } from "./HandleNotifyDetectedRoom/HandleNotifyDetectedRoom"

export const setupRuntimeMessagesListeners = () => {
  addRuntimeMessageListener(
    IRuntimeMessageType.NOTIFY_DETECTED_ROOM,
    handleNotifyDetectedRoom
  )
}
