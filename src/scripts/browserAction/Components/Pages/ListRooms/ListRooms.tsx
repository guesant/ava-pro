import loadable from "@loadable/component";
import Divider from "@mui/material/Divider";
import ListRoomFooterNote from "./ListRoomFooterNote";
import ListRoomsHeader from "./ListRoomsHeader";

const ListRoomsRegistered = loadable(() => import("./ListRoomsRegistered"));

const ListRoomsDetectedWithoutResponse = loadable(
  () => import("./ListRoomsDetectedWithoutResponse")
);

const ListRooms = () => (
  <div className="page">
    <ListRoomsHeader />

    <div className="pageContent">
      <ListRoomsDetectedWithoutResponse />
      <Divider />
      <ListRoomsRegistered />
    </div>

    <Divider />

    <ListRoomFooterNote />
  </div>
);

export default ListRooms;
