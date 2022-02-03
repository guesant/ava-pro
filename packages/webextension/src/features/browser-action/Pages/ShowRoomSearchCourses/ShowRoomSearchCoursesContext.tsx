import { IRoomCacheCourse } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room/cache/courses/course"
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomCoursesContext } from "../../Components/RoomCoursesContext"

type IShowRoomSearchCoursesContext = {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
  filteredCourses: IRoomCacheCourse[]
}

export const ShowRoomSearchCoursesContext = createContext(
  {} as IShowRoomSearchCoursesContext
)

export const ShowRoomSearchCoursesContextProvider: FC = ({ children }) => {
  const [searchText, setSearchText] = useState("")

  const courses = useContextSelector(
    RoomCoursesContext,
    ({ courses }) => courses
  )

  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        course.fullname
          .toLocaleLowerCase()
          .includes(searchText.trim().toLocaleLowerCase())
      ),
    [courses, searchText]
  )

  return (
    <ShowRoomSearchCoursesContext.Provider
      value={{ searchText, setSearchText, filteredCourses }}
    >
      {children}
    </ShowRoomSearchCoursesContext.Provider>
  )
}
