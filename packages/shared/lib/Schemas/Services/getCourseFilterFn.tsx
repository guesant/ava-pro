import { IExtractedCourseSlim } from "../../Interfaces/IExtractedCourseSlim"
import { IFilterCoursesByStatus } from "../../Interfaces/IFilterCoursesByStatus"
import { IPageExtractedCourses } from "../../Interfaces/IPageExtractedCourses"

export const getCourseFilterFn =
  (filterCoursesBy: IFilterCoursesByStatus) =>
  <T extends IExtractedCourseSlim>(
    pageCourses: IPageExtractedCourses<T> | null
  ): T[] => {
    if (!pageCourses) {
      return []
    }
    switch (filterCoursesBy) {
      case IFilterCoursesByStatus.PAST:
        return pageCourses.PAST
      case IFilterCoursesByStatus.IN_PROGRESS:
        return pageCourses.IN_PROGRESS
      case IFilterCoursesByStatus.FUTURE:
        return pageCourses.FUTURE
    }
  }
