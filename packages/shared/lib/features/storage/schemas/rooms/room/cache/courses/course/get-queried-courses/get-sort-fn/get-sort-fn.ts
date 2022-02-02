import { ICoursesOrderBy } from "../../../../../../../settings/courses-order-by"
import { courseByNameSort } from "./course-by-name.sort"
import { courseLastAccessSort } from "./course-last-access.sort"

export const getSortFn = (orderBy: ICoursesOrderBy) => {
  switch (orderBy) {
    case ICoursesOrderBy.LAST_VISIT:
      return courseLastAccessSort

    case ICoursesOrderBy.NAME:
    default:
      return courseByNameSort
  }
}
