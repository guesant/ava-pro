import { RoomCachedCoursesContextProvider } from "../../Components/RoomCachedCoursesContext"
import ShowRoomOverviewCoursesContent from "./ShowRoomOverviewCoursesContent"
import ShowRoomOverviewCoursesFallback from "./ShowRoomOverviewCoursesFallback"
import ShowRoomOverviewCoursesHeader from "./ShowRoomOverviewCoursesHeader"

const ShowRoomOverviewCoursesPage = () => (
  <RoomCachedCoursesContextProvider>
    <ShowRoomOverviewCoursesHeader />
    <ShowRoomOverviewCoursesFallback>
      <ShowRoomOverviewCoursesContent />
    </ShowRoomOverviewCoursesFallback>
  </RoomCachedCoursesContextProvider>
)

export default ShowRoomOverviewCoursesPage
