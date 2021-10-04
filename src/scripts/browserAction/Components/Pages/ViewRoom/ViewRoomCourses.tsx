import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { Fragment, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import ExtensionService from "../../../../../services/ExtensionService";
import StorageRoomsService from "../../../../../services/StorageRoomsService";
import { IRoomCourse } from "../../../../../typings/IRoom";
import classes from "./ViewRoom.module.css";
import { ViewRoomCoursesContext } from "./ViewRoomCoursesContext";

const toggleCoursePinState = (courseUrl: string) =>
  StorageRoomsService.updateCourse(courseUrl, (course) => {
    course.meta = course.meta ?? {};
    course.meta.pinned = !course.meta.pinned;
  });

const ViewRoomCoursesItem: React.FC<{ course: IRoomCourse }> = ({ course }) => {
  const handleCourseClick = useCallback((courseUrl: string) => {
    ExtensionService.openUrl(courseUrl);
  }, []);

  const handleTooglePinStateClick = useCallback(
    () => toggleCoursePinState(course.url),
    [course.url]
  );

  const pinned = course.meta?.pinned ?? false;

  return (
    <Fragment key={course.courseId}>
      <ListItem
        button
        classes={{ container: classes.item }}
        onClick={() => handleCourseClick(course.url)}
      >
        <Typography noWrap>{course.name}</Typography>
        <ListItemSecondaryAction
          className={clsx(classes.secondaryActions, {
            [classes.hidden]: !pinned,
          })}
        >
          <IconButton onClick={handleTooglePinStateClick}>
            {pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>
        </ListItemSecondaryAction>
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
