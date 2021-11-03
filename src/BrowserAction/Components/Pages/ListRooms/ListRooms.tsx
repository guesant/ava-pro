import Divider from "@mui/material/Divider";
import ListRoomFooterNote from "./ListRoomFooterNote";
import ListRoomsHeader from "./ListRoomsHeader";
import ListRoomsList from "./ListRoomsList";

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
