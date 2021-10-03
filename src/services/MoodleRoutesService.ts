import { Ruty } from "ruty";
import StorageRoomsService from "./StorageRoomsService";

export enum MoodleUrlQuery {
  COURSE_ID = "id",
}

export enum MoodleUrlType {
  COURSE,
}

class MoodleRoutesService {
  getCourseId = (url: string) =>
    new URL(url).searchParams.get(MoodleUrlQuery.COURSE_ID);

  getUrlType = async (url: string) => {
    if (await this.isCouseUrl(url)) {
      return MoodleUrlType.COURSE;
    }
  };

  makeRoutes = (baseUrl: string) => {
    const { route } = Ruty.configure({ prefix: baseUrl });

    const routes = {
      courses: route("/my?myoverviewtab=courses").build(),
    };

    return routes;
  };

  isCouseUrl = async (path: string) => {
    const isRoom = await StorageRoomsService.isRoomInStorage(path);
    return isRoom && new URL(path).searchParams.has(MoodleUrlQuery.COURSE_ID);
  };
}

export default new MoodleRoutesService();
