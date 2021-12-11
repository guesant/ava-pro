import { ICoursesOrderBy } from "../../Interfaces/ICoursesOrderBy"
import { IExtensionStorageMutation } from "../../Interfaces/IExtensionStorageMutation"
import { IRoom } from "../../Interfaces/IRoom"

export const updateCoursesOrderBy: IExtensionStorageMutation<
  ICoursesOrderBy
> = (state, payload) => {
  state.settings.coursesOrderBy = payload
}

export const updateSelectedRoom: IExtensionStorageMutation<
  IRoom["id"] | null
> = (state, payload) => {
  state.settings.selectedRoom = payload
}
