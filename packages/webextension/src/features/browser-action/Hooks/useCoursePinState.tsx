import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { updateRoomCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { IRoomCacheCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room/cache/courses/course"
import { useCallback } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "../Components/RoomContext"

const handleUpdateRoomCourse = makeStorageMutator(updateRoomCourse)

export const useCoursePinState = ({
  id: courseId,
  isPinned
}: IRoomCacheCourse) => {
  const roomId = useContextSelector(RoomContext, ({ room: { id } }) => id)

  const togglePinState = useCallback(
    () =>
      handleUpdateRoomCourse({
        roomId,
        courseId,
        recipe: (course) => {
          course.isPinned = !course.isPinned
        }
      }),
    [roomId, courseId]
  )

  return { togglePinState, isPinned }
}
