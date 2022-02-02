import { IExtensionStorageSlicer } from "../../../interfaces/IExtensionStorageSlicer"
import { IStorage } from "../../interfaces"

export const getFilterCoursesBy: IExtensionStorageSlicer<
  IStorage["settings"]["filterCoursesByStatus"]
> = (state) => state.settings.filterCoursesByStatus
