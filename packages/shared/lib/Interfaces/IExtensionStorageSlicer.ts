import { IStorage } from "./IStorage"

export type IExtensionStorageSlicer<T> = (state: IStorage) => T
