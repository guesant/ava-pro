import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { routes } from "../../Routes";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";

const ViewRoomCoursesHeaderSearch = () => {
  const history = useHistory();
  const id = useCurrentRoomId(false);

  const handleSearchCoursesClick = useCallback(
    () => history.push(routes.viewRoomCoursesSearch({ id })),
    [id, history]
  );

  return (
    <IconButton onClick={handleSearchCoursesClick} color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

export default ViewRoomCoursesHeaderSearch;
