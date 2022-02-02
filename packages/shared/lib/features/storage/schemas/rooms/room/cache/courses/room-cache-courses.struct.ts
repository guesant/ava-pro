import { array, defaulted, nullable } from "superstruct"
import { RoomCacheCourseStruct } from "./course"

export const RoomCacheCoursesStruct = defaulted(
  nullable(array(RoomCacheCourseStruct)),
  () => null
)
