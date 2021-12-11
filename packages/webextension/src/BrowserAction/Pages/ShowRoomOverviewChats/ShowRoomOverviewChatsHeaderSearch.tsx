import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"

const ShowRoomOverviewChatsHeaderSearch = () => {
  const canSearch = useContextSelector(
    RoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  )

  return (
    <Link
      to={"./../search/chats"}
      onClick={(e) => !canSearch && e.preventDefault()}
    >
      <IconButton disabled={!canSearch} color={"inherit"}>
        <SearchIcon />
      </IconButton>
    </Link>
  )
}

export default ShowRoomOverviewChatsHeaderSearch
