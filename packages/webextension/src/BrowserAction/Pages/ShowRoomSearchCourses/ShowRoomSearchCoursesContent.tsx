import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Typography from "@mui/material/Typography"
import { useContextSelector } from "use-context-selector"
import CourseList from "../../Components/CourseList/CourseList"
import PageContent from "../../Components/PageContent/PageContent"
import { ShowRoomSearchCoursesContext } from "./ShowRoomSearchCoursesContext"

const ShowRoomSearchCoursesContent = () => {
  const searchText = useContextSelector(
    ShowRoomSearchCoursesContext,
    ({ searchText }) => searchText
  )

  const filteredCourses = useContextSelector(
    ShowRoomSearchCoursesContext,
    ({ filteredCourses }) => filteredCourses
  )

  if (!searchText) {
    return <PageContent>{/* nothing to show :) */}</PageContent>
  }

  if (filteredCourses.length === 0) {
    return (
      <PageContent>
        <Typography>{getMessage("feedback_noResultsFound")}</Typography>
      </PageContent>
    )
  }

  return (
    <PageContent>
      <CourseList courses={filteredCourses} />
    </PageContent>
  )
}

export default ShowRoomSearchCoursesContent
