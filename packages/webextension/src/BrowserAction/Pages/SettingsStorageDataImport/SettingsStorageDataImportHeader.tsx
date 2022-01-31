import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBack from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { useFormContext } from "react-hook-form"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

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
            <Link to={"./../.."}>
              <IconButton color={"inherit"}>
                <ArrowBack />
              </IconButton>
            </Link>
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
