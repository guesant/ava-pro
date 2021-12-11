import {
  IMessageAreaMessage,
  MessagePosition
} from "@ava-pro/crawlers/lib/Typings/IMessageAreaMessage"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { sanitize } from "dompurify"
import { FC, useMemo } from "react"
import MessageBlockTime from "../MessageBlockTime/MessageBlockTime"
import * as styles from "./Message.module.css"

type IMessageProps = {
  message: IMessageAreaMessage
}

const getClassForMessagePosition = (messagePosition: MessagePosition) => {
  switch (messagePosition) {
    case MessagePosition.LEFT:
      return styles.byContact
    case MessagePosition.RIGHT:
      return styles.byMe
  }
}

const Message: FC<IMessageProps> = ({ message }) => {
  const sanitizedHTML = useMemo(
    () => sanitize(message.text, { USE_PROFILES: { html: true } }),
    [message.text]
  )

  return (
    <>
      {message.displayblocktime && (
        <MessageBlockTime blockTime={message.blocktime} />
      )}

      <Box
        className={[
          styles.message,
          getClassForMessagePosition(message.position)
        ].join(" ")}
      >
        <div
          style={{ wordBreak: "break-all" }}
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />

        <Typography
          component={"p"}
          sx={{ textAlign: "right", mt: 0.5 }}
          variant={"caption"}
        >
          {message.timesent}
        </Typography>
      </Box>
    </>
  )
}

export default Message
