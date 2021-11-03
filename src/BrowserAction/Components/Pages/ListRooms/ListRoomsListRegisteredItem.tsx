import React, { Fragment, useCallback } from "react";
import { IRoom } from "../../../../typings/IRoom";
import { IHandleOpenMenuClick } from "./useRoomOptionsMenu";
import { useHandleRoomClick } from "./useHandleRoomClick";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";

type IListRoomsRegisteredItemProps = {
  room: IRoom;
  handleOpenMenuClick: IHandleOpenMenuClick;
};

const ListRoomsListRegisteredItem: React.FC<IListRoomsRegisteredItemProps> = ({
  handleOpenMenuClick,
  room: { name, url },
}) => {
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

export default ListRoomsListRegisteredItem;
