import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCallback, useState } from "react";
import { useHistory, useParams } from "react-router";
import { routes } from "../../Routes";
import { ViewRoomDashboardHeaderOptionsOrderBy } from "./ViewRoomDashboardHeaderOptionsOrderBy";

const ViewRoomHeaderOptions = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleOpenButtonClick = useCallback(
    (event: any) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleClick = useCallback(
    () => history.push(routes.viewRoomCredentials({ id })),
    [history, id]
  );

  return (
    <>
      <IconButton onClick={handleOpenButtonClick} color="inherit">
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <ViewRoomDashboardHeaderOptionsOrderBy handleClose={handleClose} />

        <Divider />

        <MenuItem onClick={handleClick} dense>
          Credenciais
        </MenuItem>
      </Menu>
    </>
  );
};

export default ViewRoomHeaderOptions;
