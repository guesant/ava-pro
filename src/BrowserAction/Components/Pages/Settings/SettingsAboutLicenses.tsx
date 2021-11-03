import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";

const SettingsAboutLicenses = () => (
  <Link to={routes.settingsLicenses()}>
    <ListItem button>
      <ListItemText primary="Licenças de Código Aberto" />
    </ListItem>
  </Link>
);

export default SettingsAboutLicenses;
