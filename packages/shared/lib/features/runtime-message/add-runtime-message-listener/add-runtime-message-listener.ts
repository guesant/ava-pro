import browser from "webextension-polyfill"
import { IRuntimeMessageType } from "../interfaces"

export const addRuntimeMessageListener = <Payload>(
  type: IRuntimeMessageType,
  callback: (payload: Payload) => void
) => {
  const handleRuntimeMessage = (message: any) => {
    if (message?.type === type) {
      callback(message.payload)
    }
  }
  browser.runtime.onMessage.addListener(handleRuntimeMessage)
}
