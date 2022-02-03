import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useFormContext } from "react-hook-form"
import AppErrorMessage from "../../Components/AppErrorMessage/AppErrorMessage"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const isValidImportPayload = (data: string) => {
  try {
    const parsedData = JSON.parse(data)
    return typeof parsedData === "object"
  } catch (e) {
    return false
  }
}

const SettingsStorageDataImportContent = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <TextField
        fullWidth
        multiline
        variant={"standard"}
        onFocus={handleSelectAllOnFocus}
        InputProps={{
          ...register("data", {
            validate: {
              isValid: (data) =>
                isValidImportPayload(data) ||
                getMessage(
                  "page_settings_storage_data_import_feedback_invalid_payload"
                )
            }
          })
        }}
      />

      <AppErrorMessage errors={errors} name="data" />
    </Box>
  )
}

export default SettingsStorageDataImportContent
