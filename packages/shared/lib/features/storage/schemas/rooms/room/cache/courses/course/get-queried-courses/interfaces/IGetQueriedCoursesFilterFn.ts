import { IGetQueriedCoursesCourse } from "./IGetQueriedCoursesCourse"

export type IGetQueriedCoursesFilterFn = (
  now: number
) => (course: IGetQueriedCoursesCourse) => boolean
