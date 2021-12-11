import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import { useFormContext } from "react-hook-form"

const ShowRoomCredentialsContentInputAutoLogin = () => {
  const { watch, setValue } = useFormContext()
  const { username = "", password = "", autoLogin = false } = watch()

  const canBeToggled = username.length > 0 && password.length > 0

  return (
    <>
      <FormGroup>
        <FormControlLabel
          disabled={!canBeToggled}
          label={getMessage("page_showRoom_credentials_form_input_autoLogin")}
          control={
            <Checkbox
              disabled={!canBeToggled}
              checked={autoLogin}
              onChange={() =>
                setValue("autoLogin", !autoLogin, {
                  shouldDirty: true,
                  shouldTouch: true
                })
              }
            />
          }
        />
      </FormGroup>

      {!canBeToggled && (
        <Alert severity="info">
          {getMessage(
            "page_showRoom_credentials_form_input_autoLogin_feedback_fillAll"
          )}
        </Alert>
      )}

      {canBeToggled && autoLogin && (
        <Alert severity="warning">
          {getMessage(
            "page_showRoom_credentials_form_input_autoLogin_feedback_autoDisable"
          )}
        </Alert>
      )}
    </>
  )
}

export default ShowRoomCredentialsContentInputAutoLogin
