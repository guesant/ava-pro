import { nanoid } from "nanoid"
import { create } from "superstruct"
import browser from "webextension-polyfill"
import { IRoom } from "../../Interfaces/IRoom"
import { IStorage } from "../../Interfaces/IStorage"
import { IStorageMigration } from "../../Interfaces/IStorageMigration"
import * as logger from "../../logger"
import { Storage } from "../../Schemas/Storage"
import { hasOwnProperty } from "../../Utils/hasOwnProperty"

export const migration0001: IStorageMigration = {
  id: 1,
  async up() {
    const nextStorageData: IStorage = create({}, Storage) as IStorage

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
