import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import AddIcon from "@mui/icons-material/Add"
import HistoryIcon from "@mui/icons-material/History"
import SettingsIcon from "@mui/icons-material/Settings"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

const ListRoomsHeader = () => {
  return (
    <PageHeader
      title={getMessage("page_listRooms")}
      afterTitle={
        <>
          <Link to={"add"}>
            <IconButton color={"inherit"}>
              <AddIcon />
            </IconButton>
          </Link>
          <Link to={"detected"}>
            <IconButton color={"inherit"}>
              <HistoryIcon />
            </IconButton>
          </Link>
          <Link to={"../settings"}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Link>
        </>
      }
    />
  )
}

export default ListRoomsHeader
