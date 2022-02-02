import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import { ShowRoomChatContext } from "./ShowRoomChatContext"
import ShowRoomChatFallbackLoading from "./ShowRoomChatFallbackLoading"
import ShowRoomChatFallbackNotFound from "./ShowRoomChatFallbackNotFound"

const ShowRoomChatFallbacks: FC = ({ children }) => {
  const error = useContextSelector(
    ShowRoomChatContext,
    ({ conversationBetweenUsersQuery: { error } }) => error
  )

  const isLoading = useContextSelector(
    ShowRoomChatContext,
    ({ conversationBetweenUsersQuery: { isLoading, data } }) =>
      isLoading || !data
  )

  if (isLoading) {
    return <ShowRoomChatFallbackLoading />
  }

  if (error) {
    return <ShowRoomChatFallbackNotFound />
  }

  return <>{children}</>
}

export default ShowRoomChatFallbacks
