import { IExtractedCourse } from "@ava-pro/shared/lib/Interfaces/IExtractedCourse"
import { IPageExtractedCourses } from "@ava-pro/shared/lib/Interfaces/IPageExtractedCourses"
import { useCourseCompareFn } from "@ava-pro/shared/lib/Storage/Hooks/useCourseCompareFn"
import { useFilterPageCoursesFn } from "@ava-pro/shared/lib/Storage/Hooks/useFilterPageCoursesFn"
import { FC, useMemo } from "react"
import { createContext } from "use-context-selector"

type IRoomCoursesContext = {
  courses: IExtractedCourse[]
}

export const RoomCoursesContext = createContext({} as IRoomCoursesContext)

export const RoomCoursesContextProvider: FC<{
  pageCourses?: IPageExtractedCourses | null
}> = ({ children, pageCourses }) => {
  const compareFn = useCourseCompareFn()
  const filterFn = useFilterPageCoursesFn()

  const courses = useMemo(
    () => filterFn(pageCourses ?? null),
    [pageCourses, filterFn]
  )

  const sortedCourses = useMemo(
    () => Array.from(courses).sort(compareFn),
    [compareFn, courses]
  )

  return (
    <RoomCoursesContext.Provider value={{ courses: sortedCourses as any }}>
      {children}
    </RoomCoursesContext.Provider>
  )
}
