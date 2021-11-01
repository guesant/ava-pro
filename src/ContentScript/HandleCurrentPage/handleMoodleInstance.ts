import normalizeUrl from "normalize-url";
import { getMoodleInstanceHome } from "../CurrentPageScrappers/getMoodleInstanceHome";
import { getMoodleInstanceName } from "../CurrentPageScrappers/getMoodleInstanceName";
import { DetectedRoomResponse, IDetectedRoom } from "../../typings/ISettings";
import StorageSettingsService from "../../services/StorageSettingsService";
import { RuntimeMessageType } from "../../services/RuntimeMessage/RuntimeMessageType";

export const handleMoodleInstance = async () => {
  console.log("it's a moodle instance!");

  let isAlreadyDetectedRoom = false;

  const url = normalizeUrl(getMoodleInstanceHome(), {
    removeQueryParameters: false,
  });

  const name = getMoodleInstanceName();

  const detectedRoom: IDetectedRoom = {
    url,
    name,
    response: DetectedRoomResponse.NONE,
  };

  await StorageSettingsService.updateSettings((settings) => {
    isAlreadyDetectedRoom = Boolean(
      settings.detectedRooms.find((detectedRoom) => detectedRoom.url === url)
    );
    !isAlreadyDetectedRoom && settings.detectedRooms.push(detectedRoom);
  });

  if (!isAlreadyDetectedRoom) {
    await browser.runtime.sendMessage({
      type: RuntimeMessageType.NEW_ROOM_DETECTED,
      payload: detectedRoom,
    });
  }
};
