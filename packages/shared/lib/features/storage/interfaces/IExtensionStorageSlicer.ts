import { IStorage } from "../schemas"

export type IExtensionStorageSlicer<T> = (state: IStorage) => T
