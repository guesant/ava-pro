import { boolean, defaulted, nullable, string, type } from "superstruct"
import { RoomPageCourses } from "./RoomPageCourses"

export const Room = type({
  id: string(),
  url: string(),
  name: string(),

  cache: defaulted(
    type({
      courses: defaulted(nullable(RoomPageCourses), () => null)
    }),
    () => ({})
  ),

  credentials: defaulted(
    type({
      username: defaulted(string(), () => ""),
      password: defaulted(string(), () => ""),
      autoLogin: defaulted(boolean(), () => true)
    }),
    () => ({})
  )
})
