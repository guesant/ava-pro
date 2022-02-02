import { IFilterCoursesByStatus } from "../../../../../../../settings/filter-courses-by-status"
import { courseFutureFilter } from "./course-future.filter"
import { courseIdentityFilter } from "./course-identity.filter"
import { courseInProgressFilter } from "./course-in-progress.filter"
import { coursePastFilter } from "./course-past.filter"

export const getFilterFn = (status: IFilterCoursesByStatus) => {
  switch (status) {
    case IFilterCoursesByStatus.PAST:
      return coursePastFilter

    case IFilterCoursesByStatus.IN_PROGRESS:
      return courseInProgressFilter

    case IFilterCoursesByStatus.FUTURE:
      return courseFutureFilter

    case IFilterCoursesByStatus.ALL:
    default:
      return courseIdentityFilter
  }
}
