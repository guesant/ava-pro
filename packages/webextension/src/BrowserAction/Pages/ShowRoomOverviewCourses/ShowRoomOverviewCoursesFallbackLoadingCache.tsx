import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import PageContent from "../../Components/PageContent/PageContent"

const ShowRoomOverviewCoursesFallbackLoadingCache = () => (
  <PageContent>
    <Alert severity={"info"}>
      {getMessage("page_showRoom_overviewCourses_feedback_loadingCache")}
    </Alert>
  </PageContent>
)

export default ShowRoomOverviewCoursesFallbackLoadingCache
