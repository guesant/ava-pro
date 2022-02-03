import HomeIcon from "@mui/icons-material/Home"
import IconButton from "@mui/material/IconButton"
import { useCallback } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "../../Components/RoomContext"

const ShowRoomOverviewHeaderHome = () => {
  const roomUrl = useContextSelector(RoomContext, ({ room }) => room.url)

  const handleClick = useCallback(() => {
    window.open(roomUrl)
  }, [roomUrl])

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <HomeIcon />
      </IconButton>
    </>
  )
}

export default ShowRoomOverviewHeaderHome
