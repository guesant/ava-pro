import browser from "webextension-polyfill"
import { IRuntimeMessageType } from "../Interfaces/IRuntimeMessageType"

export const addRuntimeMessageListener = <Payload>(
  type: IRuntimeMessageType,
  callback: (payload: Payload) => void
) => {
  const handleRuntimeMessage = (message: any) => {
    console.log("oshe°°°°????", message)
    if (message?.type === type) {
      callback(message.payload)
    }
  }
  browser.runtime.onMessage.addListener(handleRuntimeMessage)
}
