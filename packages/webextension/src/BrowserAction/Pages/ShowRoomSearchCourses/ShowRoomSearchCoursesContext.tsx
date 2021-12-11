import { IExtractedCourse } from "@ava-pro/shared/lib/Interfaces/IExtractedCourse"
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomCoursesContext } from "../../Components/RoomCoursesContext"

type IShowRoomSearchCoursesContext = {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>

  filteredCourses: IExtractedCourse[]
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
        course.name
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
