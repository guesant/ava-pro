import { IRoom } from "../typings/IRoom";
import StorageRoomsService from "./StorageRoomsService";
import { makeUseOfStorage } from "./makeUseOfStorage";

export const makeUseOfSelectedRoom = (
  callback: (room: IRoom | null) => void
) => {
  return makeUseOfStorage(
    async (storage): Promise<IRoom | null> => {
      const {
        rooms,
        settings: { selectedRoom },
      } = storage;

      return selectedRoom
        ? StorageRoomsService.find(decodeURIComponent(selectedRoom), rooms)
        : null;
    },
    async (room) => {
      callback(await room);
    }
  );
};
