import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { routes } from "../../Routes";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";

const ViewRoomChatHeaderGoBack = () => {
  const history = useHistory();
  const id = useCurrentRoomId(false);

  const goBack = useCallback(() => {
    history.push(routes.viewRoomChats({ id }));
  }, [history, id]);

  return (
    <IconButton onClick={goBack} color="inherit">
      <ArrowBackIcon />
    </IconButton>
  );
};

export default ViewRoomChatHeaderGoBack;
