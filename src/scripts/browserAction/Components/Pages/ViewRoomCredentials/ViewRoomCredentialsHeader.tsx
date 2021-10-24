import { useHistory, useParams } from "react-router";
import { routes } from "../../Routes";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import Header from "../../Header/Header";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

export const ViewRoomCredentialsHeader = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const goBack = () => history.push(routes.viewRoom({ id }));

  const hasChanges = useContextSelector(
    ViewRoomCredentialsContext,
    ({ hasChanges }) => hasChanges
  );

  const saveCredentials = useContextSelector(
    ViewRoomCredentialsContext,
    ({ saveCredentials }) => saveCredentials
  );

  return (
    <Header
      title="Credenciais"
      startContent={
        <>
          <IconButton onClick={goBack} color="inherit">
            <ArrowBackIcon />
          </IconButton>
        </>
      }
      endContent={
        <Button
          disabled={!hasChanges}
          onClick={() => saveCredentials()}
          variant="outlined"
          color="inherit"
        >
          Salvar
        </Button>
      }
    />
  );
};
