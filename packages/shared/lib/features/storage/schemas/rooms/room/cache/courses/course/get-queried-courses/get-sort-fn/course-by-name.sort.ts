import { strcmp } from "../../../../../../../../../../utils"
import { IGetQueriedCoursesSortFn } from "../interfaces"

export const courseByNameSort: IGetQueriedCoursesSortFn = (a, b) =>
  strcmp(a.fullname, b.fullname)
