import { getMessage } from "@ava-pro/shared/lib/features/i18n"
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
