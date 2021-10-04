import { AddRoomContextProvider } from "./AddRoomContext";
import AddRoomForm from "./AddRoomForm";
import AddRoomHeader from "./AddRoomHeader";

const AddRoom = () => (
  <div>
    <AddRoomContextProvider>
      <AddRoomHeader />
      <AddRoomForm />
    </AddRoomContextProvider>
  </div>
);

export default AddRoom;
