import browser from "webextension-polyfill"
import { IRuntimeMessageType } from "../Interfaces/IRuntimeMessageType"

export const sendRuntimeMessage = async <T extends any>(
  type: IRuntimeMessageType,
  payload: T
) => {
  await browser.runtime.sendMessage({ type, payload })
}
