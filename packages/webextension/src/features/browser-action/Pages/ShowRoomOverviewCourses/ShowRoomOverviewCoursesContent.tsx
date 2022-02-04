import { useContextSelector } from "use-context-selector"
import CourseList from "../../Components/CourseList/CourseList"
import PageContent from "../../Components/PageContent/PageContent"
import { RoomCoursesContext } from "../../Components/RoomCoursesContext"

const ShowRoomOverviewCoursesContent = () => {
  const courses = useContextSelector(
    RoomCoursesContext,
    ({ courses }) => courses
  )

  return (
    <PageContent spacing={false}>
      <CourseList keepTrailingDivider={false} courses={courses} />
    </PageContent>
  )
}

export default ShowRoomOverviewCoursesContent
