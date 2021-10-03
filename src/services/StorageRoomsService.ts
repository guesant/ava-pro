import produce from "immer";
import MoodleRoutesService from "./MoodleRoutesService";
import { IRoom } from "../typings/IRoom";
import StorageService from "./StorageService";
import URLService from "./URLService";
import { fallbackToLength } from "../utils/fallbackToLength";

class StorageRoomsService {
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

  isRoomInStorage = async (url: string) =>
    (await this.getOneByUrl(url)) !== null;

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

  updateOne = async (roomUrl: string, callback: (room: IRoom) => void) => {
    await this.updateMany(async (rooms) => {
      const roomIdx = await this.getMatchedIndex(roomUrl, rooms);
      callback(rooms[roomIdx]);
    });
  };

  updateMany = async (callback: (rooms: IRoom[]) => void) => {
    const rooms = await this.getAll();

    const updatedRooms = await Promise.resolve(produce(rooms, callback));

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
}

export default new StorageRoomsService();
