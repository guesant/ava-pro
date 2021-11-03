import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Header from "../../Header/Header";
import ViewRoomChatHeaderGoBack from "./ViewRoomChatHeaderGoBack";

const ViewRoomChatFallbackError = () => {
  return (
    <div className="page">
      <Header
        title="Ocorreu um erro"
        startContent={
          <>
            <ViewRoomChatHeaderGoBack />
          </>
        }
      />
      <div className="pageContent">
        <Box sx={{ margin: 1 }}>
          <Alert severity={"error"}>
            Não foi possível carregar este chat. Tente novamente mais tarde.
          </Alert>
        </Box>
      </div>
    </div>
  );
};

export default ViewRoomChatFallbackError;
