import { FC } from "react"
import { createContext } from "use-context-selector"
import { useRoomCachedCourses } from "./useRoomCachedCourses"
import { RoomCoursesContextProvider } from "./RoomCoursesContext"

type IRoomCachedCoursesContext = ReturnType<typeof useRoomCachedCourses>

export const RoomCachedCoursesContext = createContext(
  {} as IRoomCachedCoursesContext
)

export const RoomCachedCoursesContextProvider: FC = ({ children }) => {
  const { coursesCache, hasCache, isLoadingCache, loadCacheError, reload } =
    useRoomCachedCourses()

  return (
    <RoomCachedCoursesContext.Provider
      value={{
        reload,
        hasCache,
        coursesCache,
        isLoadingCache,
        loadCacheError
      }}
    >
      <RoomCoursesContextProvider pageCourses={coursesCache}>
        {children}
      </RoomCoursesContextProvider>
    </RoomCachedCoursesContext.Provider>
  )
}
