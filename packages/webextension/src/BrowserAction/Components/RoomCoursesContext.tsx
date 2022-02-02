import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage"
import {
  getQueriedCourses,
  IRoomCacheCourse
} from "@ava-pro/shared/lib/features/storage/schemas/rooms/room/cache/courses/course"
import { ICoursesOrderBy } from "@ava-pro/shared/lib/features/storage/schemas/settings/courses-order-by"
import { getCoursesOrderBy } from "@ava-pro/shared/lib/features/storage/schemas/settings/courses-order-by/get-courses-order-by.slicer"
import { IFilterCoursesByStatus } from "@ava-pro/shared/lib/features/storage/schemas/settings/filter-courses-by-status"
import { getFilterCoursesBy } from "@ava-pro/shared/lib/features/storage/schemas/settings/filter-courses-by-status/get-filter-courses-by-status.slicer"
import { FC, useMemo } from "react"
import { createContext } from "use-context-selector"

type IRoomCoursesContext = {
  courses: IRoomCacheCourse[]
}

export const RoomCoursesContext = createContext({} as IRoomCoursesContext)

export const RoomCoursesContextProvider: FC<{
  pageCourses?: IRoomCacheCourse[] | null
}> = ({ children, pageCourses }) => {
  const now = useMemo(() => Date.now(), [])

  const { value: orderBy } = useExtensionStorageSlicer(
    getCoursesOrderBy,
    ICoursesOrderBy.NAME
  )

  const { value: filterCoursesBy } = useExtensionStorageSlicer(
    getFilterCoursesBy,
    IFilterCoursesByStatus.IN_PROGRESS
  )

  const queriedCourses = useMemo(
    () => getQueriedCourses(pageCourses ?? [], orderBy, filterCoursesBy, now),
    [pageCourses, orderBy, filterCoursesBy, now]
  )

  return (
    <RoomCoursesContext.Provider value={{ courses: queriedCourses }}>
      {children}
    </RoomCoursesContext.Provider>
  )
}
