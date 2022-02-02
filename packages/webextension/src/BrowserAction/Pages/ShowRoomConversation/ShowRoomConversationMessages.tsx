import { IGetConversationsConversationTypeDto } from "@ava-pro/moodle-client-js/lib/features/message"
import Box from "@mui/material/Box"
import { useCallback, useEffect, useRef } from "react"
import { useContextSelector } from "use-context-selector"
import ConversationMessages from "../../Components/ConversationMessages/ConversationMessages"
import { RoomChatContext } from "../../Components/RoomChatContext"

const ShowRoomConversationMessages = () => {
  const divRef = useRef<HTMLDivElement | null>(null)

  const isGroup = useContextSelector(
    RoomChatContext,
    ({ infoQuery: { data } }) =>
      data?.type === IGetConversationsConversationTypeDto.GROUP
  )

  const members = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { data } }) => data?.members || []
  )

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

  useEffect(() => scrollToBottom(), [scrollToBottom])

  if (messages.length === 0) {
    return null
  }

  return (
    <Box
      ref={divRef}
      onLoad={() => scrollToBottom()}
      sx={{ overflow: "auto", height: "100%", width: "100%" }}
    >
      <ConversationMessages
        members={members}
        messages={messages}
        showMessageAuthorHeader={isGroup}
      />
    </Box>
  )
}

export default ShowRoomConversationMessages
