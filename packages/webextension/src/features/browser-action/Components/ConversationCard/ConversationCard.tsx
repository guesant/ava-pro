import { features } from "@ava-pro/moodle-client-js"
import { IGetConversationsConversationTypeDto } from "@ava-pro/moodle-client-js/lib/features/message"
import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Avatar from "@mui/material/Avatar"
import Badge from "@mui/material/Badge"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { sanitize } from "dompurify"
import { FC, useMemo } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../RoomAuthedContext"

type IConversationCardProps = {
  conversation: features.message.IGetConversationsConversationDto

  showOnlineStatus?: boolean

  showLastChatMessage?: boolean

  showUnreadBadge?: boolean

  divider?: boolean
}

const getHTMLTextContent = (text: string) =>
  sanitize(text, { ALLOWED_TAGS: [] })

const ConversationCardLastMessage: FC<{
  lastMessage: features.message.IGetConversationsMessageDto
}> = ({ lastMessage }) => {
  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const lastMessageMessageTextContent = useMemo(
    () => getHTMLTextContent(lastMessage.text),
    [lastMessage.text]
  )

  const lastMessageAuthorName =
    String(lastMessage.useridfrom) === String(userId)
      ? getMessage("component_conversationCard_lastMessage_sentBy_me")
      : ""

  const lastMessageAuthorSpan = `<span style="font-weight: bold">${lastMessageAuthorName}</span>`

  const textPreview = lastMessageAuthorName + lastMessageMessageTextContent
  const htmlPreview = lastMessageAuthorSpan + lastMessageMessageTextContent

  return (
    <Typography
      component={"div"}
      noWrap
      variant={"body2"}
      title={textPreview}
      dangerouslySetInnerHTML={{ __html: htmlPreview }}
    />
  )
}

const ConversationCard: FC<IConversationCardProps> = ({
  conversation,
  divider,
  showOnlineStatus,
  showLastChatMessage,
  showUnreadBadge
}) => {
  const name = conversation.name ?? conversation.id ?? "Unknown"

  const isOnlineBadgeVisible =
    showOnlineStatus &&
    conversation.type === IGetConversationsConversationTypeDto.PRIVATE &&
    conversation.members[0].isonline

  const isUnreadBadgeVisible = showUnreadBadge && !conversation.isread

  const lastMessage = conversation.messages[0]

  return (
    <ListItem button disableRipple divider={divider} title={name}>
      <ListItemAvatar>
        <Badge
          variant="dot"
          color="success"
          overlap="circular"
          invisible={!isOnlineBadgeVisible}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar
            src={conversation.imageurl!}
            alt={getMessage(
              "component_conversationCard_profilePicture_alt",
              name
            )}
          />
        </Badge>
      </ListItemAvatar>

      <ListItemText>
        <Typography noWrap>{name}</Typography>
        {lastMessage && showLastChatMessage && (
          <ConversationCardLastMessage lastMessage={lastMessage} />
        )}
      </ListItemText>

      {isUnreadBadgeVisible && (
        <ListItemSecondaryAction style={{ marginRight: "16px" }}>
          <Badge color="primary" badgeContent={conversation.unreadcount} />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

export default ConversationCard
