import { IExtractedCourse } from "@ava-pro/shared/lib/Interfaces/IExtractedCourse"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { updateRoomCourse } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import { useCallback } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "../Components/RoomContext"

const handleUpdateRoomCourse = makeStorageMutator(updateRoomCourse)

export const useCoursePinState = ({ courseId, isPinned }: IExtractedCourse) => {
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
