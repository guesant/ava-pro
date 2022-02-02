import { IGetQueriedCoursesSortFn } from "../interfaces"

export const courseLastAccessSort: IGetQueriedCoursesSortFn = (a, b) =>
  (b.lastVisit ?? 0) - (a.lastVisit ?? 0)
