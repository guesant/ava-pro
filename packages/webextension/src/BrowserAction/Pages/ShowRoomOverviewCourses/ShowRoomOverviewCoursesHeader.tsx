import ShowRoomOverviewHeaderSlot from "../ShowRoomOverview/ShowRoomOverviewHeaderSlot"
import ShowRoomOverviewCoursesHeaderQuery from "./ShowRoomOverviewCoursesHeaderQuery"
import ShowRoomOverviewCoursesHeaderRefresh from "./ShowRoomOverviewCoursesHeaderRefresh"
import ShowRoomOverviewCoursesHeaderSearch from "./ShowRoomOverviewCoursesHeaderSearch"

const ShowRoomOverviewCoursesHeader = () => (
  <ShowRoomOverviewHeaderSlot>
    <ShowRoomOverviewCoursesHeaderRefresh />
    <ShowRoomOverviewCoursesHeaderSearch />
    <ShowRoomOverviewCoursesHeaderQuery />
  </ShowRoomOverviewHeaderSlot>
)

export default ShowRoomOverviewCoursesHeader
