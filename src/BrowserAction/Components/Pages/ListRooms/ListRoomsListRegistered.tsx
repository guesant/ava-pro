import { useRoomOptionsMenu } from "./useRoomOptionsMenu";
import { useContextSelector } from "use-context-selector";
import List from "@mui/material/List";
import ListRoomsListRegisteredItem from "./ListRoomsListRegisteredItem";
import { RoomsContext } from "../../../Hooks/RoomsContext";

const ListRoomsListRegistered = () => {
  const { menu, handleOpenMenuClick } = useRoomOptionsMenu();

  const registeredRooms = useContextSelector(
    RoomsContext,
    ({ rooms }) => rooms
  );

  if (registeredRooms.length === 0) {
    return null;
  }

  return (
    <List>
      {registeredRooms.map((room) => (
        <ListRoomsListRegisteredItem
          room={room}
          key={room.url}
          handleOpenMenuClick={handleOpenMenuClick}
        />
      ))}
      {menu}
    </List>
  );
};

export default ListRoomsListRegistered;
