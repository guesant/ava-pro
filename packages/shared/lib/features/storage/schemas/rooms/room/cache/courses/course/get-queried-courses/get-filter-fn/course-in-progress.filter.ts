import { IGetQueriedCoursesFilterFn } from "../interfaces"

export const courseInProgressFilter: IGetQueriedCoursesFilterFn =
  (now) => (course) =>
    now >= (course.startdate ?? -Infinity) &&
    (course.enddate === 0 || now <= (course.enddate ?? Infinity))
