import {
  DetectedRoomResponse,
  IDetectedRoom,
} from "../../../../typings/ISettings";
import React, { useCallback } from "react";
import StorageSettingsService from "../../../../services/StorageSettingsService";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

type IListRoomsDetectedItemProps = { detectedRoom: IDetectedRoom };

const ListRoomsListDetectedItem: React.FC<IListRoomsDetectedItemProps> = ({
  detectedRoom,
}) => {
  const handleRejectRequest = useCallback(async () => {
    await StorageSettingsService.setSelectedRoomResponse(
      detectedRoom.url,
      DetectedRoomResponse.REJECTED
    );
  }, [detectedRoom.url]);

  const handleAcceptRequest = useCallback(async () => {
    await StorageSettingsService.handleDetectedRoomAcceptRequest(detectedRoom);
  }, [detectedRoom]);

  return (
    <ListItem button>
      <ListItemText>
        <Typography style={{ marginRight: "48px" }} noWrap>
          {detectedRoom.name}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={handleRejectRequest} color="inherit">
          <CloseIcon />
        </IconButton>
        <IconButton onClick={handleAcceptRequest} color="inherit">
          <CheckIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListRoomsListDetectedItem;
