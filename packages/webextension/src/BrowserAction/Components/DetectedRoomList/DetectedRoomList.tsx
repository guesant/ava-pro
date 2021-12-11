import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import { IDetectedRoom } from "@ava-pro/shared/lib/Interfaces/IDetectedRoom"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListSubheader from "@mui/material/ListSubheader"
import { FC } from "react"
import DetectedRoomListItem from "../DetectedRoomListItem/DetectedRoomListItem"

type IDetectedRoomListProps = {
  detectedRooms: IDetectedRoom[]
  showSubHeader?: boolean
  showDivider?: boolean
}

const DetectedRoomList: FC<IDetectedRoomListProps> = ({
  detectedRooms,
  showSubHeader = true,
  showDivider = true
}) => {
  if (detectedRooms.length === 0) {
    return null
  }

  return (
    <Box>
      <List disablePadding>
        {showSubHeader && (
          <ListSubheader sx={{ lineHeight: 1, my: 2 }}>
            {getMessage("component_detectedRoomList_subheader")}
          </ListSubheader>
        )}

        {showDivider && <Divider />}

        {detectedRooms.map((detectedRoom) => (
          <DetectedRoomListItem
            key={detectedRoom.url}
            detectedRoom={detectedRoom}
          />
        ))}
      </List>
    </Box>
  )
}

export default DetectedRoomList
