import {
  extractInstanceHomeFromDocument,
  extractInstanceNameFromDocument
} from "@ava-pro/moodle-client-js/lib/features/info"
import { logger, runtimeMessage } from "@ava-pro/shared/lib/features"
import { IRuntimeMessageType } from "@ava-pro/shared/lib/features/runtime-message"
import {
  applyStorageMutation,
  getStorageDataSliced
} from "@ava-pro/shared/lib/features/storage"
import { createDetectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms"
import { IDetectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room"
import { IDetectedRoomResponse } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room/response"
import { getDetectedRoomByUrl } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/get-detected-room-by-url.slicer"

import normalizeUrl from "normalize-url"

export const handleMoodleInstance = async (
  currentPageUrl: string,
  document: Document
) => {
  const instanceHome = normalizeUrl(
    extractInstanceHomeFromDocument(document) ?? currentPageUrl
  )

  const instanceDetectedRoom = await getStorageDataSliced(
    getDetectedRoomByUrl(instanceHome)
  )

  if (instanceDetectedRoom === undefined) {
    logger.info("a new moodle instance was detected!")

    const detectedRoom: IDetectedRoom = {
      url: instanceHome,
      name: extractInstanceNameFromDocument(document),
      response: IDetectedRoomResponse.NONE
    }

    await applyStorageMutation(createDetectedRoom, detectedRoom)

    await runtimeMessage.sendRuntimeMessage(
      IRuntimeMessageType.NOTIFY_DETECTED_ROOM,
      detectedRoom
    )
  }
}
