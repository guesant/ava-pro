import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExtensionService from "../../../../../services/ExtensionService";

const ABOUT = {
  AUTHOR_NAME: "Gabriel R. Antunes",
  AUTHOR_EMAIL: "gabrielrodantunes@gmail.com",
  AUTHOR_GITHUB: "https://github.com/guesant",

  PROJECT_LICENSE: "MIT",
  PROJECT_REPOSITORY: "https://github.com/guesant/improved-moodle",
};

const SettingsAbout = () => (
  <>
    <ListSubheader>Sobre</ListSubheader>
    <ListItem button>
      <ListItemText primary="Versão" secondary={process.env.EXT_VERSION} />
    </ListItem>
    <Divider />
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
    <Divider />
    <ListItem
      button
      onClick={() => ExtensionService.openUrl(ABOUT.PROJECT_REPOSITORY)}
    >
      <ListItemText
        primary="Código Fonte"
        secondary={
          <>
            <span>Licensa: {ABOUT.PROJECT_LICENSE}</span>
            <br />
            <span>{ABOUT.PROJECT_REPOSITORY}</span>
          </>
        }
      />
    </ListItem>
    <Divider />
  </>
);

export default SettingsAbout;
