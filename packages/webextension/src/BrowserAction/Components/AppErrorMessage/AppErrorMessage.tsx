import { ErrorMessage } from "@hookform/error-message"
import Alert from "@mui/material/Alert"
import { FC } from "react"

const AppErrorMessage: FC<any> = (props) => (
  <ErrorMessage
    {...props}
    render={({ message }) => <Alert severity={"error"}>{message}</Alert>}
  />
)

export default AppErrorMessage
