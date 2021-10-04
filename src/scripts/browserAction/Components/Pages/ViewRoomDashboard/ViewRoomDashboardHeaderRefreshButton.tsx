import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import StorageRoomsService from "../../../../../services/StorageRoomsService";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";

const ViewRoomDashboardHeaderRefreshButton = () => {
  const url = useContextSelector(ViewRoomContext, ({ room }) => room?.url);

  const handleClick = useCallback(
    () => url && StorageRoomsService.fetchCourses(url),
    [url, StorageRoomsService.fetchCourses]
  );

  return (
    <IconButton onClick={handleClick} color="inherit">
      <RefreshIcon />
    </IconButton>
  );
};

export default ViewRoomDashboardHeaderRefreshButton;
