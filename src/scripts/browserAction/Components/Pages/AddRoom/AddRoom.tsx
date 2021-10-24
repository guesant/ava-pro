import { AddRoomContextProvider } from "./AddRoomContext";
import AddRoomForm from "./AddRoomForm";
import AddRoomHeader from "./AddRoomHeader";
import Divider from "@mui/material/Divider";
import loadable from "@loadable/component";

const ListRoomsDetected = loadable(
  () => import("../ListRooms/ListRoomsDetected")
);

const AddRoom = () => (
  <div>
    <AddRoomContextProvider>
      <AddRoomHeader />
      <AddRoomForm />
      <Divider />
      <ListRoomsDetected header="Histórico de Ambientes Detectados" />
    </AddRoomContextProvider>
  </div>
);

export default AddRoom;
