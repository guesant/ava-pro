import loadable from "@loadable/component";
import ListRoomsHeader from "./ListRoomsHeader";

const ListRoomsList = loadable(() => import("./ListRoomsList"));

const ListRooms = () => (
  <div className="page">
    <ListRoomsHeader />
    <div className="pageContent">
      <ListRoomsList />
    </div>
  </div>
);

export default ListRooms;
