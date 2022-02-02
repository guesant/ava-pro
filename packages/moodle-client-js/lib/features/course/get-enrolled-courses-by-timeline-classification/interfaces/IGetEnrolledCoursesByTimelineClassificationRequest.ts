export type IGetEnrolledCoursesByTimelineClassificationRequest = {
  limit?: number

  offset?: number

  customfieldname?: string

  customfieldvalue?: string

  sort?: "fullname" | "ul.timeaccess desc" | string

  classification?: "all" | "inprogress" | "future" | "past" | "hidden" | string
} & Record<string, any>
