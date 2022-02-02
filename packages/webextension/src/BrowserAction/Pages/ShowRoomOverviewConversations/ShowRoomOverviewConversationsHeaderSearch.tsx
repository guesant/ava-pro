import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const ShowRoomOverviewConversationsHeaderSearch = () => {
  const canSearch = useContextSelector(
    RoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  )

  return (
    <AppRouteLink
      route={appRoutes.viewRoomSearchConversations}
      onClick={(e) => !canSearch && e.preventDefault()}
    >
      <IconButton disabled={!canSearch} color={"inherit"}>
        <SearchIcon />
      </IconButton>
    </AppRouteLink>
  )
}

export default ShowRoomOverviewConversationsHeaderSearch
