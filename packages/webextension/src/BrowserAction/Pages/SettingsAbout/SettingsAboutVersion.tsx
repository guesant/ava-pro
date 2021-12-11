import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { ABOUT } from "../../../ABOUT"

const SettingsAboutVersion = () => (
  <ListItem button disableRipple>
    <ListItemText
      primary={getMessage("page_settings_about_version")}
      secondary={ABOUT.VERSION}
    />
  </ListItem>
)

export default SettingsAboutVersion
