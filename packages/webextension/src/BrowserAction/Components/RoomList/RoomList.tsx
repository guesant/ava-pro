import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import { FC } from "react"
import RoomListItem from "../RoomListItem/RoomListItem"

type IRoomListProps = {
  rooms: Omit<IRoom, "cache">[]
  showSubHeader?: boolean
  showBeforeFirstItemDivider?: boolean
}

const RoomList: FC<IRoomListProps> = ({
  rooms,
  showSubHeader,
  showBeforeFirstItemDivider = true
}) => {
  if (rooms.length === 0) {
    return null
  }

  return (
    <List disablePadding>
      {showSubHeader && (
        <ListSubheader sx={{ lineHeight: 1, my: 2 }}>
          {getMessage("component_roomList_subheader")}
        </ListSubheader>
      )}

      {showBeforeFirstItemDivider && <Divider />}

      {rooms.map((room) => (
        <RoomListItem key={room.id} room={room} />
      ))}
    </List>
  )
}

export default RoomList
