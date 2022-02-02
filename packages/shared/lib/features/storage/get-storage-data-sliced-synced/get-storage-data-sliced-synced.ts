import equal from "fast-deep-equal"
import * as centralStorage from "../../central-storage"
import { getStorageDataSliced } from "../get-storage-data-sliced/get-storage-data-sliced"
import { IExtensionStorageSlicer } from "../index"

export const getStorageDataSlicedSynced = <T extends any>(
  slicer: IExtensionStorageSlicer<T>,
  callback: (state: T) => void,
  setLoadingStatus?: (status: boolean) => void
) => {
  let prevState: null | T = null

  const checkChanges = async () => {
    setLoadingStatus?.(true)

    const state = await getStorageDataSliced(slicer)

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
