import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import TextField from "@mui/material/TextField"
import { useFormContext } from "react-hook-form"
import AppErrorMessage from "../AppErrorMessage/AppErrorMessage"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

const RoomFormInputName = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <TextField
        fullWidth
        sx={{ m: 0 }}
        margin="dense"
        size={"medium"}
        error={Boolean(errors.name)}
        onFocus={handleSelectAllOnFocus}
        placeholder={getMessage("component_roomForm_input_name")}
        InputProps={{
          ...register("name", {
            required: getMessage(
              "component_roomForm_input_name_feedback_invalid"
            )
          })
        }}
      />
      <AppErrorMessage errors={errors} name="name" />
    </>
  )
}

export default RoomFormInputName
