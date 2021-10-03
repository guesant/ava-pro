import { IRoom } from "./IRoom";
import { ISettings } from "./ISettings";

export type ILocalStore = {
  rooms: IRoom[];
  settings: ISettings;
};
