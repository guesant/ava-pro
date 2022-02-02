import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { ABOUT } from "../../../ABOUT"

const SettingsAboutAuthor = () => (
  <ListItem
    button
    disableRipple
    onClick={() => window.open(ABOUT.AUTHOR_GITHUB)}
  >
    <ListItemText
      primary={getMessage("page_settings_about_author")}
      secondary={
        <>
          <span>{ABOUT.AUTHOR_NAME}</span>
          <br />
          <span>{ABOUT.AUTHOR_EMAIL}</span>
        </>
      }
    />
  </ListItem>
)

export default SettingsAboutAuthor
