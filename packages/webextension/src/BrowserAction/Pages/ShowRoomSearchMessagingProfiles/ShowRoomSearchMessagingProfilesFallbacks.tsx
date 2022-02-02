import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Alert from "@mui/material/Alert"
import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import PageSpacing from "../../Components/PageSpacing/PageSpacing"
import { ShowRoomSearchMessagingProfilesContext } from "./ShowRoomSearchMessagingProfilesContext"

const ShowRoomSearchMessagingProfilesFallbacks: FC = ({ children }) => {
  const isLoading = useContextSelector(
    ShowRoomSearchMessagingProfilesContext,
    ({ profilesQuery: { isLoading } }) => isLoading
  )
  const error = useContextSelector(
    ShowRoomSearchMessagingProfilesContext,
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

export default ShowRoomSearchMessagingProfilesFallbacks
