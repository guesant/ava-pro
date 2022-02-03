import { FC } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomCachedCoursesContext } from "../../Components/RoomCachedCoursesContext"
import { RoomCoursesContext } from "../../Components/RoomCoursesContext"
import ShowRoomOverviewCoursesFallbackErrorLoadingCache from "./ShowRoomOverviewCoursesFallbackErrorLoadingCache"
import ShowRoomOverviewCoursesFallbackLoadingCache from "./ShowRoomOverviewCoursesFallbackLoadingCache"
import ShowRoomOverviewCoursesFallbackNoCourses from "./ShowRoomOverviewCoursesFallbackNoCourses"

const ShowRoomOverviewCoursesFallback: FC = ({ children }) => {
  const hasCache = useContextSelector(
    RoomCachedCoursesContext,
    ({ hasCache }) => hasCache
  )

  const isLoadingCache = useContextSelector(
    RoomCachedCoursesContext,
    ({ isLoadingCache }) => isLoadingCache
  )

  const loadCacheError = useContextSelector(
    RoomCachedCoursesContext,
    ({ loadCacheError }) => loadCacheError
  )

  const courses = useContextSelector(
    RoomCoursesContext,
    ({ courses }) => courses
  )

  if (!hasCache && isLoadingCache) {
    return <ShowRoomOverviewCoursesFallbackLoadingCache />
  }

  if (!hasCache && (loadCacheError || !isLoadingCache)) {
    console.log(loadCacheError)
    return <ShowRoomOverviewCoursesFallbackErrorLoadingCache />
  }

  if (!isLoadingCache && courses.length === 0) {
    return <ShowRoomOverviewCoursesFallbackNoCourses />
  }

  return <>{children}</>
}

export default ShowRoomOverviewCoursesFallback
