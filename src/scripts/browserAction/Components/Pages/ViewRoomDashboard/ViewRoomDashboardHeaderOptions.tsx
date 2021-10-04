import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useCallback, useState } from "react";
import { ViewRoomDashboardHeaderOptionsOrderBy } from "./ViewRoomDashboardHeaderOptionsOrderBy";

const ViewRoomHeaderOptions = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleOpenButtonClick = useCallback(
    (event: any) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  return (
    <>
      <IconButton onClick={handleOpenButtonClick} color="inherit">
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <ViewRoomDashboardHeaderOptionsOrderBy handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default ViewRoomHeaderOptions;
