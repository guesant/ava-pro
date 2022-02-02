import { IExtensionStorageSlicer } from "../../../interfaces/IExtensionStorageSlicer"
import { IStorage } from "../../interfaces"

export const getCoursesOrderBy: IExtensionStorageSlicer<
  IStorage["settings"]["coursesOrderBy"]
> = (state) => state.settings.coursesOrderBy
