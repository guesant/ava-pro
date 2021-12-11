import { IMessageAreaContact } from "@ava-pro/crawlers/lib/Typings/IMessageAreaContact"
import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Avatar from "@mui/material/Avatar"
import Badge from "@mui/material/Badge"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC } from "react"

type IContactCardProps = {
  contact: IMessageAreaContact

  showOnlineStatus?: boolean
  showLastChatMessage?: boolean
  showUnreadBadge?: boolean

  divider?: boolean
}

const ContactCard: FC<IContactCardProps> = ({
  contact,
  divider,
  showOnlineStatus,
  showLastChatMessage,
  showUnreadBadge
}) => {
  const isOnlineBadgeVisible = showOnlineStatus && contact.isonline

  const isUnreadBadgeVisible = showUnreadBadge && !contact.isread

  return (
    <ListItem button disableRipple divider={divider} title={contact.fullname}>
      <ListItemAvatar>
        <Badge
          variant="dot"
          color="success"
          overlap="circular"
          invisible={!isOnlineBadgeVisible}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar
            src={contact.profileimageurlsmall}
            alt={getMessage(
              "component_contactCard_profilePicture_alt",
              contact.fullname
            )}
          />
        </Badge>
      </ListItemAvatar>

      <ListItemText>
        <Typography noWrap>{contact.fullname}</Typography>

        {showLastChatMessage && (
          <Typography noWrap variant={"body2"}>
            <span style={{ fontWeight: "bold" }}>
              {contact.sentfromcurrentuser
                ? getMessage("component_contactCard_lastMessage_sentBy_me")
                : ""}
            </span>

            {contact.lastmessage}
          </Typography>
        )}
      </ListItemText>

      {isUnreadBadgeVisible && (
        <ListItemSecondaryAction style={{ marginRight: "16px" }}>
          <Badge color="primary" badgeContent={contact.unreadcount} />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

export default ContactCard
