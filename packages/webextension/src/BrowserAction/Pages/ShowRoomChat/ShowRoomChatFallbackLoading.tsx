import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

const ShowRoomChatFallbackLoading = () => {
  return (
    <>
      <PageHeader
        beforeTitle={
          <>
            <Link to={-1 as any}>
              <IconButton color={"inherit"}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </>
        }
        title={getMessage("feedback_loading")}
      />
    </>
  )
}

export default ShowRoomChatFallbackLoading
