import FilterListIcon from "@mui/icons-material/FilterList"
import Divider from "@mui/material/Divider"
import MenuButton from "../../Components/MenuButton/MenuButton"
import ShowRoomOverviewCoursesHeaderQueryFilter from "./ShowRoomOverviewCoursesHeaderQueryFilter"
import ShowRoomOverviewCoursesHeaderQuerySort from "./ShowRoomOverviewCoursesHeaderQuerySort"

const ShowRoomOverviewCoursesHeaderQuery = () => (
  <MenuButton
    icon={<FilterListIcon />}
    menuContent={
      <div>
        <ShowRoomOverviewCoursesHeaderQueryFilter />
        <Divider sx={{ mb: 1.5 }} />
        <ShowRoomOverviewCoursesHeaderQuerySort />
      </div>
    }
  />
)

export default ShowRoomOverviewCoursesHeaderQuery
