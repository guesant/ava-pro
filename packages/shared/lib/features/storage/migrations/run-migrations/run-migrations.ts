import browser from "webextension-polyfill"
import { logger } from "../../../index"
import { doMigrationList } from "../do-migration-list"

let uniqueRunner: null | Promise<void> = null

export const runMigrations = async () => {
  if (uniqueRunner !== null) {
    await uniqueRunner
    return
  }

  uniqueRunner = (async () => {
    const { lastMigration = -Infinity } = await browser.storage.local.get(
      "lastMigration"
    )

    const pendingMigrations = doMigrationList.filter(
      ({ id }) => id > lastMigration
    )

    if (pendingMigrations.length > 0) {
      for (const pendingMigration of pendingMigrations) {
        logger.info(`migration "${pendingMigration.id}": starting...`)
        await pendingMigration.up()
        logger.info(`migration "${pendingMigration.id}": done.`)

        await browser.storage.local.set({ lastMigration: pendingMigration.id })
        logger.debug(
          `storage.local.lastMigration: updated to "${pendingMigration.id}".`
        )
      }
    }
  })()

  await uniqueRunner

  uniqueRunner = null
}
