import { IRoom } from "../../rooms/room/interfaces/IRoom"
import { ICoursesOrderBy } from "../courses-order-by/interfaces/ICoursesOrderBy"
import { IFilterCoursesByStatus } from "../filter-courses-by-status/interfaces/IFilterCoursesByStatus"
import { IPaletteMode } from "../palette/mode/IPaletteMode"

export type ISettings = {
  selectedRoom: IRoom["id"] | null

  coursesOrderBy: ICoursesOrderBy

  filterCoursesByStatus: IFilterCoursesByStatus

  palette: {
    mode: IPaletteMode
  }
}
