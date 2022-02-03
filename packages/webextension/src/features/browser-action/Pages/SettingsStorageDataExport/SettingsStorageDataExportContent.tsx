import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage"
import TextField from "@mui/material/TextField"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const getAllStateSlicer = (state: any) => state

const SettingsStorageDataExportContent = () => {
  const { value, isLoading } = useExtensionStorageSlicer(getAllStateSlicer, {})

  return (
    <>
      <TextField
        multiline
        fullWidth
        variant={"standard"}
        InputProps={{ readOnly: true }}
        onFocus={handleSelectAllOnFocus}
        value={
          isLoading
            ? getMessage("feedback_loading")
            : JSON.stringify(value, null, 2)
        }
      />
    </>
  )
}

export default SettingsStorageDataExportContent
