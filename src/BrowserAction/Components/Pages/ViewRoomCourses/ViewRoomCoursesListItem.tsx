import React, { Fragment, useCallback } from "react";
import { IRoomCourse } from "../../../../typings/IRoom";
import ExtensionService from "../../../../services/ExtensionService";
import ListItem from "@mui/material/ListItem";
import classes from "../ViewRoom/ViewRoom.module.css";
import Typography from "@mui/material/Typography";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Divider from "@mui/material/Divider";
import { toggleCoursePinState } from "./ViewRoomCoursesList";

type IViewRoomCoursesListItemProps = { course: IRoomCourse };

const ViewRoomCoursesListItem: React.FC<IViewRoomCoursesListItemProps> = ({
  course,
}) => {
  const handleCourseClick = useCallback((courseUrl: string) => {
    ExtensionService.openUrl(courseUrl);
  }, []);

  const handleTooglePinStateClick = useCallback(
    () => toggleCoursePinState(course.url),
    [course.url]
  );

  const isPinned = course.meta?.pinned ?? false;

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
            [classes.autoHide]: !isPinned,
          })}
        >
          <IconButton onClick={handleTooglePinStateClick}>
            {isPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

export default ViewRoomCoursesListItem;
