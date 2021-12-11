import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import SearchField from "../../Components/SearchField/SearchField"
import { ShowRoomSearchChatsContext } from "./ShowRoomSearchChatsContext"

const ShowRoomSearchChatsHeader = () => {
  const searchText = useContextSelector(
    ShowRoomSearchChatsContext,
    ({ searchText }) => searchText
  )
  const setSearchText = useContextSelector(
    ShowRoomSearchChatsContext,
    ({ setSearchText }) => setSearchText
  )

  return (
    <PageHeader
      beforeTitle={
        <>
          <Link to={-1}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
      mainContent={
        <SearchField
          value={searchText}
          setValue={setSearchText}
          placeholder={getMessage(
            "page_showRoom_searchChats_form_input_search"
          )}
        />
      }
    />
  )
}

export default ShowRoomSearchChatsHeader
