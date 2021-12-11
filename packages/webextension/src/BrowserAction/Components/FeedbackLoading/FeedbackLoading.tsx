import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"

const FeedbackLoading = () => (
  <Alert severity={"info"}>{getMessage("feedback_loading")}</Alert>
)

export default FeedbackLoading
