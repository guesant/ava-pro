import { IRoom } from "../../../../../typings/IRoom";
import { IHandleOpenMenuClick, useRoomOptionsMenu } from "./useRoomOptionsMenu";
import { useHandleRoomClick } from "./useHandleRoomClick";
import { Fragment, useCallback } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { useContextSelector } from "use-context-selector";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import List from "@mui/material/List";

const ListRoomsItem: React.FC<{
  room: IRoom;
  handleOpenMenuClick: IHandleOpenMenuClick;
}> = ({ handleOpenMenuClick, room: { name, url } }) => {
  const handleRoomClick = useHandleRoomClick();

  const handleRoomListItemClick = useCallback(
    () => handleRoomClick(url),
    [url, handleRoomClick]
  );

  return (
    <Fragment key={url}>
      <ListItem button onClick={handleRoomListItemClick}>
        <ListItemText>
          <Typography noWrap>{name}</Typography>
        </ListItemText>
        <ListItemSecondaryAction onClick={(e) => e.stopPropagation()}>
          <IconButton color="inherit" onClick={handleOpenMenuClick(url)}>
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

const ListRoomsRegistered = () => {
  const { menu, handleOpenMenuClick } = useRoomOptionsMenu();
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  if (rooms.length === 0) {
    return null;
  }

  return (
    <List>
      {rooms.map((room) => (
        <ListRoomsItem
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
