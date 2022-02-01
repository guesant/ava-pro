import { MoodleClient } from "../../../MoodleClient"
import { getEnrolledCoursesByTimelineClassification } from "../get-enrolled-courses-by-timeline-classification/get-enrolled-courses-by-timeline-classification"
import { getSlimCourse } from "./get-slim-course"
import { IExtractedCoursesDto } from "./interfaces"

export * from "./interfaces"

export const getExtractedCourses = async (
  client: MoodleClient
): Promise<IExtractedCoursesDto> => {
  const { courses } = await getEnrolledCoursesByTimelineClassification(client, {
    classification: "all"
  })

  const now = Date.now()

  const PAST = courses
    .filter((course) => now > course.enddate)
    .map(getSlimCourse)

  const FUTURE = courses
    .filter((course) => now < course.startdate)
    .map(getSlimCourse)

  const IN_PROGRESS = courses
    .filter((course) => now <= course.enddate && now >= course.startdate)
    .map(getSlimCourse)

  return { PAST, FUTURE, IN_PROGRESS }
}
