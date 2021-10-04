import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Fragment, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import ExtensionService from "../../../../../services/ExtensionService";
import { IRoomCourse } from "../../../../../typings/IRoom";
import { ViewRoomCoursesContext } from "./ViewRoomCoursesContext";

const ViewRoomCoursesItem: React.FC<{ course: IRoomCourse }> = ({ course }) => {
  const handleCourseClick = useCallback((courseUrl: string) => {
    ExtensionService.openUrl(courseUrl);
  }, []);

  return (
    <Fragment key={course.courseId}>
      <ListItem onClick={() => handleCourseClick(course.url)} button>
        <Typography noWrap>{course.name}</Typography>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

export const ViewRoomCourses = () => {
  const courses = useContextSelector(
    ViewRoomCoursesContext,
    ({ courses }) => courses
  );

  return (
    <div>
      <List>
        {courses.map((course) => (
          <ViewRoomCoursesItem course={course} key={course.courseId} />
        ))}
      </List>
    </div>
  );
};
