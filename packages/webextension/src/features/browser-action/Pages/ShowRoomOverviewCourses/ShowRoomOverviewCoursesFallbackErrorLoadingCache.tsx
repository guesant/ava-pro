import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Alert from "@mui/material/Alert"
import { useContextSelector } from "use-context-selector"
import PageContent from "../../Components/PageContent/PageContent"
import { RoomCachedCoursesContext } from "../../Components/RoomCachedCoursesContext"

const ShowRoomOverviewCoursesFallbackErrorLoadingCache = () => {
  const reload = useContextSelector(
    RoomCachedCoursesContext,
    ({ reload }) => reload
  )

  return (
    <PageContent>
      <Alert severity={"error"}>
        {getMessage("page_showRoom_overviewCourses_feedback_error")}{" "}
        <span
          onClick={() => reload()}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          {getMessage("feedback_tryAgain")}.
        </span>
      </Alert>
    </PageContent>
  )
}

export default ShowRoomOverviewCoursesFallbackErrorLoadingCache
