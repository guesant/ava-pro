import { RoomConversationsContextProvider } from "../../Components/RoomConversationsContext"
import RoomGuardNeedsAuth from "../../Components/RoomGuardNeedsAuth/RoomGuardNeedsAuth"
import ShowRoomOverviewConversationsContent from "./ShowRoomOverviewConversationsContent"
import ShowRoomOverviewConversationsFeedbacks from "./ShowRoomOverviewConversationsFeedbacks"
import ShowRoomOverviewConversationsHeader from "./ShowRoomOverviewConversationsHeader"

const ShowRoomOverviewConversations = () => (
  <RoomConversationsContextProvider>
    <ShowRoomOverviewConversationsHeader />
    <RoomGuardNeedsAuth wrapFeedback>
      <ShowRoomOverviewConversationsFeedbacks>
        <ShowRoomOverviewConversationsContent />
      </ShowRoomOverviewConversationsFeedbacks>
    </RoomGuardNeedsAuth>
  </RoomConversationsContextProvider>
)

export default ShowRoomOverviewConversations
