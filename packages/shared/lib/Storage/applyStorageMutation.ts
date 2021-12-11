import { produce } from "immer"
import { create } from "superstruct"
import browser from "webextension-polyfill"
import { data } from "../centralStorage"
import { IExtensionStorageMutation } from "../Interfaces/IExtensionStorageMutation"
import { Storage } from "../Schemas/Storage"

export const applyStorageMutation = async <T extends any>(
  recipe: IExtensionStorageMutation<T>,
  payload: T
) => {
  let mutationReturnValue: any

  const updatedData = create(
    produce(await data, (draft) => {
      mutationReturnValue = recipe(draft, payload)
    }),
    Storage
  )

  await browser.storage.local.set(updatedData)

  return mutationReturnValue
}
