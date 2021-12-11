import { boolean, defaulted, nullable, number, string, type } from "superstruct"

export const RoomCourse = type({
  url: string(),
  name: string(),
  courseId: string(),

  isPinned: defaulted(boolean(), () => false),
  lastVisit: defaulted(nullable(number()), () => null)
})
