import { checkIsMoodleInstanceFromDocument } from "@ava-pro/moodle-client-js/lib/features/info"
import { logger } from "@ava-pro/shared/lib/features"
import { data } from "@ava-pro/shared/lib/features/central-storage"
import normalizeUrl from "normalize-url"
import { handleMoodleInstance } from "./handle-moodle-instance"
import { handleRegisteredRoom } from "./handle-registered-room"

export const checkCurrentPage = async () => {
  const currentPageUrl = normalizeUrl(window.location.href, {
    removeQueryParameters: false
  })

  if (checkIsMoodleInstanceFromDocument(window.document)) {
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
