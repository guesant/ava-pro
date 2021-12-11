import { setupCheckChatsUpdates } from "./CheckChatUpdates/SetupCheckChatsUpdates"
import { setupRuntimeMessagesListeners } from "./RuntimeMessageHandlers/setupRuntimeMessagesListeners"

setupRuntimeMessagesListeners()
setupCheckChatsUpdates()
