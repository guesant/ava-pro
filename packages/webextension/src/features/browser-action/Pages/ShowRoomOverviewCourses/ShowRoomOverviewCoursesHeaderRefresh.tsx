import RefreshIcon from "@mui/icons-material/Refresh"
import IconButton from "@mui/material/IconButton"
import { useContextSelector } from "use-context-selector"
import { RoomCachedCoursesContext } from "../../Components/RoomCachedCoursesContext"

const ShowRoomOverviewCoursesHeaderRefresh = () => {
  const isLoading = useContextSelector(
    RoomCachedCoursesContext,
    ({ isLoadingCache }) => isLoadingCache
  )

  const reload = useContextSelector(
    RoomCachedCoursesContext,
    ({ reload }) => reload
  )

  const canRefresh = !isLoading

  return (
    <IconButton
      color={"inherit"}
      disabled={!canRefresh}
      onClick={() => reload()}
    >
      <RefreshIcon />
    </IconButton>
  )
}

export default ShowRoomOverviewCoursesHeaderRefresh
