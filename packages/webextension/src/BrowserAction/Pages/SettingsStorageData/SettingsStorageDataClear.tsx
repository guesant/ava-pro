import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import browser from "webextension-polyfill"

const handleClearStorageData = () => browser.storage.local.clear()

const SettingsStorageDataClear = () => (
  <>
    <ListItem button disableRipple onClick={handleClearStorageData}>
      <ListItemIcon>
        <DeleteSweepIcon />
      </ListItemIcon>
      <ListItemText primary={getMessage("page_settings_storage_data_clear")} />
    </ListItem>
  </>
)

export default SettingsStorageDataClear
