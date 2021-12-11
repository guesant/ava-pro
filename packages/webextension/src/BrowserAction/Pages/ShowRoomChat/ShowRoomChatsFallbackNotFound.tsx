import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Alert from "@mui/material/Alert"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"

const ShowRoomChatsFallbackNotFound = () => (
  <>
    <PageHeader
      beforeTitle={
        <>
          <Link to={-1}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
      title={getMessage("page_showRoom_chats_fallback_notFound")}
    />

    <PageContent>
      <Alert severity={"error"}>
        {getMessage("page_showRoom_chats_fallback_notFound_message")}
      </Alert>
    </PageContent>
  </>
)

export default ShowRoomChatsFallbackNotFound
