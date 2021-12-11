import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/Hooks/useExtensionStorageSlicer"
import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import { ICoursesOrderBy } from "@ava-pro/shared/lib/Interfaces/ICoursesOrderBy"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { updateCoursesOrderBy } from "@ava-pro/shared/lib/Storage/Mutations/StorageSettingsMutations"
import { getCoursesOrderBy } from "@ava-pro/shared/lib/Storage/Slicers/StorageSettingsSlicers"
import HistoryIcon from "@mui/icons-material/History"
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListSubheader from "@mui/material/ListSubheader"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Typography from "@mui/material/Typography"
import { createElement } from "react"

const orderByOptions = [
  {
    value: ICoursesOrderBy.NAME,
    icon: SortByAlphaIcon,
    text: getMessage("page_showRoom_overview_courses_query_sortBy_name")
  },
  {
    value: ICoursesOrderBy.LAST_VISIT,
    icon: HistoryIcon,
    text: getMessage("page_showRoom_overview_courses_query_sortBy_lastAccess")
  }
]

const ShowRoomOverviewCoursesHeaderQuerySort = () => {
  const handleUpdateCoursesOrderBy = makeStorageMutator(updateCoursesOrderBy)

  const { value: orderBy } = useExtensionStorageSlicer(
    getCoursesOrderBy,
    -1 as ICoursesOrderBy | -1
  )

  return (
    <>
      <ListSubheader sx={{ lineHeight: 1, backgroundColor: "transparent" }}>
        <Typography variant="caption">
          {getMessage("page_showRoom_overview_courses_query_sortBy")}
        </Typography>
      </ListSubheader>

      <MenuList>
        {orderByOptions.map(({ value, text, icon }) => (
          <MenuItem
            dense
            key={value}
            disableRipple
            selected={orderBy === value}
            onClick={() => void handleUpdateCoursesOrderBy(value)}
          >
            <ListItemIcon>{createElement(icon, {})}</ListItemIcon>
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </>
  )
}

export default ShowRoomOverviewCoursesHeaderQuerySort
