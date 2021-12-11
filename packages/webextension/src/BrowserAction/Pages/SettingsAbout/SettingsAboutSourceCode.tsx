import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { ABOUT } from "../../../ABOUT"

const SettingsAboutSourceCode = () => (
  <ListItem
    button
    disableRipple
    onClick={() => window.open(ABOUT.PROJECT_REPOSITORY)}
  >
    <ListItemText
      primary={getMessage("page_settings_about_source_code")}
      secondary={
        <>
          <span>
            {getMessage("page_settings_about_source_code_license")}:{" "}
            {ABOUT.PROJECT_LICENSE}
          </span>
          <br />
          <span>{ABOUT.PROJECT_REPOSITORY}</span>
        </>
      }
    />
  </ListItem>
)

export default SettingsAboutSourceCode
