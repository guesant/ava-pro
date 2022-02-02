import { useEffect, useState } from "react"
import { getStorageDataSlicedSynced } from "./get-storage-data-sliced-synced"
import { IExtensionStorageSlicer } from "./interfaces"

export const useExtensionStorageSlicer = <T extends any>(
  slice: IExtensionStorageSlicer<T>,
  placeholderValue: T
) => {
  const [value, setValue] = useState<T>(placeholderValue)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cleanup = getStorageDataSlicedSynced(
      slice,
      (state) => setValue(state),
      setIsLoading
    )
    return () => void cleanup()
  }, [slice])

  return { isLoading, value }
}
