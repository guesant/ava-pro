import produce from "immer";
import { IRoom, IRoomCourse } from "../typings/IRoom";
import { fallbackToLength } from "../utils/fallbackToLength";
import MoodleRoutesService from "./MoodleRoutesService";
import MoodleService from "./MoodleService";
import StorageService from "./StorageService";
import URLService from "./URLService";

type IHandleFetchRoomCoursesOptions = { keepUnknownCourses?: boolean };
class StorageRoomsService {
  isRoomInStorage = async (url: string) =>
    (await this.getOneByUrl(url)) !== null;

  getAll = () => StorageService.getItem("rooms", [] as IRoom[]);

  getOneByUrl = async (
    roomUrl: string,
    incomingRooms: IRoom[] | Promise<IRoom[]> = this.getAll()
  ) => {
    const rooms = await Promise.resolve(incomingRooms);
    const normalizedUrl = URLService.normalize(roomUrl);
    return (
      rooms.find(({ url }) =>
        normalizedUrl.startsWith(URLService.normalize(url))
      ) || null
    );
  };

  getMatchedIndex = async (
    roomUrl: string,
    incomingRooms: IRoom[] | Promise<IRoom[]> = this.getAll()
  ) => {
    const rooms = await Promise.resolve(incomingRooms);
    const normalizedRoomUrl = URLService.normalize(roomUrl);

    return (
      rooms.findIndex(({ url: loopRoomUrl }) =>
        normalizedRoomUrl.startsWith(URLService.normalize(loopRoomUrl))
      ) ?? -1
    );
  };

  add = async (data: Omit<IRoom, "coursesCache">) => {
    const room = { coursesCache: [], ...data };
    await this.updateMany((rooms) => ([] as IRoom[]).concat(rooms, room));
    return room;
  };

  removeOne = (url: string) =>
    this.updateMany((rooms) => rooms.filter((i) => i.url !== url));

  updateOne = async (roomUrl: string, callback: (room: IRoom) => void) => {
    await this.updateMany(async (rooms) => {
      const roomIdx = await this.getMatchedIndex(roomUrl, rooms);
      callback(rooms[roomIdx]);
    });
  };

  updateMany = async (
    callback: (
      rooms: IRoom[]
    ) => void | IRoom[] | Promise<IRoom[]> | Promise<void>
  ) => {
    const rooms = await this.getAll();

    const updatedRooms = await Promise.resolve(produce(rooms, callback as any));

    await StorageService.setData({ rooms: updatedRooms });
  };

  updateCourseLastVisit = async (
    courseUrl: string,
    lastVisitAt = Date.now()
  ) => {
    const courseId = MoodleRoutesService.getCourseId(courseUrl);

    if (!courseId) return;

    await this.updateOne(courseUrl, (room) => {
      const idx = fallbackToLength(
        room.coursesCache.findIndex((i) => i.url === courseUrl),
        room.coursesCache.length
      );

      const cache = {
        ...{ courseId: courseId, url: courseUrl, name: courseUrl },
        ...room.coursesCache[idx],
      };

      room.coursesCache[idx] = {
        ...cache,
        lastVisitAt,
      };
    });
  };

  fetchCourses = async (
    url: string,
    { keepUnknownCourses = true }: IHandleFetchRoomCoursesOptions = {}
  ) => {
    const courses = await MoodleService.fetchRoomCourses(url);

    await this.updateOne(url, (draft) => {
      if (!keepUnknownCourses) {
        draft.coursesCache = draft.coursesCache.filter(
          (course) =>
            courses.findIndex((i) => i.courseId === course.courseId) !== -1
        );
      }
      for (const course of courses) {
        const courseIndex = fallbackToLength(
          draft.coursesCache.findIndex((i) => i.courseId === course.courseId),
          draft.coursesCache.length
        );

        draft.coursesCache[courseIndex] = {
          ...(draft.coursesCache[courseIndex] || {
            lastVisitAt: Date.now(),
          }),
          ...course,
        } as IRoomCourse;
      }
    });
  };
}

export default new StorageRoomsService();
