import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import ExtensionService from "../../../../../services/ExtensionService";
import MoodleRoutesService from "../../../../../services/MoodleRoutesService";
import { routes } from "../../Routes";
import { ViewRoomAuthedContext } from "./ViewRoomAuthedContext";
import { useCurrentRoomId } from "./ViewRoomContext";

const ViewRoomNeedsAuthMessage = () => {
  const id = useCurrentRoomId(false);

  const autoLoginUrl = useMemo(() => routes.viewRoomCredentials({ id }), [id]);

  const manualLoginUrl = useMemo(
    () => MoodleRoutesService.build(decodeURIComponent(id)).login(),
    [id]
  );

  const handleManualLoginClick = useCallback(() => {
    ExtensionService.openUrl(manualLoginUrl);
  }, [manualLoginUrl]);

  return (
    <Box sx={{ margin: 1 }}>
      <Alert severity="warning">
        <Typography fontSize={"inherit"} component={"span"}>
          Você precisa estar autenticado para acessar este recurso. Configure o{" "}
          <Link to={autoLoginUrl}>
            <span style={{ fontWeight: "bold" }}>Login Automático</span>
          </Link>{" "}
          ou faça o login{" "}
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={handleManualLoginClick}
          >
            diretamente no ambiente
          </span>
          .
        </Typography>
      </Alert>
    </Box>
  );
};

const ViewRoomNeedsAuth: React.FC = ({ children }) => {
  const isLoggedIn = useContextSelector(
    ViewRoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  );

  if (!isLoggedIn) {
    return <ViewRoomNeedsAuthMessage />;
  }

  return <>{children}</>;
};

export default ViewRoomNeedsAuth;
