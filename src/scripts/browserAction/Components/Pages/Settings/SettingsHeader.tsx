import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { routes } from "../../Routes";

const SettingsHeader = () => (
  <Header
    title="Configurações"
    startContent={
      <>
        <Link to={routes.listRooms()}>
          <IconButton color="inherit">
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </>
    }
  />
);

export default SettingsHeader;
