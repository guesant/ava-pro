import { defaulted, string } from "superstruct"
import { STORAGE_VERSION } from "./STORAGE_VERSION"

export const VersionStruct = defaulted(string(), () => STORAGE_VERSION)
