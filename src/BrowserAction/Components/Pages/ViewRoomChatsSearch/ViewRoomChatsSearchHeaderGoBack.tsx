import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCoursesContext } from "../ViewRoomCourses/ViewRoomCoursesContext";

const ViewRoomChatsSearchHeaderGoBack = () => {
  const history = useHistory();

  const setSearchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ setSearchText }) => setSearchText
  );

  const handleGoBack = useCallback(() => {
    setSearchText("");
    history.go(-1);
  }, [history, setSearchText]);

  return (
    <IconButton onClick={handleGoBack} color="inherit">
      <ArrowBackIcon />
    </IconButton>
  );
};

export default ViewRoomChatsSearchHeaderGoBack;
