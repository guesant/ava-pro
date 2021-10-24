import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router";
import { useContextSelector } from "use-context-selector";
import { routes } from "../../Routes";
import { ViewRoomCoursesContext } from "../ViewRoomCourses/ViewRoomCoursesContext";

const ViewRoomSearchHeaderGoBack = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const setSearchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ setSearchText }) => setSearchText
  );

  const goBack = useCallback(() => {
    setSearchText("");
    history.push(routes.viewRoom({ id }));
  }, [history, id, setSearchText]);

  return (
    <IconButton onClick={goBack} color="inherit">
      <ArrowBackIcon />
    </IconButton>
  );
};

export default ViewRoomSearchHeaderGoBack;
