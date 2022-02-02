import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBack from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { useFormContext } from "react-hook-form"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const SettingsStorageDataImportHeader = () => {
  const {
    formState: { isValid, isDirty }
  } = useFormContext()

  const canSubmit = isDirty && isValid

  return (
    <>
      <PageHeader
        title={getMessage("page_settings_storage_data_import")}
        beforeTitle={
          <>
            <AppRouteLink route={appRoutes.settings}>
              <IconButton color={"inherit"}>
                <ArrowBack />
              </IconButton>
            </AppRouteLink>
          </>
        }
        afterTitle={
          <>
            <Button
              type={"submit"}
              color={"inherit"}
              variant={"outlined"}
              disabled={!canSubmit}
            >
              {getMessage("page_settings_storage_data_import_submit")}
            </Button>
          </>
        }
      />
    </>
  )
}

export default SettingsStorageDataImportHeader
