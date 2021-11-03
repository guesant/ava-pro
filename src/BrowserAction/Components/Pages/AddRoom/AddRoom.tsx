import { AddRoomContextProvider } from "./AddRoomContext";
import AddRoomForm from "./AddRoomForm";
import AddRoomHeader from "./AddRoomHeader";
import Divider from "@mui/material/Divider";
import loadable from "@loadable/component";
import AddRoomFormInputs from "./AddRoomFormInputs";

const ListRoomsDetected = loadable(
  () => import("../ListRooms/ListRoomsListDetected")
);

const AddRoom = () => (
  <div className="page">
    <AddRoomContextProvider>
      <AddRoomForm>
        <AddRoomHeader />
        <div className="pageContent">
          <AddRoomFormInputs />
          <Divider />
          <ListRoomsDetected header="Histórico de Ambientes Detectados" />
        </div>
      </AddRoomForm>
    </AddRoomContextProvider>
  </div>
);

export default AddRoom;
