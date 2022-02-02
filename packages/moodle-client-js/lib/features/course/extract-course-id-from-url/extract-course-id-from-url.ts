const QUERY_COURSE_ID = "id"

export const extractCourseIdFromURL = (url: string) =>
  new URL(url).searchParams.get(QUERY_COURSE_ID)
