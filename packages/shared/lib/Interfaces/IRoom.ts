import { IPageExtractedCourses } from "./IPageExtractedCourses"

export type IRoom = {
  id: string
  url: string
  name: string

  cache: {
    courses: IPageExtractedCourses | null
  }

  credentials: {
    username: string
    password: string
    autoLogin: boolean
  }
}
