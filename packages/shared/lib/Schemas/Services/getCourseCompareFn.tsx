import { ICoursesOrderBy } from "../../Interfaces/ICoursesOrderBy"
import { IExtractedCourse } from "../../Interfaces/IExtractedCourse"
import { strcmp } from "../../Utils/strcmp"

const courseNameCompare = (a: IExtractedCourse, b: IExtractedCourse) =>
  strcmp(a.name, b.name)

const courseLastVisitCompare = (a: IExtractedCourse, b: IExtractedCourse) =>
  (b.lastVisit ?? 0) - (a.lastVisit ?? 0)

export const getCourseCompareFn = (orderBy: ICoursesOrderBy) => {
  switch (orderBy) {
    case ICoursesOrderBy.NAME:
      return courseNameCompare
    case ICoursesOrderBy.LAST_VISIT:
      return courseLastVisitCompare
  }
}
