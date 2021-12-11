import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { applyStorageMutation } from "@ava-pro/shared/lib/Storage/applyStorageMutation"
import { removeRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC, useCallback } from "react"
import { useGoToRoom } from "../../Hooks/useGoToRoom"

type IRoomListItemProps = {
  room: Omit<IRoom, "cache">
}

const RoomListItem: FC<IRoomListItemProps> = ({ room: { name, id } }) => {
  const handleGoToRoom = useGoToRoom()

  const handleRemoveClick = useCallback(
    () => applyStorageMutation(removeRoom, id),
    [id]
  )

  return (
    <ListItem button divider disableRipple onClick={() => handleGoToRoom(id)}>
      <ListItemText>
        <Typography sx={{ mr: 2 }} noWrap>
          {name}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default RoomListItem
