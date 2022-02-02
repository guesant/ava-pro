import { IGetQueriedCoursesFilterFn } from "../interfaces"

export const courseFutureFilter: IGetQueriedCoursesFilterFn =
  (now) => (course) =>
    now < (course.startdate ?? -Infinity)
