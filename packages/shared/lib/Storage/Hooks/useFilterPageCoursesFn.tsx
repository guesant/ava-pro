import { useMemo } from "react"
import { useExtensionStorageSlicer } from "../../Hooks/useExtensionStorageSlicer"
import { IFilterCoursesByStatus } from "../../Interfaces/IFilterCoursesByStatus"
import { getCourseFilterFn } from "../../Schemas/Services/getCourseFilterFn"
import { getFilterCoursesBy } from "../Slicers/StorageSettingsSlicers"

export const useFilterPageCoursesFn = () => {
  const { value: filterCoursesBy } = useExtensionStorageSlicer(
    getFilterCoursesBy,
    IFilterCoursesByStatus.IN_PROGRESS
  )
  return useMemo(() => getCourseFilterFn(filterCoursesBy), [filterCoursesBy])
}
