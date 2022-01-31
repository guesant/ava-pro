import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBack from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

const SettingsStorageDataExportHeader = () => {
  return (
    <>
      <PageHeader
        title={getMessage("page_settings_storage_data_export")}
        beforeTitle={
          <>
            <Link to={"./../.."}>
              <IconButton color={"inherit"}>
                <ArrowBack />
              </IconButton>
            </Link>
          </>
        }
      />
    </>
  )
}

export default SettingsStorageDataExportHeader
