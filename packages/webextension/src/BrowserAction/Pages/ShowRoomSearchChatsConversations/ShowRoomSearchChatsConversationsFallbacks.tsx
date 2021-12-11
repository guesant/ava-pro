import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageSpacing from "../../Components/PageSpacing/PageSpacing"
import { ShowRoomSearchChatsConversationsContext } from "./ShowRoomSearchChatsConversationsContext"

const ShowRoomSearchChatsConversationsFallbacks: FC = ({ children }) => {
  const error = useContextSelector(
    ShowRoomSearchChatsConversationsContext,
    ({ conversationsQuery: { error } }) => error
  )

  const isLoading = useContextSelector(
    ShowRoomSearchChatsConversationsContext,
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

export default ShowRoomSearchChatsConversationsFallbacks
