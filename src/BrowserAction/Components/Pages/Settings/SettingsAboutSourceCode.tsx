import ListItem from "@mui/material/ListItem";
import ExtensionService from "../../../../services/ExtensionService";
import ListItemText from "@mui/material/ListItemText";
import { ABOUT } from "./SettingsAbout";

const SettingsAboutSourceCode = () => (
  <ListItem
    button
    onClick={() => ExtensionService.openUrl(ABOUT.PROJECT_REPOSITORY)}
  >
    <ListItemText
      primary="Código Fonte"
      secondary={
        <>
          <span>Licença: {ABOUT.PROJECT_LICENSE}</span>
          <br />
          <span>{ABOUT.PROJECT_REPOSITORY}</span>
        </>
      }
    />
  </ListItem>
);

export default SettingsAboutSourceCode;
