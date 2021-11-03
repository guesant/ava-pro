import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import TextField from "@mui/material/TextField";

const ViewRoomCredentialsFormPassword = () => {
  const password = useContextSelector(
    ViewRoomCredentialsContext,
    ({ password }) => password
  );

  const setPassword = useContextSelector(
    ViewRoomCredentialsContext,
    ({ setPassword }) => setPassword
  );

  return (
    <TextField
      fullWidth
      label="Senha"
      type="password"
      margin="dense"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};

export default ViewRoomCredentialsFormPassword;
