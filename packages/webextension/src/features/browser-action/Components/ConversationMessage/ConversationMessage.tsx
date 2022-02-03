import { features } from "@ava-pro/moodle-client-js"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import { sanitize } from "dompurify"
import { FC, useMemo } from "react"
import { useContextSelector } from "use-context-selector"
import { useLocaledTime } from "../../Hooks/useLocaledTime"
import { RoomAuthedContext } from "../RoomAuthedContext"
import * as styles from "./ConversationMessage.module.css"

type IConversationMessageProps = {
  message: features.message.IGetConversationMessagesMessageDto

  members?: features.message.IGetConversationMessagesMemberDto[]

  showMessageAuthorHeader?: boolean
}

const ConversationMessageHeader: FC<
  Pick<IConversationMessageProps, "members" | "message">
> = ({ message, members }) => {
  const messageAuthor = useMemo(
    () =>
      members!.find(
        (member) => String(member.id) === String(message.useridfrom)
      ),
    [members, message]
  )

  if (!messageAuthor) {
    return null
  }

  return (
    <>
      <div>
        <Typography>{messageAuthor.fullname}</Typography>

        <Divider sx={{ mt: 0.25, mb: 0.5 }} />
      </div>
    </>
  )
}

const ConversationMessage: FC<IConversationMessageProps> = ({
  message,
  members,
  showMessageAuthorHeader
}) => {
  const { getLocaledTime } = useLocaledTime()

  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const sanitizedMessageText = useMemo(
    () => sanitize(message.text, { USE_PROFILES: { html: true } }),
    [message.text]
  )

  const timeSent = useMemo(
    () => getLocaledTime(message.timecreated * 1000),
    [getLocaledTime, message.timecreated]
  )

  const wasSentByMe = userId === message.useridfrom

  return (
    <>
      <Box
        className={[
          styles.message,
          userId === message.useridfrom ? styles.byMe : styles.byContact
        ].join(" ")}
        sx={(theme) => ({
          borderColor: theme.palette.action.disabled,
          backgroundColor: wasSentByMe
            ? theme.palette.action.hover
            : theme.palette.action.selected
        })}
      >
        {showMessageAuthorHeader && !wasSentByMe && members && (
          <ConversationMessageHeader message={message} members={members} />
        )}

        <div
          style={{ wordBreak: "break-all" }}
          dangerouslySetInnerHTML={{ __html: sanitizedMessageText }}
        />

        <Typography
          component={"p"}
          variant={"caption"}
          sx={{ textAlign: "right", mt: 0.5 }}
        >
          {timeSent}
        </Typography>
      </Box>
    </>
  )
}

export default ConversationMessage
