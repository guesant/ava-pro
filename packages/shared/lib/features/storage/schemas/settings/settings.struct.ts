import { defaulted, type } from "superstruct"
import { CoursesOrderByStruct } from "./courses-order-by"
import { FilterCoursesByStatusStruct } from "./filter-courses-by-status"
import { PaletteStruct } from "./palette/palette.struct"
import { SelectedRoomStruct } from "./selected-room"

export const SettingsStruct = defaulted(
  type({
    palette: PaletteStruct,

    selectedRoom: SelectedRoomStruct,

    coursesOrderBy: CoursesOrderByStruct,

    filterCoursesByStatus: FilterCoursesByStatusStruct
  }),
  () => ({})
)
