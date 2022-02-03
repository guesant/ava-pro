import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { IRoomCacheCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room/cache/courses/course"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import { FC, useMemo } from "react"
import CourseListItem from "../CourseListItem/CourseListItem"

type ICourseListProps = {
  courses: IRoomCacheCourse[]
  keepTrailingDivider?: boolean
}

const CourseList: FC<ICourseListProps> = ({
  courses,
  keepTrailingDivider = true
}) => {
  const pinnedCourses = useMemo(
    () => courses.filter((course) => course.isPinned),
    [courses]
  )

  const notPinnedCourses = useMemo(
    () => courses.filter((course) => !course.isPinned),
    [courses]
  )

  const hasPinnedCourses = pinnedCourses.length > 0

  const hasNotPinnedCourses = notPinnedCourses.length > 0

  return (
    <List disablePadding dense>
      {hasPinnedCourses && (
        <>
          <ListSubheader>
            {getMessage("component_courseList_subheader_pinned")}
          </ListSubheader>

          <Divider />

          {pinnedCourses.map((course) => (
            <CourseListItem course={course} key={course.id} />
          ))}
        </>
      )}

      {hasNotPinnedCourses && (
        <>
          {hasPinnedCourses && (
            <ListSubheader>
              {getMessage("component_courseList_subheader_notPinned")}
            </ListSubheader>
          )}

          {!hasPinnedCourses && keepTrailingDivider && <Divider />}

          {notPinnedCourses.map((course) => (
            <CourseListItem course={course} key={course.id} />
          ))}
        </>
      )}
    </List>
  )
}

export default CourseList
