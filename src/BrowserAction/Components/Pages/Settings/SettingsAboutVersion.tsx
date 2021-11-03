import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SettingsAboutVersion = () => (
  <ListItem button>
    <ListItemText primary="Versão" secondary={process.env.EXT_VERSION} />
  </ListItem>
);

export default SettingsAboutVersion;
