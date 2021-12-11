import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import TextField from "@mui/material/TextField"
import { useFormContext } from "react-hook-form"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const ShowRoomCredentialsContentInputPassword = () => {
  const { register } = useFormContext()
  return (
    <TextField
      fullWidth
      size="medium"
      sx={{ m: 0 }}
      margin="dense"
      type="password"
      onFocus={handleSelectAllOnFocus}
      InputProps={{ ...register("password") }}
      placeholder={getMessage("page_showRoom_credentials_form_input_password")}
    />
  )
}

export default ShowRoomCredentialsContentInputPassword
