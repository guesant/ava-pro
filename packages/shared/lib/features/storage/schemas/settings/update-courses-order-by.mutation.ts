import { IExtensionStorageMutation } from "../../interfaces"
import { ICoursesOrderBy } from "./courses-order-by"

export const updateCoursesOrderBy: IExtensionStorageMutation<
  ICoursesOrderBy
> = (state, payload) => {
  state.settings.coursesOrderBy = payload
}
