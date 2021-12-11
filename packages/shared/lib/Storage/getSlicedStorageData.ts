import { data } from "../centralStorage"
import { IExtensionStorageSlicer } from "../Interfaces/IExtensionStorageSlicer"
import { IStorage } from "../Interfaces/IStorage"
import { MayBePromise } from "../Interfaces/MayBePromise"

export const getSlicedStorageData = async <T extends any>(
  slicer: IExtensionStorageSlicer<T>,
  incomingData: MayBePromise<IStorage> = data
): Promise<T> => slicer(await incomingData)
