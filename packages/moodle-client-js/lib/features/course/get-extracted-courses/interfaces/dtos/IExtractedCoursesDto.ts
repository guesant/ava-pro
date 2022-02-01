import { IExtractedCourseSlimDto } from "./IExtractedCourseSlimDto"

export type IExtractedCoursesDto<
  T extends IExtractedCourseSlimDto = IExtractedCourseSlimDto
> = {
  PAST: T[]

  IN_PROGRESS: T[]

  FUTURE: T[]
}
