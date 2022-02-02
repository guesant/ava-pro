import browser from "webextension-polyfill"
import { IRuntimeMessageType } from "../interfaces"

export const sendRuntimeMessage = async <T extends any>(
  type: IRuntimeMessageType,
  payload: T
) => {
  await browser.runtime.sendMessage({ type, payload })
}
