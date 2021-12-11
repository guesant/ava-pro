import { create } from "superstruct"
import browser from "webextension-polyfill"
import { IStorage } from "../Interfaces/IStorage"
import * as logger from "../logger"
import { Storage } from "../Schemas/Storage"
import { runMigrations } from "./runMigrations"

export const getStorageData = async () => {
  try {
    await runMigrations()
    const storageData = await browser.storage.local.get()
    return create(storageData, Storage) as IStorage
  } catch (e) {
    // XXX: something went wrong

    logger.info(
      "cloud not load previous storage.local data :( | cleaning storage and loading default data..."
    )
    await browser.storage.local.clear()

    return create({}, Storage) as IStorage
  }
}
