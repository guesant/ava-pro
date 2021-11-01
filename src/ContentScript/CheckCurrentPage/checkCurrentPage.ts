import normalizeUrl from "normalize-url";
import { isMoodleInstance } from "../CurrentPageScrappers/isMoodleInstance";
import { handleMoodleInstance } from "../HandleCurrentPage/handleMoodleInstance";
import MoodleRoutesService from "../../services/MoodleRoutesService";
import { MoodleUrlType } from "../../services/enums/MoodleUrlType";
import { handlePageCourse } from "../HandleCurrentPage/handlePageCourse";
import { handlePageLogin } from "../HandleCurrentPage/handlePageLogin";

export const checkCurrentPage = async () => {
  const url = normalizeUrl(window.location.href, {
    removeQueryParameters: false,
  });

  if (isMoodleInstance()) {
    await handleMoodleInstance();
  }

  switch (await MoodleRoutesService.getUrlType(url)) {
    case MoodleUrlType.COURSE: {
      await handlePageCourse(url);
      break;
    }
    case MoodleUrlType.LOGIN: {
      await handlePageLogin(url);
      break;
    }
  }
};
