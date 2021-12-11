import { useEffect, useState } from "react"
import { IExtensionStorageSlicer } from "../Interfaces/IExtensionStorageSlicer"
import { storageSyncSlicer } from "../storageSyncSlicer"

export const useExtensionStorageSlicer = <T extends any>(
  slice: IExtensionStorageSlicer<T>,
  placeholderValue: T
) => {
  const [value, setValue] = useState<T>(placeholderValue)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cleanup = storageSyncSlicer(
      slice,
      (state) => setValue(state),
      setIsLoading
    )
    return () => void cleanup()
  }, [slice])

  return { isLoading, value }
}
