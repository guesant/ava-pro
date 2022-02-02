import { IExtensionStorageMutation } from "../../interfaces"
import { IRoom } from "./room"
import { IRoomCacheCourse } from "./room/cache/courses/course"

export type IUpdateRoomCoursePayload = {
  roomId: IRoom["id"]
  courseId: IRoomCacheCourse["id"]
  recipe: (course: Omit<IRoomCacheCourse, "id">) => void
}

export const updateRoomCourse: IExtensionStorageMutation<
  IUpdateRoomCoursePayload
> = (state, { roomId, courseId, recipe }) => {
  const targetRoom = state.rooms.find((room) => room.id === roomId)
  if (targetRoom) {
    const targetCourse = Object.values(targetRoom.cache.courses ?? [])
      .flat(1)
      .find((course) => String(course.id) === String(courseId))

    if (targetCourse) {
      recipe(targetCourse)
      targetCourse.id = courseId
    }
  }
}
