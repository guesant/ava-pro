import { getMoodleInstanceHome } from "@ava-pro/crawlers/lib/Scrappers/DocumentScrappers/GetMoodleInstanceHome/GetMoodleInstanceHome"
import { getMoodleInstanceName } from "@ava-pro/crawlers/lib/Scrappers/DocumentScrappers/GetMoodleInstanceName/GetMoodleInstanceName"
import { IDetectedRoom } from "@ava-pro/shared/lib/Interfaces/IDetectedRoom"
import { IDetectedRoomResponse } from "@ava-pro/shared/lib/Interfaces/IDetectedRoomResponse"
import { IRuntimeMessageType } from "@ava-pro/shared/lib/Interfaces/IRuntimeMessageType"
import * as logger from "@ava-pro/shared/lib/logger"
import { sendRuntimeMessage } from "@ava-pro/shared/lib/RuntimeMessage/sendRuntimeMessage"
import { applyStorageMutation } from "@ava-pro/shared/lib/Storage/applyStorageMutation"
import { getSlicedStorageData } from "@ava-pro/shared/lib/Storage/getSlicedStorageData"
import { createDetectedRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageDetectedRoomMutations"
import { getDetectedRoomByUrl } from "@ava-pro/shared/lib/Storage/Slicers/StorageDetectedRoomSlicers"
import normalizeUrl from "normalize-url"

export const handleMoodleInstance = async (
  currentPageUrl: string,
  document: Document
) => {
  const instanceHome = normalizeUrl(
    getMoodleInstanceHome(document) ?? currentPageUrl
  )

  const instanceDetectedRoom = await getSlicedStorageData(
    getDetectedRoomByUrl(instanceHome)
  )

  if (instanceDetectedRoom === undefined) {
    logger.info("a new moodle instance was detected!")

    const detectedRoom: IDetectedRoom = {
      url: instanceHome,
      name: getMoodleInstanceName(document),
      response: IDetectedRoomResponse.NONE
    }

    await applyStorageMutation(createDetectedRoom, detectedRoom)

    await sendRuntimeMessage(
      IRuntimeMessageType.NOTIFY_DETECTED_ROOM,
      detectedRoom
    )
  }
}
