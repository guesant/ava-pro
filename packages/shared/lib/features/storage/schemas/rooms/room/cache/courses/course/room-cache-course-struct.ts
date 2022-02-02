import {
  boolean,
  defaulted,
  nullable,
  number,
  optional,
  string,
  type,
  union
} from "superstruct"

export const RoomCacheCourseStruct = type({
  id: union([string(), number()]),

  fullname: string(),

  summary: optional(string()),

  startdate: optional(number()),

  enddate: optional(number()),

  visible: defaulted(boolean(), () => true),

  viewurl: string(),

  courseimage: optional(string()),

  progress: defaulted(number(), () => 0),

  hasprogress: defaulted(boolean(), () => false),

  isfavourite: defaulted(boolean(), () => false),

  hidden: defaulted(boolean(), () => false),

  // custom

  isPinned: defaulted(boolean(), () => false),

  lastVisit: defaulted(nullable(number()), () => null)
})
