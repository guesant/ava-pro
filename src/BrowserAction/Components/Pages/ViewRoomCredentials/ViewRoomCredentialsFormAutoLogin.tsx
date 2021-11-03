import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

const ViewRoomCredentialsFormAutoLogin = () => {
  const canBeToggled = useContextSelector(
    ViewRoomCredentialsContext,
    ({ username, password }) => username.length > 0 && password.length > 0
  );

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
          disabled={!canBeToggled}
          label="Habilitar o Login Automático"
          control={
            <Checkbox checked={isAutoLoginEnabled} onChange={handleToggle} />
          }
        />
      </FormGroup>

      {!canBeToggled && (
        <Alert severity="info">
          Informe o usuário e senha para configurar o Login Automático.
        </Alert>
      )}

      {canBeToggled && isAutoLoginEnabled && (
        <Alert severity="warning">
          Nota: Caso a autenticação falhe, o Login Automático será desabilitado.
        </Alert>
      )}
    </div>
  );
};

export default ViewRoomCredentialsFormAutoLogin;
