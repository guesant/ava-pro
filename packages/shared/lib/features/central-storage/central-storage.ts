import browser from "webextension-polyfill"
import { getStorageData } from "../storage/get-storage-data"
import { IStorage } from "../storage/schemas"
import { ICentralStorageListener } from "./interfaces"

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
