import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContext } from "./ViewRoomCredentialsContext";
import ViewRoomCredentialsFormUsername from "./ViewRoomCredentialsFormUsername";
import ViewRoomCredentialsFormPassword from "./ViewRoomCredentialsFormPassword";
import ViewRoomCredentialsFormAutoLogin from "./ViewRoomCredentialsFormAutoLogin";
import { FormEvent } from "react";

const ViewRoomCredentialsForm = () => {
  const hasChanges = useContextSelector(
    ViewRoomCredentialsContext,
    ({ hasChanges }) => hasChanges
  );

  const saveCredentials = useContextSelector(
    ViewRoomCredentialsContext,
    ({ saveCredentials }) => saveCredentials
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hasChanges && saveCredentials();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ViewRoomCredentialsFormUsername />
      <ViewRoomCredentialsFormPassword />

      <Box my={1}>
        <Divider />
      </Box>

      <ViewRoomCredentialsFormAutoLogin />

      <button type="submit" disabled={!hasChanges} hidden>
        Salvar
      </button>
    </form>
  );
};

export default ViewRoomCredentialsForm;
