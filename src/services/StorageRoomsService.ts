import produce from "immer";
import { IRoom } from "../typings/IRoom";
import StorageService from "./StorageService";
import URLService from "./URLService";

class StorageRoomsService {
  getAll = () => StorageService.getItem("rooms", [] as IRoom[]);

  getOneByUrl = async (
    url: string,
    incomingRooms: IRoom[] | Promise<IRoom[]> = this.getAll()
  ) => {
    const rooms = await Promise.resolve(incomingRooms);
    const normalizedUrl = URLService.normalize(url);
    return (
      rooms.find(({ url }) =>
        normalizedUrl.startsWith(URLService.normalize(url))
      ) || null
    );
  };

  isRoomInStorage = async (url: string) =>
    (await this.getOneByUrl(url)) !== null;

  updateOne = async (courseUrl: string, callback: (room: IRoom) => void) => {
    await this.updateMany(async (rooms) => {
      const roomIdx = await this.getMatchedIndex(courseUrl, rooms);
      callback(rooms[roomIdx]);
    });
  };

  updateMany = async (callback: (rooms: IRoom[]) => void) => {
    const rooms = await this.getAll();

    const updatedRooms = await Promise.resolve(produce(rooms, callback));

    await StorageService.setData({ rooms: updatedRooms });
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
}

export default new StorageRoomsService();
