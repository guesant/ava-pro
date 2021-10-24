import normalizeUrl from "normalize-url";
import MoodleRoutesService from "../../services/MoodleRoutesService";
import StorageRoomsService from "../../services/StorageRoomsService";
import { MoodleUrlType } from "../../services/enums/MoodleUrlType";
import StorageSettingsService from "../../services/StorageSettingsService";
import { DetectedRoomResponse, IDetectedRoom } from "../../typings/ISettings";
import { RuntimeMessageType } from "../BackgroundScript";

export class ContentScriptService {
  start = async () => {
    window.addEventListener("popstate", this.checkCurrentPage);
    await this.checkCurrentPage();
  };

  checkCurrentPage = async () => {
    const url = normalizeUrl(window.location.href, {
      removeQueryParameters: false,
    });

    switch (await MoodleRoutesService.getUrlType(url)) {
      case MoodleUrlType.COURSE: {
        await StorageRoomsService.updateCourseLastVisit(url);
        break;
      }

      case MoodleUrlType.LOGIN: {
        const hasLoginErrors =
          document.querySelectorAll(".loginerrors").length > 0;

        const room = await StorageRoomsService.find(url);

        if (room) {
          const {
            credentials: { username, password },
          } = room;

          const form = document.querySelector("#login") as HTMLFormElement;

          const inputUsername = form.querySelector(
            "#username"
          ) as HTMLInputElement;

          const inputPassword = form.querySelector(
            "#password"
          ) as HTMLInputElement;

          inputUsername.value = username;
          inputPassword.value = password;

          if (!hasLoginErrors && username.length > 0 && password.length > 0) {
            form.submit();
          }
        }
      }
    }

    if (this.isMoodleInstance()) {
      console.log("it's a moodle instance!");

      let isAlreadyDetected = false;

      const url = normalizeUrl(this.getMoodleInstanceHome());
      const name = this.getMoodleInstanceName();

      const detectedRoom: IDetectedRoom = {
        url,
        name,
        response: DetectedRoomResponse.NONE,
      };

      await StorageSettingsService.updateSettings((settings) => {
        isAlreadyDetected = Boolean(
          settings.detectedRooms.find((i) => i.url === url)
        );
        !isAlreadyDetected && settings.detectedRooms.push(detectedRoom);
      });

      if (!isAlreadyDetected) {
        await browser.runtime.sendMessage({
          type: RuntimeMessageType.NEW_ROOM_DETECTED,
          payload: detectedRoom,
        });
      }
    }
  };

  isMoodleInstance = () => {
    const keywords = document.querySelector('meta[name="keywords"]');
    return keywords?.attributes
      .getNamedItem("content")
      ?.value.split(",")
      .includes("moodle");
  };

  getMoodleInstanceHome = (fallback = document.location.href) => {
    const homeLinkAnchor = document.querySelector(
      ".homelink a"
    ) as HTMLAnchorElement | null;
    return homeLinkAnchor?.href ?? fallback;
  };

  getMoodleInstanceName = () => {
    const siteName = document.querySelector(
      ".site-name"
    ) as HTMLSpanElement | null;
    return siteName?.textContent ?? document.title ?? document.location.href;
  };
}
