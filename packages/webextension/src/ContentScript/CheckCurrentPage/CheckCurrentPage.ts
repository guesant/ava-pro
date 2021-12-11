import { isMoodleInstance } from "@ava-pro/crawlers/lib/Scrappers/DocumentScrappers/IsMoodleInstance/IsMoodleInstance"
import { data } from "@ava-pro/shared/lib/centralStorage"
import * as logger from "@ava-pro/shared/lib/logger"
import normalizeUrl from "normalize-url"
import { handleMoodleInstance } from "../HandleMoodleInstance/HandleMoodleInstance"
import { handleRegisteredRoom } from "../HandleRegisteredRoom/HandleRegisteredRoom"

export const checkCurrentPage = async () => {
  const currentPageUrl = normalizeUrl(window.location.href, {
    removeQueryParameters: false
  })

  if (isMoodleInstance(window.document)) {
    logger.info("the current page is a Moodle instance!")
    await handleMoodleInstance(currentPageUrl, window.document)
  }

  const { rooms } = await data

  const currentPageRoom = rooms.find((room) =>
    currentPageUrl.startsWith(room.url)
  )

  if (currentPageRoom) {
    logger.debug(
      "this instance was found in the Extension's Storage!",
      "|",
      `room id: ${currentPageRoom.id}`
    )

    await handleRegisteredRoom(currentPageUrl, currentPageRoom)
  }
}
