import { IRoomCacheCourse } from "../cache/courses/course"

export type IRoom = {
  id: string

  url: string

  name: string

  cache: {
    courses: IRoomCacheCourse[] | null
  }

  credentials: {
    username: string
    password: string
    autoLogin: boolean
  }
}
