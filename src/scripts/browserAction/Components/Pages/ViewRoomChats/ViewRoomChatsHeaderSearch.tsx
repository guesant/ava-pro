import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { routes } from "../../Routes";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";

const ViewRoomChatsHeaderSearch = () => {
  const history = useHistory();
  const id = useCurrentRoomId(false);

  const handleSearchChatsClick = useCallback(
    () => history.push(routes.viewRoomChatsSearch({ id })),
    [id, history]
  );

  return (
    <IconButton onClick={handleSearchChatsClick} color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

export default ViewRoomChatsHeaderSearch;
