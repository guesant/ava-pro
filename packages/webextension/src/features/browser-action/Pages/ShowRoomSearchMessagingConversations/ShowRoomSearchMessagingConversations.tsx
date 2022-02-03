import ShowRoomSearchMessagingConversationsContent from "./ShowRoomSearchMessagingConversationsContent"
import { ShowRoomSearchChatsConversationsContextProvider } from "./ShowRoomSearchMessagingConversationsContext"
import ShowRoomSearchMessagingConversationsFallbacks from "./ShowRoomSearchMessagingConversationsFallbacks"

const ShowRoomSearchMessagingConversations = () => (
  <ShowRoomSearchChatsConversationsContextProvider>
    <ShowRoomSearchMessagingConversationsFallbacks>
      <ShowRoomSearchMessagingConversationsContent />
    </ShowRoomSearchMessagingConversationsFallbacks>
  </ShowRoomSearchChatsConversationsContextProvider>
)

export default ShowRoomSearchMessagingConversations
