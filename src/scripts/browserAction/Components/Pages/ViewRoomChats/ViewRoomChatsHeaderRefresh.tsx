import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { ViewRoomChatsContext } from "./ViewRoomChatsContext";

const ViewRoomChatsHeaderRefresh = () => {
  const refetch = useContextSelector(
    ViewRoomChatsContext,
    ({ conversationsQuery: { refetch } }) => refetch
  );

  const handleClick = useCallback(() => refetch(), [refetch]);

  return (
    <IconButton onClick={handleClick} color="inherit">
      <RefreshIcon />
    </IconButton>
  );
};

export default ViewRoomChatsHeaderRefresh;
