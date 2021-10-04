import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Fragment, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { IRoom } from "../../../../../typings/IRoom";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import { useHandleRoomClick } from "./useHandleRoomClick";
import { useRoomOptionsMenu, IHandleOpenMenuClick } from "./useRoomOptionsMenu";

export type IMenuData = { url: string; anchorEl: Element };

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

const ListRoomsList = () => {
  const { menu, handleOpenMenuClick } = useRoomOptionsMenu();
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  return (
    <div>
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
    </div>
  );
};

export default ListRoomsList;
