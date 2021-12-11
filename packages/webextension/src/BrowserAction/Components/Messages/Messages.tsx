import { IMessageAreaMessage } from "@ava-pro/crawlers/lib/Typings/IMessageAreaMessage"
import Box from "@mui/material/Box"
import { FC } from "react"
import Message from "../Message/Message"
import * as classes from "./Messages.module.css"

type IMessagesProps = {
  messages: IMessageAreaMessage[]
}

const Messages: FC<IMessagesProps> = ({ messages }) => {
  return (
    <Box
      className={classes.messages}
      sx={{ rowGap: 1.25, columnGap: 1.5, px: 1.5, py: 1.125 }}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Box>
  )
}

export default Messages
