import { ListCourses } from "@ava-pro/crawlers/lib/Scrappers/ListCourses/ListCourses"
import { IPageExtractedCourses } from "@ava-pro/shared/lib/Interfaces/IPageExtractedCourses"
import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { updateRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import { useCallback, useEffect } from "react"
import { useAsync } from "react-async"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "../Components/RoomContext"

const handleUpdateRoom = makeStorageMutator(updateRoom)

export const useRoomCachedCourses = () => {
  const id = useContextSelector(RoomContext, ({ room: { id } }) => id)

  const handleUpdateRoomCoursesCache = useCallback(
    (id: IRoom["id"], pageCourses: IPageExtractedCourses) =>
      handleUpdateRoom({
        id,
        recipe: (room) => {
          room.cache.courses = pageCourses
        }
      }),
    []
  )

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const coursesCache = useContextSelector(
    RoomContext,
    ({
      room: {
        cache: { courses }
      }
    }) => courses
  )

  const hasCache = coursesCache !== null

  const updateCoursesCache = useCallback(async () => {
    const pageCourses = await ListCourses(crawlerFetch)()
    await handleUpdateRoomCoursesCache(id, pageCourses)
  }, [hasCache, handleUpdateRoomCoursesCache, crawlerFetch])

  const { run, error, isLoading } = useAsync({
    deferFn: updateCoursesCache
  })

  const reload = useCallback(() => run(), [run])

  useEffect(() => {
    !hasCache && reload()
  }, [hasCache, reload])

  const loadCacheError = !hasCache && error

  return {
    coursesCache,
    hasCache,
    isLoadingCache: isLoading,
    loadCacheError,
    reload
  }
}
