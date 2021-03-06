import { MoodleClient } from "../../../MoodleClient"
import { ajax } from "../../ajax"
import {
  IGetEnrolledCoursesByTimelineClassificationRequest,
  IGetEnrolledCoursesByTimelineClassificationResponse
} from "./interfaces"

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
