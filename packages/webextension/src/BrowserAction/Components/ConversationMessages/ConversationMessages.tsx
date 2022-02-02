import { features } from "@ava-pro/moodle-client-js"
import Box from "@mui/material/Box"
import { FC } from "react"
import ConversationMessage from "../ConversationMessage/ConversationMessage"
import * as classes from "./ConversationMessages.module.css"

type IConversationMessagesProps = {
  // XXX
  showMessageAuthorHeader?: boolean

  members?: features.message.IGetConversationMessagesMemberDto[]

  messages: features.message.IGetConversationMessagesMessageDto[]
}

const ConversationMessages: FC<IConversationMessagesProps> = ({
  messages,
  members,
  showMessageAuthorHeader = false
}) => {
  return (
    <Box
      className={classes.messages}
      sx={{ rowGap: 1.25, columnGap: 1.5, px: 1.5, py: 1.125 }}
    >
      {messages.map((message) => (
        <ConversationMessage
          key={message.id}
          members={members}
          message={message}
          showMessageAuthorHeader={showMessageAuthorHeader}
        />
      ))}
    </Box>
  )
}

export default ConversationMessages
