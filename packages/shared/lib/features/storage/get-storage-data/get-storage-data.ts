import browser from "webextension-polyfill"
import { logger } from "../.."
import { runMigrations } from "../migrations"
import { parseStorageData } from "../parse-storage-data"

export const getStorageData = async () => {
  try {
    await runMigrations()

    const storageData = await browser.storage.local.get()

    return parseStorageData(storageData)
  } catch (e) {
    // XXX: something went wrong

    logger.info(
      "cloud not load previous storage.local data :( | cleaning storage and loading default data..."
    )

    await browser.storage.local.clear()

    return parseStorageData({})
  }
}
