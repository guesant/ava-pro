import loadable from "@loadable/component";
import Divider from "@mui/material/Divider";
import ListRoomFooterNote from "./ListRoomFooterNote";
import ListRoomsHeader from "./ListRoomsHeader";

const ListRoomsList = loadable(() => import("./ListRoomsList"));

const ListRooms = () => (
  <div className="page">
    <ListRoomsHeader />
    <div className="pageContent">
      <ListRoomsList />
    </div>

    <Divider />

    <ListRoomFooterNote />
  </div>
);

export default ListRooms;
