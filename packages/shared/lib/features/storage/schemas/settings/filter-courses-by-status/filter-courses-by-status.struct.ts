import { defaulted, enums } from "superstruct"
import { IFilterCoursesByStatus } from "./interfaces"

export const FilterCoursesByStatusStruct = defaulted(
  enums([
    IFilterCoursesByStatus.PAST,
    IFilterCoursesByStatus.IN_PROGRESS,
    IFilterCoursesByStatus.FUTURE,
    IFilterCoursesByStatus.ALL
  ]),
  () => IFilterCoursesByStatus.IN_PROGRESS
)
