import { applyStorageMutation } from "@ava-pro/shared/lib/features/storage"
import { removeRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC, useCallback } from "react"
import { appRoutes, useNavigateAppRoute } from "../../Hooks/useAppRoutes"

type IRoomListItemProps = {
  room: Omit<IRoom, "cache">
}

const RoomListItem: FC<IRoomListItemProps> = ({ room: { name, id } }) => {
  const navigateAppRoute = useNavigateAppRoute()

  const handleRemoveClick = useCallback(
    () => applyStorageMutation(removeRoom, id),
    [id]
  )

  return (
    <ListItem
      button
      divider
      disableRipple
      onClick={() => navigateAppRoute(appRoutes.viewRoom, { id })}
    >
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
