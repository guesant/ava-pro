import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { removeRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import LocalPoliceIcon from "@mui/icons-material/LocalPolice"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Divider from "@mui/material/Divider"
import ListItemIcon from "@mui/material/ListItemIcon"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import { FC, useCallback } from "react"
import { useContextSelector } from "use-context-selector"
import MenuButton from "../../Components/MenuButton/MenuButton"
import { RoomContext } from "../../Components/RoomContext"
import {
  AppRouteLink,
  appRoutes,
  useNavigateAppRoute
} from "../../Hooks/useAppRoutes"

const handleRemoveRoom = makeStorageMutator(removeRoom)

const ShowRoomOverviewHeaderOptionsDelete = () => {
  const navigateAppRoute = useNavigateAppRoute()
  const id = useContextSelector(RoomContext, ({ room }) => room.id)

  const handleDelete = useCallback(async () => {
    await Promise.resolve(navigateAppRoute(appRoutes.rooms))
    await handleRemoveRoom(id)
  }, [navigateAppRoute])

  return (
    <MenuItem onClick={handleDelete} dense disableRipple>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      {getMessage("page_showRoom_overview_header_options_delete")}
    </MenuItem>
  )
}

const ShowRoomOverviewHeaderOptions: FC = () => (
  <>
    <MenuButton
      icon={<MoreVertIcon />}
      menuContent={
        <div>
          <MenuList>
            <AppRouteLink route={appRoutes.settings}>
              <MenuItem dense disableRipple>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>

                {getMessage("page_showRoom_overview_header_options_edit")}
              </MenuItem>
            </AppRouteLink>

            <AppRouteLink route={appRoutes.viewRoomCredentials}>
              <MenuItem dense disableRipple>
                <ListItemIcon>
                  <LocalPoliceIcon />
                </ListItemIcon>

                {getMessage(
                  "page_showRoom_overview_header_options_credentials"
                )}
              </MenuItem>
            </AppRouteLink>

            <Divider sx={{ my: 1 }} />

            <ShowRoomOverviewHeaderOptionsDelete />
          </MenuList>
        </div>
      }
    />
  </>
)

export default ShowRoomOverviewHeaderOptions
