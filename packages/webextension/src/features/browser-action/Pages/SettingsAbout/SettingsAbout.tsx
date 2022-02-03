import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Divider from "@mui/material/Divider"
import ListSubheader from "@mui/material/ListSubheader"
import SettingsAboutAuthor from "./SettingsAboutAuthor"
import SettingsAboutSourceCode from "./SettingsAboutSourceCode"
import SettingsAboutVersion from "./SettingsAboutVersion"

const SettingsAbout = () => (
  <>
    <ListSubheader>{getMessage("page_settings_about")}</ListSubheader>
    <SettingsAboutVersion />
    <Divider />
    <SettingsAboutAuthor />
    <Divider />
    <SettingsAboutSourceCode />
    <Divider />
  </>
)

export default SettingsAbout
