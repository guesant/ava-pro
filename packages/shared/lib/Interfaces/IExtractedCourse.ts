import { IExtractedCourseSlim } from "./IExtractedCourseSlim"

export type IExtractedCourse = IExtractedCourseSlim & {
  isPinned: boolean
  lastVisit: null | number
}
