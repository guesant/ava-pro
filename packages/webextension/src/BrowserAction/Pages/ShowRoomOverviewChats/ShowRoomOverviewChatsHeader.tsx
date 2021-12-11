import ShowRoomOverviewHeaderSlot from "../ShowRoomOverview/ShowRoomOverviewHeaderSlot"
import ShowRoomOverviewChatsHeaderRefresh from "./ShowRoomOverviewChatsHeaderRefresh"
import ShowRoomOverviewChatsHeaderSearch from "./ShowRoomOverviewChatsHeaderSearch"

const ShowRoomOverviewChatsHeader = () => (
  <>
    <ShowRoomOverviewHeaderSlot>
      <ShowRoomOverviewChatsHeaderRefresh />
      <ShowRoomOverviewChatsHeaderSearch />
    </ShowRoomOverviewHeaderSlot>
  </>
)
export default ShowRoomOverviewChatsHeader
