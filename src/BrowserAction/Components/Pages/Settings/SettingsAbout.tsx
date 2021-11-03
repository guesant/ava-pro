import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import SettingsAboutVersion from "./SettingsAboutVersion";
import SettingsAboutAuthor from "./SettingsAboutAuthor";
import SettingsAboutSourceCode from "./SettingsAboutSourceCode";
import SettingsAboutLicenses from "./SettingsAboutLicenses";

export const ABOUT = {
  PROJECT_LICENSE: "MIT",
  PROJECT_REPOSITORY: "https://github.com/guesant/ava-pro",

  AUTHOR_NAME: "Gabriel R. Antunes",
  AUTHOR_EMAIL: "gabrielrodantunes@gmail.com",
  AUTHOR_GITHUB: "https://github.com/guesant",
};

const SettingsAbout = () => (
  <>
    <ListSubheader>Sobre</ListSubheader>
    <SettingsAboutVersion />
    <Divider />
    <SettingsAboutAuthor />
    <Divider />
    <SettingsAboutSourceCode />
    <Divider />
    <SettingsAboutLicenses />
    <Divider />
  </>
);

export default SettingsAbout;
