import { defaulted, enums } from "superstruct"
import { ICoursesOrderBy } from "./interfaces"

export const CoursesOrderByStruct = defaulted(
  enums([ICoursesOrderBy.NAME, ICoursesOrderBy.LAST_VISIT]),
  () => ICoursesOrderBy.NAME
)
