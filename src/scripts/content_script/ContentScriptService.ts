import normalizeUrl from "normalize-url";
import MoodleRoutesService, {
  MoodleUrlType,
} from "../../services/MoodleRoutesService";
import StorageRoomsService from "../../services/StorageRoomsService";

export class ContentScriptService {
  start = () => {
    this.checkCurrentPage();
    window.addEventListener("popstate", this.checkCurrentPage);
  };

  checkCurrentPage = () => {
    this.checkURL(window.location.href);
  };

  checkURL = async (incomingUrl: string) => {
    const url = normalizeUrl(incomingUrl, { removeQueryParameters: false });

    switch (await MoodleRoutesService.getUrlType(url)) {
      case MoodleUrlType.COURSE: {
        await StorageRoomsService.updateCourseLastVisit(url);
        break;
      }
    }
  };
}
