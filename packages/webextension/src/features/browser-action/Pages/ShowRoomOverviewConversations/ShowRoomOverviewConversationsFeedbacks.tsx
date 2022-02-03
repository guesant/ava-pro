import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageContent from "../../Components/PageContent/PageContent"
import { RoomConversationsContext } from "../../Components/RoomConversationsContext"

const ShowRoomOverviewConversationsFeedbacks: FC = ({ children }) => {
  const { isLoading, data, error } = useContextSelector(
    RoomConversationsContext,
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
          {getMessage("page_showRoom_overviewConversations_feedback_error")}
        </Alert>
      </PageContent>
    )
  }

  return <>{children}</>
}

export default ShowRoomOverviewConversationsFeedbacks
