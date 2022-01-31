import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/Hooks/useExtensionStorageSlicer"
import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import TextField from "@mui/material/TextField"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const getAllStateSlicer = (state) => state

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
