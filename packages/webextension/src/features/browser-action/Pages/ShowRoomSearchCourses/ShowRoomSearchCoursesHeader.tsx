import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import SearchField from "../../Components/SearchField/SearchField"
import { ShowRoomSearchCoursesContext } from "./ShowRoomSearchCoursesContext"

const ShowRoomSearchCoursesHeader = () => {
  const searchText = useContextSelector(
    ShowRoomSearchCoursesContext,
    ({ searchText }) => searchText
  )
  const setSearchText = useContextSelector(
    ShowRoomSearchCoursesContext,
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
            "page_showRoom_searchCourses_form_input_search"
          )}
        />
      }
    />
  )
}

export default ShowRoomSearchCoursesHeader
