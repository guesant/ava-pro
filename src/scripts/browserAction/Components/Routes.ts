import { Ruty } from "ruty";

const { route } = Ruty.configure();

export const routes = {
  addRoom: route("/room/add").build(),
  viewRoom: route("/room/view/:id").build<{ id: string }>(),
  viewRoomSearch: route("/room/view/:id/search").build<{ id: string }>(),
  listRooms: route("/room").build(),
  settings: route("/settings").build(),
};
