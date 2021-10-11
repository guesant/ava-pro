import { Ruty } from "ruty";
import StorageRoomsService from "./StorageRoomsService";
import { MoodleUrlType } from "./enums/MoodleUrlType";
import { MoodleRoutesQuery } from "./enums/MoodleRoutesQuery";

type IMoodlePaths = {
  [key in MoodleUrlType]?: IMoodleRoute;
};

type IMoodleRoute = {
  type: MoodleUrlType;
  path: string;
};

const isRouteMatched = (pathname: string, route: IMoodleRoute) =>
  pathname.startsWith(route.path);

class MoodleRoutesService {
  getCourseId = (url: string) =>
    new URL(url).searchParams.get(MoodleRoutesQuery.COURSE_ID);

  paths: IMoodlePaths = {
    [MoodleUrlType.COURSE]: {
      type: MoodleUrlType.COURSE,
      path: "/course/view.php",
    },
    [MoodleUrlType.COURSES]: {
      type: MoodleUrlType.COURSES,
      path: "/my?myoverviewtab=courses",
    },
  };

  build = (baseUrl: string) => {
    const { route } = Ruty.configure({ prefix: baseUrl });

    const routes = {
      course: route(this.paths[MoodleUrlType.COURSE].path).build(),
      courses: route(this.paths[MoodleUrlType.COURSES].path).build(),
    };

    return routes;
  };

  getMatchedRoute = async (path: string) => {
    const room = await StorageRoomsService.find(path);

    if (room) {
      const pathname = path.replace(room.url, "");
      return Object.values(this.paths).find((route: IMoodleRoute) =>
        isRouteMatched(pathname, route)
      );
    }

    return null;
  };

  getUrlType = async (path: string) => {
    const route = await this.getMatchedRoute(path);
    return route?.type ?? MoodleUrlType.INVALID;
  };
}

export default new MoodleRoutesService();
