import { IGetEnrolledCoursesByTimelineClassificationCourseDto } from "../get-enrolled-courses-by-timeline-classification/interfaces/dtos/IGetEnrolledCoursesByTimelineClassificationCourseDto"
import { IExtractedCourseSlimDto } from "./interfaces"

export const getSlimCourse = (
  course: IGetEnrolledCoursesByTimelineClassificationCourseDto
): IExtractedCourseSlimDto => ({
  url: course.viewurl,
  name: course.fullname,
  courseId: String(course.id)
})
