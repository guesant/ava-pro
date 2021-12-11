import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageContent from "../../Components/PageContent/PageContent"
import { RoomChatsContext } from "../../Components/RoomChatsContext"

const ShowRoomOverviewChatsFeedbacks: FC = ({ children }) => {
  const { isLoading, data, error } = useContextSelector(
    RoomChatsContext,
    ({ conversationsQuery }) => conversationsQuery
  )

  if (isLoading) {
    return (
      <PageContent>
        <Loading />
      </PageContent>
    )
  }

  if (error || !data) {
    return (
      <PageContent>
        <Alert severity={"error"}>
          {getMessage("page_showRoom_overviewChats_feedback_error")}
        </Alert>
      </PageContent>
    )
  }

  return <>{children}</>
}

export default ShowRoomOverviewChatsFeedbacks
