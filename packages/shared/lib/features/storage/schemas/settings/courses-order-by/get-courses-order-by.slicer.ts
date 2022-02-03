import { IExtensionStorageSlicer } from "../../../interfaces"
import { IStorage } from "../../interfaces"

export const getCoursesOrderBy: IExtensionStorageSlicer<
  IStorage["settings"]["coursesOrderBy"]
> = (state) => state.settings.coursesOrderBy
