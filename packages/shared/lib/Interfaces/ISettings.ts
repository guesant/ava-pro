import { ICoursesOrderBy } from "./ICoursesOrderBy"
import { IFilterCoursesByStatus } from "./IFilterCoursesByStatus"
import { IRoom } from "./IRoom"

export type ISettings = {
  selectedRoom: IRoom["id"] | null
  coursesOrderBy: ICoursesOrderBy
  filterCoursesByStatus: IFilterCoursesByStatus
}
