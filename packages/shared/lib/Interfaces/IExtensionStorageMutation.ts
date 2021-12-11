import { IStorage } from "./IStorage"

export type IExtensionStorageMutation<T extends any> = (
  state: IStorage,
  payload: T
) => void
