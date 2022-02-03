import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import {
  makeStorageMutator,
  useExtensionStorageSlicer
} from "@ava-pro/shared/lib/features/storage"
import { IFilterCoursesByStatus } from "@ava-pro/shared/lib/features/storage/schemas/settings/filter-courses-by-status"
import { getFilterCoursesBy } from "@ava-pro/shared/lib/features/storage/schemas/settings/filter-courses-by-status/get-filter-courses-by-status.slicer"
import DoneIcon from "@mui/icons-material/Done"
import PendingActionsIcon from "@mui/icons-material/PendingActions"
import UpdateIcon from "@mui/icons-material/Update"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListSubheader from "@mui/material/ListSubheader"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Typography from "@mui/material/Typography"
import { createElement } from "react"

const filterByOptions = [
  {
    value: IFilterCoursesByStatus.PAST,
    icon: DoneIcon,
    text: getMessage("page_showRoom_overview_courses_query_filterBy_past")
  },
  {
    value: IFilterCoursesByStatus.IN_PROGRESS,
    icon: PendingActionsIcon,
    text: getMessage("page_showRoom_overview_courses_query_filterBy_inProgress")
  },
  {
    value: IFilterCoursesByStatus.FUTURE,
    icon: UpdateIcon,
    text: getMessage("page_showRoom_overview_courses_query_filterBy_future")
  }
]

const handleUpdateFilterCoursesBy = makeStorageMutator(
  (state, payload: IFilterCoursesByStatus) => {
    state.settings.filterCoursesByStatus = payload
  }
)

const ShowRoomOverviewCoursesHeaderQueryFilter = () => {
  const { value: status } = useExtensionStorageSlicer(
    getFilterCoursesBy,
    -1 as IFilterCoursesByStatus | -1
  )

  return (
    <>
      <ListSubheader sx={{ lineHeight: 1, backgroundColor: "transparent" }}>
        <Typography variant="caption">
          {getMessage("page_showRoom_overview_courses_query_filterBy")}
        </Typography>
      </ListSubheader>

      <MenuList>
        {filterByOptions.map(({ value, text, icon }) => (
          <MenuItem
            dense
            key={value}
            disableRipple
            selected={status === value}
            onClick={() => void handleUpdateFilterCoursesBy(value)}
          >
            <ListItemIcon>{createElement(icon)}</ListItemIcon>
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </>
  )
}

export default ShowRoomOverviewCoursesHeaderQueryFilter
