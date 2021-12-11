import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomChatContext } from "../../Components/RoomChatContext"
import ShowRoomChatFallbackLoading from "./ShowRoomChatFallbackLoading"
import ShowRoomChatsFallbackNotFound from "./ShowRoomChatsFallbackNotFound"

const ShowRoomChatFallbacks: FC = ({ children }) => {
  const error = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { error } }) => error
  )

  const isLoading = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { isLoading, data } }) => isLoading || !data
  )

  if (isLoading) {
    return <ShowRoomChatFallbackLoading />
  }

  if (error) {
    return <ShowRoomChatsFallbackNotFound />
  }

  return <>{children}</>
}

export default ShowRoomChatFallbacks
