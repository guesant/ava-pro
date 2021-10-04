import { Ruty } from "ruty";

const { route } = Ruty.configure();

export const routes = {
  addRoom: route("/room/add").build(),
  viewRoom: route("/room/view/:id").build<{ id: string }>(),
  listRooms: route("/room").build(),
};
