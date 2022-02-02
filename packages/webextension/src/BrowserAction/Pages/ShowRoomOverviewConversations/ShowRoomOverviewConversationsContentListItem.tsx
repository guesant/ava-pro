import { features } from "@ava-pro/moodle-client-js"
import { FC } from "react"
import ConversationCard from "../../Components/ConversationCard/ConversationCard"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

type IShowRoomOverviewChatsContentListItemProps = {
  conversation: features.message.IGetConversationsConversationDto
}

const ShowRoomOverviewConversationsContentListItem: FC<
  IShowRoomOverviewChatsContentListItemProps
> = ({ conversation }) => (
  <AppRouteLink
    route={appRoutes.viewRoomConversation}
    params={{ conversationId: conversation.id }}
  >
    <ConversationCard
      divider
      showOnlineStatus
      showUnreadBadge
      showLastChatMessage
      conversation={conversation}
    />
  </AppRouteLink>
)

export default ShowRoomOverviewConversationsContentListItem
