export type IRoomCacheCourse = {
  // from IGetEnrolledCoursesByTimelineClassificationCourseDto

  id: number | string

  fullname: string

  summary: string

  startdate: number | undefined

  enddate: number | undefined

  visible: boolean

  viewurl: string

  courseimage: string

  progress: number

  hasprogress: boolean

  isfavourite: boolean

  hidden: boolean

  // custom

  isPinned: boolean

  lastVisit: null | number
}
