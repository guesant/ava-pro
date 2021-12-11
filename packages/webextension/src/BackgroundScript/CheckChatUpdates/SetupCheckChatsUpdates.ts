import { handleCheckChatsUpdates } from "./HandleCheckChatsUpdates"

const interval = 3 * 60 * 1000

let intervalId: any | null = null

const setupCheckChatsUpdatesInterval = (interval: number) => {
  intervalId !== null && clearInterval(intervalId)

  intervalId = setInterval(() => {
    handleCheckChatsUpdates().catch(() => {})
  }, interval)

  handleCheckChatsUpdates().catch(() => {})
}

export const setupCheckChatsUpdates = () => {
  setupCheckChatsUpdatesInterval(interval)
}
