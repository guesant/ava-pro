import equal from "fast-deep-equal"
import * as centralStorage from "./centralStorage"
import { IExtensionStorageSlicer } from "./Interfaces/IExtensionStorageSlicer"
import { getSlicedStorageData } from "./Storage/getSlicedStorageData"

export const storageSyncSlicer = <T extends any>(
  slicer: IExtensionStorageSlicer<T>,
  callback: (state: T) => void,
  setLoadingStatus?: (status: boolean) => void
) => {
  let prevState: null | T = null

  const checkChanges = async () => {
    setLoadingStatus?.(true)

    const state = await getSlicedStorageData(slicer)

    if (!equal(state, prevState)) {
      callback(state)
      prevState = state
    }

    setLoadingStatus?.(false)
  }

  void checkChanges()

  centralStorage.addListener(checkChanges)

  return () => {
    centralStorage.removeListener(checkChanges)
  }
}
