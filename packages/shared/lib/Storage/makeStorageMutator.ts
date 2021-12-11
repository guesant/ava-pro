import { IExtensionStorageMutation } from "../Interfaces/IExtensionStorageMutation"
import { applyStorageMutation } from "./applyStorageMutation"

export const makeStorageMutator =
  <T extends any>(recipe: IExtensionStorageMutation<T>) =>
  (payload: T) =>
    applyStorageMutation(recipe, payload)
