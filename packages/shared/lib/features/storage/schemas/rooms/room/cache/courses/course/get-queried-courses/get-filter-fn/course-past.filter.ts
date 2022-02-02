import { IGetQueriedCoursesFilterFn } from "../interfaces"

export const coursePastFilter: IGetQueriedCoursesFilterFn = (now) => (course) =>
  course.enddate !== 0 && now > (course.enddate ?? Infinity)
