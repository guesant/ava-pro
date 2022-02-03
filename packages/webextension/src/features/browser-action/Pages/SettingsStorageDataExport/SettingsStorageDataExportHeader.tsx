import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBack from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const SettingsStorageDataExportHeader = () => {
  return (
    <>
      <PageHeader
        title={getMessage("page_settings_storage_data_export")}
        beforeTitle={
          <>
            <AppRouteLink route={appRoutes.settings}>
              <IconButton color={"inherit"}>
                <ArrowBack />
              </IconButton>
            </AppRouteLink>
          </>
        }
      />
    </>
  )
}

export default SettingsStorageDataExportHeader
