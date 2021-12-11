import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import { RoomCachedCoursesContext } from "../../Components/RoomCachedCoursesContext"

const ShowRoomOverviewCoursesHeaderSearch = () => {
  const canSearch = useContextSelector(
    RoomCachedCoursesContext,
    ({ hasCache }) => hasCache
  )
  return (
    <Link
      to={"./../search/courses"}
      onClick={(e) => !canSearch && e.preventDefault()}
    >
      <IconButton disabled={!canSearch} color={"inherit"}>
        <SearchIcon />
      </IconButton>
    </Link>
  )
}

export default ShowRoomOverviewCoursesHeaderSearch
