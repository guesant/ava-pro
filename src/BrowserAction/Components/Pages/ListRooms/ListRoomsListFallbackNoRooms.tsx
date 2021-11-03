import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";

const ListRoomsListFallbackNoRooms = () => (
  <Box sx={{ margin: 1 }}>
    <Alert severity={"info"}>
      <Typography fontSize={"inherit"} component={"span"}>
        Ainda não há ambientes registrados. Utilize a{" "}
        <span style={{ fontWeight: "bold" }}>Detecção Automática</span>,
        navegando até a instancia de Moodle, ou faça manualmente o{" "}
        <Link to={routes.addRoom()}>
          <span style={{ fontWeight: "bold" }}>Cadastro do Ambiente</span>
        </Link>
        .
      </Typography>
    </Alert>
  </Box>
);

export default ListRoomsListFallbackNoRooms;
