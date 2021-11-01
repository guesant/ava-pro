import produce from "immer";
import { IRoom, IRoomCourse } from "../typings/IRoom";
import { fallbackToLength } from "../helpers/fallbackToLength";
import MoodleRoutesService from "./MoodleRoutesService";
import MoodleService from "./MoodleService";
import StorageService from "./StorageService";
import URLService from "./URLService";
import * as yup from "yup";

type IHandleFetchRoomCoursesOptions = { keepUnknownCourses?: boolean };

class StorageRoomsService {
  roomCourseSchema = yup.object().shape({
    url: yup.string(),
    name: yup.string(),
    courseId: yup.string(),
    lastVisitAt: yup.number(),
  });

  roomSchema = yup
    .object()
    .shape({
      url: yup.string(),
      name: yup.string(),

      coursesCache: yup
        .array()
        .of(this.roomCourseSchema)
        .default(() => []),

      credentials: yup
        .object()
        .shape({
          username: yup.string().default(""),
          password: yup.string().default(""),
          isAutoLoginEnabled: yup.boolean().default(true),
        })
        .default(() => ({})),
    })
    .default(() => ({}));

  isInStorage = async (url: string) => (await this.find(url)) !== null;

  list = () =>
    StorageService.getItem("rooms", [] as IRoom[]).then((rooms) =>
      rooms.map((room) => this.roomSchema.cast(room) as IRoom)
    );

  find = async (
    roomUrl: string,
    incomingRooms: IRoom[] | Promise<IRoom[]> = this.list()
  ) => {
    const rooms = await incomingRooms;
    const normalizedUrl = URLService.normalize(roomUrl);
    return (
      rooms.find(({ url }) =>
        normalizedUrl.startsWith(URLService.normalize(url))
      ) || null
    );
  };

  findIndex = async (
    roomUrl: string,
    incomingRooms: IRoom[] | Promise<IRoom[]> = this.list()
  ) => {
    const rooms = await incomingRooms;
    const normalizedRoomUrl = URLService.normalize(roomUrl);

    return (
      rooms.findIndex(({ url: loopRoomUrl }) =>
        normalizedRoomUrl.startsWith(URLService.normalize(loopRoomUrl))
      ) ?? -1
    );
  };

  add = async (room: Omit<IRoom, "coursesCache" | "credentials">) => {
    await this.updateMany((rooms) =>
      ([] as IRoom[]).concat(rooms, room as IRoom)
    );
    return room as IRoom;
  };

  remove = (url: string) =>
    this.updateMany((rooms) => rooms.filter((i) => i.url !== url));

  update = async (
    roomUrl: string,
    callback: (room: IRoom) => void | Promise<void>
  ) => {
    await this.updateMany(async (rooms) => {
      const roomIdx = await this.findIndex(roomUrl, rooms);
      await Promise.resolve(callback(rooms[roomIdx]));
    });
  };

  updateMany = async (
    callback: (
      rooms: IRoom[]
    ) => void | IRoom[] | Promise<IRoom[]> | Promise<void>
  ) => {
    const rooms = await this.list();
    const updatedRooms = await Promise.resolve(produce(rooms, callback as any));
    await StorageService.setData({ rooms: updatedRooms });
  };

  updateCourseLastVisit = async (
    courseUrl: string,
    lastVisitAt = Date.now()
  ) => {
    const courseId = MoodleRoutesService.getCourseId(courseUrl);
    if (!courseId) return;
    await this.update(courseUrl, (room) => {
      const courseIdx = fallbackToLength(
        room.coursesCache.findIndex((i) => i.url === courseUrl),
        room.coursesCache.length
      );

      const cache = {
        ...{ courseId: courseId, url: courseUrl, name: courseUrl },
        ...room.coursesCache[courseIdx],
      };

      room.coursesCache[courseIdx] = {
        ...cache,
        lastVisitAt,
      };
    });
  };

  updateCourse = async (
    courseUrl: string,
    callback: (course: IRoomCourse) => void
  ) => {
    await this.update(courseUrl, async (room) => {
      const courseIdx = room.coursesCache.findIndex((i) => i.url === courseUrl);
      room.coursesCache[courseIdx] = await produce(
        room.coursesCache[courseIdx],
        callback
      );
    });
  };

  fetchCourses = async (
    url: string,
    { keepUnknownCourses = true }: IHandleFetchRoomCoursesOptions = {}
  ) => {
    const courses = await MoodleService.fetchRoomCourses(url);

    await this.update(url, (draft) => {
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
