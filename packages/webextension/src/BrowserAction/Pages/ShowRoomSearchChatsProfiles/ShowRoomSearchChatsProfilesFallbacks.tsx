import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageSpacing from "../../Components/PageSpacing/PageSpacing"
import { ShowRoomSearchChatsProfilesContext } from "./ShowRoomSearchChatsProfilesContext"

const ShowRoomSearchChatsProfilesFallbacks: FC = ({ children }) => {
  const isLoading = useContextSelector(
    ShowRoomSearchChatsProfilesContext,
    ({ profilesQuery: { isLoading } }) => isLoading
  )
  const error = useContextSelector(
    ShowRoomSearchChatsProfilesContext,
    ({ profilesQuery: { error } }) => error
  )

  if (isLoading) {
    return <Loading />
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

export default ShowRoomSearchChatsProfilesFallbacks
