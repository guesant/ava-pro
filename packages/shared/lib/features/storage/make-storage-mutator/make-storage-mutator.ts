import { applyStorageMutation } from "../apply-storage-mutation"
import { IExtensionStorageMutation } from "../interfaces"

export const makeStorageMutator =
  <T extends any = void>(recipe: IExtensionStorageMutation<T>) =>
  (payload: T) =>
    applyStorageMutation(recipe, payload)
