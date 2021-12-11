import { RoomChatsContextProvider } from "../../Components/RoomChatsContext"
import RoomGuardNeedsAuth from "../../Components/RoomGuardNeedsAuth/RoomGuardNeedsAuth"
import ShowRoomOverviewChatsContent from "./ShowRoomOverviewChatsContent"
import ShowRoomOverviewChatsFeedbacks from "./ShowRoomOverviewChatsFeedbacks"
import ShowRoomOverviewChatsHeader from "./ShowRoomOverviewChatsHeader"

const ShowRoomOverviewChats = () => (
  <RoomChatsContextProvider>
    <ShowRoomOverviewChatsHeader />
    <RoomGuardNeedsAuth wrapFeedback>
      <ShowRoomOverviewChatsFeedbacks>
        <ShowRoomOverviewChatsContent />
      </ShowRoomOverviewChatsFeedbacks>
    </RoomGuardNeedsAuth>
  </RoomChatsContextProvider>
)

export default ShowRoomOverviewChats
