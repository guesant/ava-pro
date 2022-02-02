import { IGetEnrolledCoursesByTimelineClassificationCourseDto } from "./dtos/IGetEnrolledCoursesByTimelineClassificationCourseDto"

export type IGetEnrolledCoursesByTimelineClassificationResponse = {
  courses: IGetEnrolledCoursesByTimelineClassificationCourseDto[]
  nextoffset: number
}
