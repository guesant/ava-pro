import { create } from "superstruct"
import { IStorage, StorageStruct } from "../schemas"

export const parseStorageData = (data: any) => {
  return create(data, StorageStruct) as IStorage
}
