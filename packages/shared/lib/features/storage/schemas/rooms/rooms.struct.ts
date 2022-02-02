import { array, defaulted } from "superstruct"
import { RoomStruct } from "./room"

export const RoomsStruct = defaulted(array(RoomStruct), () => [])
