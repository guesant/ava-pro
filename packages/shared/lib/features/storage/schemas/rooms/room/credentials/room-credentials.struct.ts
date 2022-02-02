import { boolean, defaulted, string, type } from "superstruct"

export const RoomCredentialsStruct = defaulted(
  type({
    username: defaulted(string(), () => ""),
    password: defaulted(string(), () => ""),
    autoLogin: defaulted(boolean(), () => true)
  }),
  () => ({})
)
