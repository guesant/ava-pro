import { Ruty } from "ruty";

const { route } = Ruty.configure();

export const routes = {
  addRoom: route("/room/add").build(),
  listRooms: route("/room").build(),

  viewRoom: route("/room/view/:id").build<{ id: string }>(),
  viewRoomCredentials: route("/room/view/:id/credentials").build<{
    id: string;
  }>(),
  viewRoomSearch: route("/room/view/:id/search").build<{ id: string }>(),

  settings: route("/settings").build(),
};
