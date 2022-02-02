import { nanoid } from "nanoid"
import browser from "webextension-polyfill"
import { hasOwnProperty } from "../../../../utils/has-own-property"
import { logger } from "../../../index"
import { parseStorageData } from "../../index"
import { IRoom } from "../../schemas/rooms/room"
import { IStorageMigration } from "../interfaces/IStorageMigration"

export const doMigration0001: IStorageMigration = {
  id: 1,
  async up() {
    const nextStorageData = parseStorageData({})

    const currentStorageData = await browser.storage.local.get()

    const {
      version,
      rooms: prevRooms,
      settings: prevSettings
    } = currentStorageData

    const isV001 =
      version === undefined &&
      prevSettings &&
      hasOwnProperty(prevSettings, "detectedRooms")

    if (isV001) {
      logger.debug("previous storage version was 0.0.1, applying migrations...")

      if (Array.isArray(prevRooms)) {
        for (const oldRoom of prevRooms) {
          const migratedRoom = {
            id: oldRoom.id ?? nanoid(),
            url: oldRoom.url,
            name: oldRoom.name,
            credentials: {
              username: oldRoom.credentials?.username ?? "",
              password: oldRoom.credentials?.password ?? "",
              autoLogin: oldRoom.credentials?.isAutoLoginEnabled ?? true
            },
            cache: {
              courses: null
            }
          } as IRoom
          nextStorageData.rooms.push(migratedRoom)
        }
      }

      if (prevSettings.selectedRoom !== null) {
        nextStorageData.settings.selectedRoom =
          nextStorageData.rooms.find((i) => i.url === prevSettings.selectedRoom)
            ?.id ?? null
      }

      nextStorageData.settings.coursesOrderBy = prevSettings.coursesOrderBy
      nextStorageData.detectedRooms = prevSettings.detectedRooms

      delete nextStorageData.lastMigration

      await browser.storage.local.set(nextStorageData)
    }
  }
}
