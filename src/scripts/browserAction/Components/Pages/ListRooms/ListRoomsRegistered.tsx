import { useRoomOptionsMenu } from "./useRoomOptionsMenu";
import { useContextSelector } from "use-context-selector";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import List from "@mui/material/List";
import ListRoomsRegisteredItem from "./ListRoomsRegisteredItem";

const ListRoomsRegistered = () => {
  const { menu, handleOpenMenuClick } = useRoomOptionsMenu();
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  if (rooms.length === 0) {
    return null;
  }

  return (
    <List>
      {rooms.map((room) => (
        <ListRoomsRegisteredItem
          room={room}
          key={room.url}
          handleOpenMenuClick={handleOpenMenuClick}
        />
      ))}
      {menu}
    </List>
  );
};

export default ListRoomsRegistered;
