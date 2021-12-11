import { IExtractedCourse } from "@ava-pro/shared/lib/Interfaces/IExtractedCourse"
import PushPinIcon from "@mui/icons-material/PushPin"
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC, useCallback } from "react"
import { useCoursePinState } from "../../Hooks/useCoursePinState"
import * as classes from "./CourseListItem.module.css"

const CourseListItem: FC<{ course: IExtractedCourse }> = ({ course }) => {
  const { isPinned, togglePinState } = useCoursePinState(course)

  const handleClick = useCallback(() => {
    window.open(course.url)
  }, [course.url])

  return (
    <ListItem
      button
      divider
      disableRipple
      title={course.name}
      onClick={handleClick}
      classes={{
        container: [classes.item, isPinned ? classes.pinned : null].join(" ")
      }}
    >
      <ListItemText>
        <Typography noWrap>{course.name}</Typography>
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
