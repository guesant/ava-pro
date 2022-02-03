import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomChatContext } from "../../Components/RoomChatContext"
import ShowRoomConversationFallbackLoading from "./ShowRoomConversationFallbackLoading"
import ShowRoomConversationFallbackNotFound from "./ShowRoomConversationFallbackNotFound"

const ShowRoomConversationFallbacks: FC = ({ children }) => {
  const error = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { error } }) => error
  )

  const isLoading = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { isLoading, data } }) => isLoading || !data
  )

  if (isLoading) {
    return <ShowRoomConversationFallbackLoading />
  }

  if (error) {
    return <ShowRoomConversationFallbackNotFound />
  }

  return <>{children}</>
}

export default ShowRoomConversationFallbacks
