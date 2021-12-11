import RefreshIcon from "@mui/icons-material/Refresh"
import IconButton from "@mui/material/IconButton"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"
import { RoomChatsContext } from "../../Components/RoomChatsContext"

const ShowRoomOverviewChatsHeaderRefresh = () => {
  const isLoading = useContextSelector(
    RoomChatsContext,
    ({ conversationsQuery: { isLoading } }) => isLoading
  )

  const isLoggedIn = useContextSelector(
    RoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  )

  const reload = useContextSelector(
    RoomChatsContext,
    ({ conversationsQuery: { refetch } }) => refetch
  )

  const canRefresh = isLoggedIn && !isLoading

  return (
    <IconButton
      color={"inherit"}
      disabled={!canRefresh}
      onClick={() => {
        if (canRefresh) {
          void reload()
        }
      }}
    >
      <RefreshIcon />
    </IconButton>
  )
}

export default ShowRoomOverviewChatsHeaderRefresh
