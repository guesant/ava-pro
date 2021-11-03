import ViewRoomCoursesList from "./ViewRoomCoursesList";
import ViewRoomCoursesHeader from "./ViewRoomCoursesHeader";
import ViewRoomRouterDashboardTabs from "../ViewRoomRouter/ViewRoomRouterDashboardTabs";

const ViewRoomCourses = () => (
  <div className="page">
    <ViewRoomCoursesHeader />
    <ViewRoomRouterDashboardTabs />
    <div className="pageContent">
      <ViewRoomCoursesList />
    </div>
  </div>
);

export default ViewRoomCourses;
