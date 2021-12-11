import { IExtractedCourse } from "./IExtractedCourse"
import { IExtractedCourseSlim } from "./IExtractedCourseSlim"

export type IPageExtractedCourses<
  T extends IExtractedCourseSlim = IExtractedCourse
> = {
  PAST: T[]
  IN_PROGRESS: T[]
  FUTURE: T[]
}
