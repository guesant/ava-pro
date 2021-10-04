import { Ruty } from "ruty";

const { route } = Ruty.configure();

export const routes = {
  listRooms: route("/room").build(),
};
