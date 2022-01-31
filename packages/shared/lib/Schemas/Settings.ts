import { defaulted, enums, object, type } from "superstruct"
import { ICoursesOrderBy } from "../Interfaces/ICoursesOrderBy"
import { IFilterCoursesByStatus } from "../Interfaces/IFilterCoursesByStatus"
import { IPaletteMode } from "../Interfaces/IPaletteMode"
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
    ),

    palette: defaulted(
      object({
        mode: defaulted(
          enums([IPaletteMode.DARK, IPaletteMode.LIGHT]),
          () => IPaletteMode.LIGHT
        )
      }),
      () => ({})
    )
  }),
  () => ({})
)
