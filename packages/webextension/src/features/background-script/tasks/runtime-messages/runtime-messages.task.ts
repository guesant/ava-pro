import { runtimeMessage } from "@ava-pro/shared/lib/features"
import { IRuntimeMessageType } from "@ava-pro/shared/lib/features/runtime-message"
import { handleNotifyDetectedRoom } from "./handle-notify-detected-room"
import { handleNotifyUnreadRoomMessages } from "./handle-notify-unread-room-messages"

const setupRuntimeMessagesListeners = () => {
  runtimeMessage.addRuntimeMessageListener(
    IRuntimeMessageType.NOTIFY_DETECTED_ROOM,
    handleNotifyDetectedRoom
  )

  runtimeMessage.addRuntimeMessageListener(
    IRuntimeMessageType.NOTIFY_UNREAD_ROOM_MESSAGES,
    handleNotifyUnreadRoomMessages
  )
}

export { setupRuntimeMessagesListeners as setup }
