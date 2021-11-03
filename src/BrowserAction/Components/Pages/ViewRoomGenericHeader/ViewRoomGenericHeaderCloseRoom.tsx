import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import StorageSettingsService from "../../../../services/StorageSettingsService";

const removeSelectedRoom = () => {
  StorageSettingsService.updateSettings((settings) => {
    settings.selectedRoom = null;
  });
};

const ViewRoomGenericHeaderCloseRoom = () => (
  <>
    <IconButton onClick={removeSelectedRoom} color="inherit">
      <ArrowBackIcon />
    </IconButton>
  </>
);

export default ViewRoomGenericHeaderCloseRoom;
