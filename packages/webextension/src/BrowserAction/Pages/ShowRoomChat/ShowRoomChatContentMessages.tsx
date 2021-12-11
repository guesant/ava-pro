import Box from "@mui/material/Box"
import { useCallback, useEffect, useRef } from "react"
import { useContextSelector } from "use-context-selector"
import Messages from "../../Components/Messages/Messages"
import { RoomChatContext } from "../../Components/RoomChatContext"

const ShowRoomChatContentMessages = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  const messages = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { data } }) => data?.messages || []
  )

  const scrollToBottom = useCallback(() => {
    const element = divRef.current

    if (element) {
      element.scrollTo(element.scrollLeft, element.scrollHeight)
    }
  }, [divRef, messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  if (messages.length === 0) {
    return null
  }

  return (
    <Box
      ref={divRef}
      onLoad={() => scrollToBottom()}
      sx={{ overflow: "auto", height: "100%", width: "100%" }}
    >
      <Messages messages={messages} />
    </Box>
  )
}

export default ShowRoomChatContentMessages
