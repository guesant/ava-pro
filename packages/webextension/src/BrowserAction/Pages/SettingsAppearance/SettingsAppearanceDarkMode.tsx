import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { IPaletteMode } from "@ava-pro/shared/lib/features/storage/schemas/settings/palette/mode/IPaletteMode"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Switch from "@mui/material/Switch"
import { usePaletteMode } from "../../Hooks/usePaletteMode"

const SettingsAppearanceDarkMode = () => {
  const { paletteMode, togglePaletteMode } = usePaletteMode()

  const isDarkModeEnabled = paletteMode === IPaletteMode.DARK

  return (
    <>
      <ListItem button disableRipple onClick={() => togglePaletteMode()}>
        <ListItemIcon>
          <Brightness4Icon />
        </ListItemIcon>

        <ListItemText
          primary={getMessage("page_settings_appearance_theme_dark_mode")}
        />

        <Switch edge="end" checked={isDarkModeEnabled} />
      </ListItem>
    </>
  )
}

export default SettingsAppearanceDarkMode
