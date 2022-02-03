import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageSpacing from "../../Components/PageSpacing/PageSpacing"
import { ShowRoomSearchMessagingConversationsContext } from "./ShowRoomSearchMessagingConversationsContext"

const ShowRoomSearchMessagingConversationsFallbacks: FC = ({ children }) => {
  const error = useContextSelector(
    ShowRoomSearchMessagingConversationsContext,
    ({ conversationsQuery: { error } }) => error
  )

  const isLoading = useContextSelector(
    ShowRoomSearchMessagingConversationsContext,
    ({ conversationsQuery: { isLoading } }) => isLoading
  )

  if (isLoading) {
    return (
      <PageSpacing>
        <Loading />
      </PageSpacing>
    )
  }

  if (error) {
    return (
      <PageSpacing>
        <Alert severity={"error"}>
          {getMessage("feedback_somethingWentWrong")}
        </Alert>
      </PageSpacing>
    )
  }

  return <>{children}</>
}

export default ShowRoomSearchMessagingConversationsFallbacks
