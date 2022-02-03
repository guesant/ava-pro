import { IStorage } from "../schemas"

export type IExtensionStorageMutation<T extends any = void> = (
  state: IStorage,
  payload: T
) => void
