import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import DownloadIcon from "@mui/icons-material/Download"
import UploadIcon from "@mui/icons-material/Upload"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import SettingsStorageDataClear from "./SettingsStorageDataClear"

const SettingsStorageData = () => (
  <>
    <ListSubheader>{getMessage("page_settings_storage")}</ListSubheader>

    <AppRouteLink route={appRoutes.settingsDataImport}>
      <ListItem button disableRipple>
        <ListItemIcon>
          <UploadIcon />
        </ListItemIcon>
        <ListItemText
          primary={getMessage("page_settings_storage_data_go_to_import")}
        />
      </ListItem>
    </AppRouteLink>

    <AppRouteLink route={appRoutes.settingsDataExport}>
      <ListItem button disableRipple>
        <ListItemIcon>
          <DownloadIcon />
        </ListItemIcon>
        <ListItemText
          primary={getMessage("page_settings_storage_data_go_to_export")}
        />
      </ListItem>
    </AppRouteLink>

    <SettingsStorageDataClear />

    <Divider />
  </>
)

export default SettingsStorageData
