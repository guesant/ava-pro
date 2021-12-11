import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { Link } from "react-router-dom"
import { useRouteMatch } from "../../Hooks/useRouteMatch"

const ShowRoomOverviewTabs = () => {
  const currentTab = useRouteMatch(["/rooms/:id/courses", "/rooms/:id/chats"])

  if (!currentTab) {
    return null
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tabs sx={{ flexGrow: 1 }} value={currentTab ?? ""}>
          <Tab
            label={getMessage("page_showRoom_overview_tab_courses")}
            value="/rooms/:id/courses"
            to="./../courses"
            component={Link}
          />
          <Tab
            label={getMessage("page_showRoom_overview_tab_chats")}
            value="/rooms/:id/chats"
            to="./../chats"
            component={Link}
          />
        </Tabs>
      </Box>
      <Divider />
    </Box>
  )
}

export default ShowRoomOverviewTabs
