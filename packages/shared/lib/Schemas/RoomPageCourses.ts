import { array, type } from "superstruct"
import { RoomCourse } from "./RoomCourse"

export const RoomPageCourses = type({
  PAST: array(RoomCourse),
  IN_PROGRESS: array(RoomCourse),
  FUTURE: array(RoomCourse)
})
