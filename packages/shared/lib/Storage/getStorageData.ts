import browser from "webextension-polyfill"
import * as logger from "../logger"
import { parseStorage } from "./parseStorage"
import { runMigrations } from "./runMigrations"

export const getStorageData = async () => {
  try {
    await runMigrations()

    const storageData = await browser.storage.local.get()

    return parseStorage(storageData)
  } catch (e) {
    // XXX: something went wrong

    logger.info(
      "cloud not load previous storage.local data :( | cleaning storage and loading default data..."
    )

    await browser.storage.local.clear()

    return parseStorage({})
  }
}
