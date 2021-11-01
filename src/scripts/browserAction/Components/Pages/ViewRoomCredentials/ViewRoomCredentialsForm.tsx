import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";

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

const ViewRoomCredentialsAutoLogin = () => {
  const isAutoLoginEnabled = useContextSelector(
    ViewRoomCredentialsContext,
    ({ isAutoLoginEnabled }) => isAutoLoginEnabled
  );

  const setIsAutoLoginEnabled = useContextSelector(
    ViewRoomCredentialsContext,
    ({ setIsAutoLoginEnabled }) => setIsAutoLoginEnabled
  );

  const handleToggle = () => setIsAutoLoginEnabled(!isAutoLoginEnabled);

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={isAutoLoginEnabled} onChange={handleToggle} />
          }
          label="Habilitar o Login Automático"
        />
      </FormGroup>
      {isAutoLoginEnabled && (
        <Alert severity="warning">
          Nota: Caso a autenticação falhe, o Login Automático será desabilitado.
        </Alert>
      )}
    </div>
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

      <Box my={1}>
        <Divider />
      </Box>

      <ViewRoomCredentialsAutoLogin />

      <button type="submit" disabled={!hasChanges} hidden>
        Salvar
      </button>
    </form>
  );
};

export default ViewRoomCredentialsForm;
