import { ICoursesOrderBy } from "../../../../../../settings/courses-order-by"
import { IFilterCoursesByStatus } from "../../../../../../settings/filter-courses-by-status"
import { IRoomCacheCourse } from "../interfaces"
import { getFilterFn } from "./get-filter-fn"
import { getSortFn } from "./get-sort-fn"
import { IGetQueriedCoursesCourse } from "./interfaces"

export const getQueriedCourses = (
  allCoursesList: IRoomCacheCourse[],
  orderBy: ICoursesOrderBy,
  filterByStatus: IFilterCoursesByStatus,
  now = Date.now()
): IGetQueriedCoursesCourse[] =>
  allCoursesList
    .filter(getFilterFn(filterByStatus)(now / 1000))
    .sort(getSortFn(orderBy))
