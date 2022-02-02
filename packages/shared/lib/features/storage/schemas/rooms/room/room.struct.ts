import { string, type } from "superstruct"
import { RoomCacheStruct } from "./cache"
import { RoomCredentialsStruct } from "./credentials"

export const RoomStruct = type({
  id: string(),

  url: string(),

  name: string(),

  cache: RoomCacheStruct,

  credentials: RoomCredentialsStruct
})
