import { produce } from "immer"
import { create } from "superstruct"
import browser from "webextension-polyfill"
import { data } from "../../central-storage"
import { IExtensionStorageMutation } from "../index"
import { StorageStruct } from "../schemas"

export const applyStorageMutation = async <T extends any>(
  recipe: IExtensionStorageMutation<T>,
  payload: T
) => {
  let mutationReturnValue: any

  const updatedData = create(
    produce(await data, (draft) => {
      mutationReturnValue = recipe(draft, payload)
    }),
    StorageStruct
  )

  await browser.storage.local.set(updatedData)

  return mutationReturnValue
}
