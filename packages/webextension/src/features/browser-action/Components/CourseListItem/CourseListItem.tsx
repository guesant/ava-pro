import { IRoomCacheCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room/cache/courses/course"
import PushPinIcon from "@mui/icons-material/PushPin"
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC, useCallback } from "react"
import { useRoomCoursePinState } from "../useRoomCoursePinState"
import * as classes from "./CourseListItem.module.css"

const CourseListItem: FC<{ course: IRoomCacheCourse }> = ({ course }) => {
  const { isPinned, togglePinState } = useRoomCoursePinState(course)

  const handleClick = useCallback(() => {
    window.open(course.viewurl)
  }, [course.viewurl])

  return (
    <ListItem
      button
      divider
      disableRipple
      onClick={handleClick}
      title={course.fullname}
      classes={{
        container: [classes.item, isPinned ? classes.pinned : null].join(" ")
      }}
    >
      <ListItemText>
        <Typography noWrap>{course.fullname}</Typography>
      </ListItemText>
      <ListItemSecondaryAction className={classes.secondaryActions}>
        <IconButton onClick={togglePinState}>
          {isPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CourseListItem
