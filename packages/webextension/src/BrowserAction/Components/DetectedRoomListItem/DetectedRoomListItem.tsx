import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { removeDetectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms"
import {
  acceptDetectedRoomAction,
  IDetectedRoom,
  rejectDetectedRoomAction
} from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room"
import { IDetectedRoomResponse } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room/response"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { FC, useCallback } from "react"
import { useAsync } from "react-async"

const IconButtonResponseActive: IconButtonProps = {
  color: "primary",
  sx: { border: "1px solid currentColor" }
}

const IconButtonResponseInactive: IconButtonProps = {
  color: "inherit",
  sx: { border: "1px solid transparent" }
}

type IDetectedRoomProps = {
  detectedRoom: IDetectedRoom
  showSecondaryActions?: boolean
}

enum ButtonResponse {
  ACCEPT,
  REJECT
}

const handleResponse = ([response, detectedRoom]: [
  ButtonResponse,
  IDetectedRoom
]) => {
  switch (response) {
    case ButtonResponse.ACCEPT:
      return acceptDetectedRoomAction(detectedRoom)
    case ButtonResponse.REJECT:
      return rejectDetectedRoomAction(detectedRoom)
  }
}

const handleRemoveDetectedRoom = makeStorageMutator(removeDetectedRoom)

const DetectedRoomListItem: FC<IDetectedRoomProps> = ({
  detectedRoom,
  showSecondaryActions = true
}) => {
  const { run, isLoading } = useAsync({ deferFn: handleResponse } as any)

  const handleAcceptRequest = useCallback(
    () => run(ButtonResponse.ACCEPT, detectedRoom),
    [run, detectedRoom]
  )

  const handleRejectRequest = useCallback(
    () => run(ButtonResponse.REJECT, detectedRoom),
    [run, detectedRoom]
  )

  const canSubmit = !isLoading

  return (
    <ListItem divider button disableRipple>
      <ListItemText>
        <Typography noWrap sx={{ marginRight: 3 * 5.625 }}>
          {detectedRoom.name}
        </Typography>
      </ListItemText>
      {showSecondaryActions && (
        <>
          <ListItemSecondaryAction sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              onClick={() => handleRemoveDetectedRoom(detectedRoom.url)}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              disabled={!canSubmit}
              onClick={handleRejectRequest}
              {...(detectedRoom.response === IDetectedRoomResponse.REJECTED
                ? IconButtonResponseActive
                : IconButtonResponseInactive)}
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              disabled={!canSubmit}
              onClick={handleAcceptRequest}
              {...(detectedRoom.response === IDetectedRoomResponse.ACCEPTED
                ? IconButtonResponseActive
                : IconButtonResponseInactive)}
            >
              <CheckIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default DetectedRoomListItem
