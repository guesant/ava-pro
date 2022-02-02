import { IStorage } from "../schemas"

export type IExtensionStorageMutation<T extends any> = (
  state: IStorage,
  payload: T
) => void
