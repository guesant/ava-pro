import { IExtensionStorageSlicer } from ".."
import { IMayBePromise } from "../../../interfaces/IMayBePromise"
import { data } from "../../central-storage"
import { IStorage } from "../schemas"

export const getStorageDataSliced = async <T extends any>(
  slicer: IExtensionStorageSlicer<T>,
  incomingData: IMayBePromise<IStorage> = data
): Promise<T> => slicer(await incomingData)
