import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import SearchField from "../../Components/SearchField/SearchField"
import { ShowRoomSearchMessagingContext } from "./ShowRoomSearchMessagingContext"

const ShowRoomSearchMessagingHeader = () => {
  const searchText = useContextSelector(
    ShowRoomSearchMessagingContext,
    ({ searchText }) => searchText
  )

  const setSearchText = useContextSelector(
    ShowRoomSearchMessagingContext,
    ({ setSearchText }) => setSearchText
  )

  return (
    <PageHeader
      beforeTitle={
        <>
          <Link to={-1 as any}>
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
            "page_showRoom_searchConversations_form_input_search"
          )}
        />
      }
    />
  )
}

export default ShowRoomSearchMessagingHeader
