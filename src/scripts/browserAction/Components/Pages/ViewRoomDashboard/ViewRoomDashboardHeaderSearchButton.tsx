import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router";
import { routes } from "../../Routes";

const ViewRoomDashboardHeaderSearchButton = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleClick = useCallback(
    () => history.push(routes.viewRoomSearch({ id })),
    [history, id]
  );

  return (
    <IconButton onClick={handleClick} color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

export default ViewRoomDashboardHeaderSearchButton;
