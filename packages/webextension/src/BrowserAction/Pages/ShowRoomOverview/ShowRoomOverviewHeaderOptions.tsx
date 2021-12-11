import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { removeRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import LocalPoliceIcon from "@mui/icons-material/LocalPolice"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Divider from "@mui/material/Divider"
import ListItemIcon from "@mui/material/ListItemIcon"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import { FC, useCallback } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import MenuButton from "../../Components/MenuButton/MenuButton"
import { RoomContext } from "../../Components/RoomContext"

const handleRemoveRoom = makeStorageMutator(removeRoom)

const ShowRoomOverviewHeaderOptionsDelete = () => {
  const navigate = useNavigate()
  const id = useContextSelector(RoomContext, ({ room }) => room.id)

  const handleDelete = useCallback(async () => {
    await Promise.resolve(navigate("/rooms"))
    await handleRemoveRoom(id)
  }, [navigate])

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
            <Link to={"./../settings"}>
              <MenuItem dense disableRipple>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>

                {getMessage("page_showRoom_overview_header_options_edit")}
              </MenuItem>
            </Link>

            <Link to={"./../credentials"}>
              <MenuItem dense disableRipple>
                <ListItemIcon>
                  <LocalPoliceIcon />
                </ListItemIcon>

                {getMessage(
                  "page_showRoom_overview_header_options_credentials"
                )}
              </MenuItem>
            </Link>

            <Divider sx={{ my: 1 }} />

            <ShowRoomOverviewHeaderOptionsDelete />
          </MenuList>
        </div>
      }
    />
  </>
)

export default ShowRoomOverviewHeaderOptions
