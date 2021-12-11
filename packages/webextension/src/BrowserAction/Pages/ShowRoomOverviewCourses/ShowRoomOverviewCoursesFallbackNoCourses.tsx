import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import PageContent from "../../Components/PageContent/PageContent"

const ShowRoomOverviewCoursesFallbackNoCourses = () => (
  <PageContent>
    <Alert severity={"info"}>
      {getMessage("page_showRoom_overviewCourses_feedback_noCourses")}
    </Alert>
  </PageContent>
)

export default ShowRoomOverviewCoursesFallbackNoCourses
