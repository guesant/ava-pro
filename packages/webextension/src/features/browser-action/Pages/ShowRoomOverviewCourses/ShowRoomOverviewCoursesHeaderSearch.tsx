import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import { useContextSelector } from "use-context-selector"
import { RoomCachedCoursesContext } from "../../Components/RoomCachedCoursesContext"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const ShowRoomOverviewCoursesHeaderSearch = () => {
  const canSearch = useContextSelector(
    RoomCachedCoursesContext,
    ({ hasCache }) => hasCache
  )
  return (
    <AppRouteLink
      route={appRoutes.viewRoomSearchCourses}
      onClick={(e) => !canSearch && e.preventDefault()}
    >
      <IconButton disabled={!canSearch} color={"inherit"}>
        <SearchIcon />
      </IconButton>
    </AppRouteLink>
  )
}

export default ShowRoomOverviewCoursesHeaderSearch
