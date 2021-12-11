import { useContextSelector } from "use-context-selector"
import CourseList from "../../Components/CourseList/CourseList"
import PageContent from "../../Components/PageContent/PageContent"
import { RoomCoursesContext } from "../../Components/RoomCoursesContext"
import { useFeedbackFetchCoursesQuery } from "../../Hooks/useFeedbackFetchCoursesQuery"

const ShowRoomOverviewCoursesContent = () => {
  const courses = useContextSelector(
    RoomCoursesContext,
    ({ courses }) => courses
  )

  useFeedbackFetchCoursesQuery()

  return (
    <PageContent spacing={false}>
      <CourseList keepTrailingDivider={false} courses={courses} />
    </PageContent>
  )
}

export default ShowRoomOverviewCoursesContent
