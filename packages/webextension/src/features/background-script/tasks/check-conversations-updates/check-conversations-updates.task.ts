import { logger } from "@ava-pro/shared/lib/features"
import { handleCheckConversationsUpdates } from "./handle-check-conversations-updates"

const interval = 3 * 60 * 1000

let intervalId: any | null = null

const setupCheckChatsUpdatesInterval = (interval: number) => {
  intervalId !== null && clearInterval(intervalId)

  intervalId = setInterval(() => {
    handleCheckConversationsUpdates().catch((err) => logger.error(err))
  }, interval)

  handleCheckConversationsUpdates().catch((err) => logger.error(err))
}

const setupCheckChatsUpdates = () => {
  setupCheckChatsUpdatesInterval(interval)
}

export { setupCheckChatsUpdates as setup }
