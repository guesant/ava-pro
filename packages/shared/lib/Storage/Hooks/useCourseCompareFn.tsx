import { useMemo } from "react"
import { useExtensionStorageSlicer } from "../../Hooks/useExtensionStorageSlicer"
import { ICoursesOrderBy } from "../../Interfaces/ICoursesOrderBy"
import { getCourseCompareFn } from "../../Schemas/Services/getCourseCompareFn"
import { getCoursesOrderBy } from "../Slicers/StorageSettingsSlicers"

export const useCourseCompareFn = () => {
  const { value: orderBy } = useExtensionStorageSlicer(
    getCoursesOrderBy,
    ICoursesOrderBy.NAME
  )
  return useMemo(() => getCourseCompareFn(orderBy), [orderBy])
}
