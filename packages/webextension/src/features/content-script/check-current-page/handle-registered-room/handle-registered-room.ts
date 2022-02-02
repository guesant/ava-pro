import { routes } from "@ava-pro/moodle-client-js"
import { extractCourseIdFromURL } from "@ava-pro/moodle-client-js/lib/features/course"
import { logger } from "@ava-pro/shared/lib/features"
import { applyStorageMutation } from "@ava-pro/shared/lib/features/storage"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import { updateRoomCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms/update-room-course.mutation"

export const handleRegisteredRoom = async (
  currentPageUrl: string,
  room: IRoom
) => {
  const subPath = currentPageUrl.replace(room.url, "")

  if (subPath.startsWith(routes.course())) {
    logger.debug("it's a course page!")

    const courseId = extractCourseIdFromURL(currentPageUrl)

    if (courseId !== null) {
      await applyStorageMutation(updateRoomCourse, {
        courseId,
        roomId: room.id,
        recipe: (course) => {
          course.lastVisit = Date.now()
        }
      })
    }
  }

  if (subPath.startsWith(routes.login())) {
    logger.debug("it's a login page!")

    const {
      credentials: { username, password, autoLogin }
    } = room

    const form = document.querySelector("#login") as HTMLFormElement

    const inputUsername = form.querySelector("#username") as HTMLInputElement
    inputUsername.value = username

    const inputPassword = form.querySelector("#password") as HTMLInputElement
    inputPassword.value = password

    const hasLoginErrors = document.querySelectorAll(".loginerrors").length > 0

    if (
      autoLogin &&
      !hasLoginErrors &&
      username.length > 0 &&
      password.length > 0
    ) {
      form.submit()
    }
  }
}
