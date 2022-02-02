import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Avatar from "@mui/material/Avatar"
import Badge from "@mui/material/Badge"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC } from "react"

type IContact = {
  isonline?: boolean

  fullname: string

  profileimageurlsmall: string
}

type IContactCardProps = {
  contact: IContact

  showOnlineStatus?: boolean

  divider?: boolean
}

const ContactCard: FC<IContactCardProps> = ({
  contact,
  divider,
  showOnlineStatus
}) => {
  const isOnlineBadgeVisible = showOnlineStatus && contact.isonline

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
      </ListItemText>
    </ListItem>
  )
}

export default ContactCard
