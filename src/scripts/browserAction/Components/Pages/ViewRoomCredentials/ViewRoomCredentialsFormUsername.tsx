import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import TextField from "@mui/material/TextField";

const ViewRoomCredentialsFormUsername = () => {
  const username = useContextSelector(
    ViewRoomCredentialsContext,
    ({ username }) => username
  );

  const setUsername = useContextSelector(
    ViewRoomCredentialsContext,
    ({ setUsername }) => setUsername
  );

  return (
    <TextField
      fullWidth
      margin="dense"
      label="Usuário"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

export default ViewRoomCredentialsFormUsername;
