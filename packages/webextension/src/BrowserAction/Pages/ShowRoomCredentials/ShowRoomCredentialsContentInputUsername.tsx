import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import TextField from "@mui/material/TextField"
import { useFormContext } from "react-hook-form"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const ShowRoomCredentialsContentInputUsername = () => {
  const { register } = useFormContext()

  return (
    <TextField
      fullWidth
      size="medium"
      sx={{ m: 0 }}
      margin="dense"
      onFocus={handleSelectAllOnFocus}
      InputProps={{ ...register("username") }}
      placeholder={getMessage("page_showRoom_credentials_form_input_username")}
    />
  )
}

export default ShowRoomCredentialsContentInputUsername
