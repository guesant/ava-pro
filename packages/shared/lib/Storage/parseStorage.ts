import { create } from "superstruct"
import { IStorage } from "../Interfaces/IStorage"
import { Storage } from "../Schemas/Storage"

export const parseStorage = (data: any) => {
  return create(data, Storage) as IStorage
}
