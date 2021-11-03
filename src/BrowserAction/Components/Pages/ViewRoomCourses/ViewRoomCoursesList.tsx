import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import StorageRoomsService from "../../../../services/StorageRoomsService";
import { ViewRoomCoursesContext } from "./ViewRoomCoursesContext";
import ViewRoomCoursesListItem from "./ViewRoomCoursesListItem";

export const toggleCoursePinState = (courseUrl: string) =>
  StorageRoomsService.updateCourse(courseUrl, (course) => {
    course.meta = course.meta ?? {};
    course.meta.pinned = !course.meta.pinned;
  });

const ViewRoomCoursesList = () => {
  const courses = useContextSelector(
    ViewRoomCoursesContext,
    ({ courses }) => courses
  );

  const pinnedCourses = useMemo(
    () => courses.filter((i) => i.meta?.pinned),
    [courses]
  );

  const notPinnedCourses = useMemo(
    () => courses.filter((i) => !i.meta?.pinned),
    [courses]
  );

  return (
    <div>
      <List>
        {pinnedCourses.length > 0 && <ListSubheader>Fixados</ListSubheader>}

        {pinnedCourses.map((course) => (
          <ViewRoomCoursesListItem course={course} key={course.courseId} />
        ))}

        {pinnedCourses.length > 0 && notPinnedCourses.length > 0 && (
          <ListSubheader>Soltos</ListSubheader>
        )}

        {notPinnedCourses.map((course) => (
          <ViewRoomCoursesListItem course={course} key={course.courseId} />
        ))}
      </List>
    </div>
  );
};

export default ViewRoomCoursesList;
