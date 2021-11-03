import ListItem from "@mui/material/ListItem";
import ExtensionService from "../../../../services/ExtensionService";
import ListItemText from "@mui/material/ListItemText";
import { ABOUT } from "./SettingsAbout";

const SettingsAboutAuthor = () => (
  <ListItem
    button
    onClick={() => ExtensionService.openUrl(ABOUT.AUTHOR_GITHUB)}
  >
    <ListItemText
      primary="Autor"
      secondary={
        <>
          <span>{ABOUT.AUTHOR_NAME}</span>
          <br />
          <span>{ABOUT.AUTHOR_EMAIL}</span>
        </>
      }
    />
  </ListItem>
);

export default SettingsAboutAuthor;
