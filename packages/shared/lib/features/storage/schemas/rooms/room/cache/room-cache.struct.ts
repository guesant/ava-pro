import { defaulted, type } from "superstruct"
import { RoomCacheCoursesStruct } from "./courses"

export const RoomCacheStruct = defaulted(
  type({
    courses: RoomCacheCoursesStruct
  }),
  () => ({})
)
