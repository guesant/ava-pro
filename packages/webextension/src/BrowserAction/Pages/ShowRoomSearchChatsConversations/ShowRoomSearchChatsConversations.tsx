import ShowRoomSearchChatsConversationsContent from "./ShowRoomSearchChatsConversationsContent"
import { ShowRoomSearchChatsConversationsContextProvider } from "./ShowRoomSearchChatsConversationsContext"
import ShowRoomSearchChatsConversationsFallbacks from "./ShowRoomSearchChatsConversationsFallbacks"

const ShowRoomSearchChatsConversations = () => (
  <ShowRoomSearchChatsConversationsContextProvider>
    <ShowRoomSearchChatsConversationsFallbacks>
      <ShowRoomSearchChatsConversationsContent />
    </ShowRoomSearchChatsConversationsFallbacks>
  </ShowRoomSearchChatsConversationsContextProvider>
)

export default ShowRoomSearchChatsConversations
