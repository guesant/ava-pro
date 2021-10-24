import normalizeUrl from "normalize-url";
import MoodleRoutesService from "../../services/MoodleRoutesService";
import StorageRoomsService from "../../services/StorageRoomsService";
import { MoodleUrlType } from "../../services/enums/MoodleUrlType";
import StorageSettingsService from "../../services/StorageSettingsService";

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
  };
}
