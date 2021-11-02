import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import ViewRoomRouterDashboardTabs from "./ViewRoomRouterDashboardTabs";

const ViewRoomCourses = loadable(
  () => import("../ViewRoomCourses/ViewRoomCourses")
);

const ViewRoomCoursesHeader = loadable(
  () => import("../ViewRoomCourses/ViewRoomCoursesHeader")
);

const ViewRoomRouterDashboard = () => {
  return (
    <>
      <div className="page">
        <Switch>
          <Route path={routes.viewRoomCourses()} exact>
            <ViewRoomCoursesHeader />
          </Route>
        </Switch>

        <ViewRoomRouterDashboardTabs />

        <div className="pageContent">
          <Switch>
            <Route path={routes.viewRoomCourses()} exact>
              <ViewRoomCourses />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default ViewRoomRouterDashboard;
