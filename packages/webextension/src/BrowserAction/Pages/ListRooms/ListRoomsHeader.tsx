import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import AddIcon from "@mui/icons-material/Add"
import HistoryIcon from "@mui/icons-material/History"
import SettingsIcon from "@mui/icons-material/Settings"
import IconButton from "@mui/material/IconButton"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const ListRoomsHeader = () => {
  return (
    <PageHeader
      title={getMessage("page_listRooms")}
      afterTitle={
        <>
          <AppRouteLink route={appRoutes.addRoom}>
            <IconButton color={"inherit"}>
              <AddIcon />
            </IconButton>
          </AppRouteLink>
          <AppRouteLink route={appRoutes.detectedRooms}>
            <IconButton color={"inherit"}>
              <HistoryIcon />
            </IconButton>
          </AppRouteLink>
          <AppRouteLink route={appRoutes.settings}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </AppRouteLink>
        </>
      }
    />
  )
}

export default ListRoomsHeader
