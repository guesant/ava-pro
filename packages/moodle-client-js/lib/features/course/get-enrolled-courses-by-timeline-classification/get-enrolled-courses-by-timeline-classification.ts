import { ajax } from "../../ajax/ajax"
import { MoodleClient } from "../../../MoodleClient"
import { IGetEnrolledCoursesByTimelineClassificationRequest } from "./IGetEnrolledCoursesByTimelineClassificationRequest"
import { IGetEnrolledCoursesByTimelineClassificationResponse } from "./IGetEnrolledCoursesByTimelineClassificationResponse"

export const getEnrolledCoursesByTimelineClassification = async (
  client: MoodleClient,
  payload: IGetEnrolledCoursesByTimelineClassificationRequest = {}
) =>
  ajax<IGetEnrolledCoursesByTimelineClassificationResponse>(
    client,
    "core_course_get_enrolled_courses_by_timeline_classification",
    {
      limit: 0,
      offset: 0,
      sort: "fullname",
      customfieldname: "",
      customfieldvalue: "",
      classification: "all",
      ...payload
    }
  )
