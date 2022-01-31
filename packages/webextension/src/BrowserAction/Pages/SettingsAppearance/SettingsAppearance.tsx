import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ListSubheader from "@mui/material/ListSubheader"
import SettingsAppearanceDarkMode from "./SettingsAppearanceDarkMode"

const SettingsAppearance = () => (
  <>
    <ListSubheader>{getMessage("page_settings_appearance")}</ListSubheader>

    <SettingsAppearanceDarkMode />
  </>
)

export default SettingsAppearance
