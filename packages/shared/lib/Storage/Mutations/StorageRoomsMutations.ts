import { produce } from "immer"
import { nanoid } from "nanoid"
import normalizeUrl from "normalize-url"
import { IExtensionStorageMutation } from "../../Interfaces/IExtensionStorageMutation"
import { IExtractedCourse } from "../../Interfaces/IExtractedCourse"
import { IPageExtractedCourses } from "../../Interfaces/IPageExtractedCourses"
import { IRoom } from "../../Interfaces/IRoom"

export const addRoom: IExtensionStorageMutation<Pick<IRoom, "url" | "name">> = (
  state,
  { url, name }
) => {
  const normalizedUrl = normalizeUrl(url, {
    removeSingleSlash: true,
    removeTrailingSlash: true,
    stripHash: true
  })

  const room: Partial<IRoom> = {
    name,
    id: nanoid(),
    url: normalizedUrl
  }

  state.rooms.push(room as IRoom)

  return room
}

type IUpdateRoomPayload = {
  id: IRoom["id"]
  recipe: (room: Omit<IRoom, "id">) => void
}

export const updateRoom: IExtensionStorageMutation<IUpdateRoomPayload> = (
  state,
  { id, recipe }
) => {
  state.rooms = state.rooms.map((i) =>
    i.id === id ? { ...produce(i, recipe), id } : i
  )
}

type IUpdateRoomCoursePayload = {
  roomId: IRoom["id"]
  courseId: IExtractedCourse["courseId"]
  recipe: (course: Omit<IExtractedCourse, "id">) => void
}

export const updateRoomCourse: IExtensionStorageMutation<
  IUpdateRoomCoursePayload
> = (state, { roomId, courseId, recipe }) => {
  const targetRoom = state.rooms.find((room) => room.id === roomId)
  if (targetRoom) {
    const targetCourse = Object.values(
      targetRoom.cache.courses ?? ({} as unknown as IPageExtractedCourses)
    )
      .flat(1)
      .find((course) => course.courseId === courseId)

    if (targetCourse) {
      recipe(targetCourse)
      targetCourse.courseId = courseId
    }
  }
}

export const removeRoom: IExtensionStorageMutation<IRoom["id"]> = (
  state,
  id
) => {
  state.rooms = state.rooms.filter((i) => i.id !== id)
}
