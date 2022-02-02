import { getMessage } from "@ava-pro/shared/lib/features/i18n"
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
