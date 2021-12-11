import { IMessageAreaContact } from "@ava-pro/crawlers/lib/Typings/IMessageAreaContact"
import { FC } from "react"
import { Link } from "react-router-dom"
import ContactCard from "../../Components/ContactCard/ContactCard"

type IShowRoomOverviewChatsContentListItemProps = {
  contact: IMessageAreaContact
}

const ShowRoomOverviewChatsContentListItem: FC<
  IShowRoomOverviewChatsContentListItemProps
> = ({ contact }) => (
  <Link to={`${contact.userid}`}>
    <ContactCard
      contact={contact}
      divider
      showLastChatMessage
      showOnlineStatus
      showUnreadBadge
    />
  </Link>
)

export default ShowRoomOverviewChatsContentListItem
