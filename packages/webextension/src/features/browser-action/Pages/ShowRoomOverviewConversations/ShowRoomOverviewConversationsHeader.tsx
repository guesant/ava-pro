import ShowRoomOverviewHeaderSlot from "../ShowRoomOverview/ShowRoomOverviewHeaderSlot"
import ShowRoomOverviewConversationsHeaderRefresh from "./ShowRoomOverviewConversationsHeaderRefresh"
import ShowRoomOverviewConversationsHeaderSearch from "./ShowRoomOverviewConversationsHeaderSearch"

const ShowRoomOverviewConversationsHeader = () => (
  <>
    <ShowRoomOverviewHeaderSlot>
      <ShowRoomOverviewConversationsHeaderRefresh />
      <ShowRoomOverviewConversationsHeaderSearch />
    </ShowRoomOverviewHeaderSlot>
  </>
)

export default ShowRoomOverviewConversationsHeader
