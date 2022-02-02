import { defaulted, nullable } from "superstruct"
import { RoomStruct } from "../../rooms/room/room.struct"

export const SelectedRoomStruct = defaulted(
  nullable(RoomStruct.schema.id),
  () => null
)
