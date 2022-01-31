import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import DownloadIcon from "@mui/icons-material/Download"
import UploadIcon from "@mui/icons-material/Upload"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import { Link } from "react-router-dom"
import SettingsStorageDataClear from "./SettingsStorageDataClear"

const SettingsStorageData = () => (
  <>
    <ListSubheader>{getMessage("page_settings_storage")}</ListSubheader>

    <Link to={"data/import"}>
      <ListItem button disableRipple>
        <ListItemIcon>
          <UploadIcon />
        </ListItemIcon>
        <ListItemText
          primary={getMessage("page_settings_storage_data_go_to_import")}
        />
      </ListItem>
    </Link>

    <Link to={"data/export"}>
      <ListItem button disableRipple>
        <ListItemIcon>
          <DownloadIcon />
        </ListItemIcon>
        <ListItemText
          primary={getMessage("page_settings_storage_data_go_to_export")}
        />
      </ListItem>
    </Link>

    <SettingsStorageDataClear />

    <Divider />
  </>
)

export default SettingsStorageData
