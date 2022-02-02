import { getMessage } from "@ava-pro/shared/lib/features/i18n"
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
