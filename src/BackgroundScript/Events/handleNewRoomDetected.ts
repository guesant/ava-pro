import { IDetectedRoom } from "../../typings/ISettings";
import StorageSettingsService from "../../services/StorageSettingsService";

enum NotificationButtons {
  ADD,
  LATER,
}

const createNewRoomDetectedNotification = async (
  detectedRoom: IDetectedRoom,
  callback: (button: NotificationButtons) => void
) => {
  const isFirefox = await browser.runtime
    .getBrowserInfo()
    .then((info) => info.name.toLocaleLowerCase() === "firefox");

  const notificationId = await browser.notifications.create({
    type: "basic",
    title: "Um novo ambiente foi detectado",
    message: `Deseja adicionar o ambiente "${detectedRoom.name}" ?`,
    iconUrl: (browser.extension as any).getURL("icons/icon.png"),
    ...(!isFirefox
      ? { buttons: [{ title: "Adicionar" }, { title: "Mais Tarde" }] }
      : {}),
  });

  await browser.notifications.onButtonClicked.addListener(
    async (eventId, buttonIndex) => {
      if (eventId === notificationId) {
        return callback(buttonIndex);
      }
    }
  );
};

export const handleNewRoomDetected = (detectedRoom: IDetectedRoom) => {
  createNewRoomDetectedNotification(detectedRoom, async (button) => {
    switch (button) {
      case NotificationButtons.ADD: {
        await StorageSettingsService.handleDetectedRoomAcceptRequest(
          detectedRoom
        );
        break;
      }
    }
  });
};
