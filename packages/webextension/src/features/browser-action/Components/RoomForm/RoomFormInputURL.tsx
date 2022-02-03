import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { isUrl } from "@ava-pro/shared/lib/utils/is-url"
import TextField from "@mui/material/TextField"
import { useFormContext } from "react-hook-form"
import AppErrorMessage from "../AppErrorMessage/AppErrorMessage"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const RoomFormInputURL = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <TextField
        fullWidth
        sx={{ m: 0 }}
        size="medium"
        margin="dense"
        error={Boolean(errors.url)}
        placeholder={getMessage("component_roomForm_input_url")}
        onFocus={handleSelectAllOnFocus}
        InputProps={{
          ...register("url", {
            validate: {
              isUrl: (value) =>
                isUrl(value) ||
                getMessage("component_roomForm_input_url_feedback_invalid")
            }
          })
        }}
      />

      <AppErrorMessage errors={errors} name="url" />
    </>
  )
}

export default RoomFormInputURL
