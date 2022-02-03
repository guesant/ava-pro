import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBack from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

const ListAllDetectedRoomsHeader = () => {
  return (
    <PageHeader
      title={getMessage("page_listDetectedRooms")}
      beforeTitle={
        <>
          <Link to={-1 as any}>
            <IconButton color={"inherit"}>
              <ArrowBack />
            </IconButton>
          </Link>
        </>
      }
    />
  )
}
export default ListAllDetectedRoomsHeader
