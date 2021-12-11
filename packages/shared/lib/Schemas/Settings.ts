import { defaulted, enums, type } from "superstruct"
import { ICoursesOrderBy } from "../Interfaces/ICoursesOrderBy"
import { IFilterCoursesByStatus } from "../Interfaces/IFilterCoursesByStatus"
import { SettingsSelectedRoom } from "./SettingsSelectedRoom"

export const Settings = defaulted(
  type({
    selectedRoom: SettingsSelectedRoom,
    coursesOrderBy: defaulted(
      enums(Object.values(ICoursesOrderBy as any)),
      () => ICoursesOrderBy.NAME
    ),
    filterCoursesByStatus: defaulted(
      enums(Object.values(IFilterCoursesByStatus as any)),
      () => IFilterCoursesByStatus.IN_PROGRESS
    )
  }),
  () => ({})
)
