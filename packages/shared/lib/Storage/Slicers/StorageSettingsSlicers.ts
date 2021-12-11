import { IExtensionStorageSlicer } from "../../Interfaces/IExtensionStorageSlicer"
import { IStorage } from "../../Interfaces/IStorage"

export const getCoursesOrderBy: IExtensionStorageSlicer<
  IStorage["settings"]["coursesOrderBy"]
> = (state) => state.settings.coursesOrderBy

export const getFilterCoursesBy: IExtensionStorageSlicer<
  IStorage["settings"]["filterCoursesByStatus"]
> = (state) => state.settings.filterCoursesByStatus

export const getSelectedRoom: IExtensionStorageSlicer<
  IStorage["settings"]["selectedRoom"]
> = (state) => state.settings.selectedRoom
