import Page from "../../Components/Page/Page"
import { RoomCachedCoursesContextProvider } from "../../Components/RoomCachedCoursesContext"
import ShowRoomSearchCoursesContent from "./ShowRoomSearchCoursesContent"
import { ShowRoomSearchCoursesContextProvider } from "./ShowRoomSearchCoursesContext"
import ShowRoomSearchCoursesHeader from "./ShowRoomSearchCoursesHeader"

const ShowRoomSearchCourses = () => (
  <RoomCachedCoursesContextProvider>
    <ShowRoomSearchCoursesContextProvider>
      <Page>
        <ShowRoomSearchCoursesHeader />
        <ShowRoomSearchCoursesContent />
      </Page>
    </ShowRoomSearchCoursesContextProvider>
  </RoomCachedCoursesContextProvider>
)

export default ShowRoomSearchCourses
