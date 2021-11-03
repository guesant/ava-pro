import ListRoomsListFallback from "./ListRoomsListFallback";
import Divider from "@mui/material/Divider";
import loadable from "@loadable/component";

const ListRoomsListRegistered = loadable(
  () => import("./ListRoomsListRegistered")
);

const ListRoomsListDetectedWithoutResponse = loadable(
  () => import("./ListRoomsListDetectedWithoutResponse")
);

const ListRoomsList = () => (
  <ListRoomsListFallback>
    <ListRoomsListDetectedWithoutResponse />
    <Divider />
    <ListRoomsListRegistered />
  </ListRoomsListFallback>
);

export default ListRoomsList;
