import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import TextField from "@mui/material/TextField";

const ViewRoomCredentialsUsername = () => {
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

const ViewRoomCredentialsPassword = () => {
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

const ViewRoomCredentialsForm = () => {
  const hasChanges = useContextSelector(
    ViewRoomCredentialsContext,
    ({ hasChanges }) => hasChanges
  );

  const saveCredentials = useContextSelector(
    ViewRoomCredentialsContext,
    ({ saveCredentials }) => saveCredentials
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        hasChanges && saveCredentials();
      }}
    >
      <ViewRoomCredentialsUsername />
      <ViewRoomCredentialsPassword />
      <button type="submit" disabled={!hasChanges} hidden>
        Salvar
      </button>
    </form>
  );
};

export default ViewRoomCredentialsForm;
