import browser from "webextension-polyfill"
import { ICentralStorageListener } from "./Interfaces/ICentralStorageListener"
import { IStorage } from "./Interfaces/IStorage"
import { getStorageData } from "./Storage/getStorageData"

export let data: Promise<IStorage> = getStorageData()

const listeners = new Set<ICentralStorageListener>()

export const addListener = (callback: ICentralStorageListener) =>
  void listeners.add(callback)

export const removeListener = (callback: ICentralStorageListener) =>
  void listeners.delete(callback)

const callListeners = () => {
  for (const callback of listeners) {
    callback()
  }
}

const handleStorageChange = (changes?: any, area?: string) => {
  if (area === "local") {
    data = getStorageData()
    callListeners()
  }
}

const setup = () => {
  browser.storage.onChanged.addListener(handleStorageChange)
}

setup()
