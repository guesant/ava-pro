import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import ViewRoomRouterDashboardTabs from "./ViewRoomRouterDashboardTabs";

const ViewRoomChats = loadable(() => import("../ViewRoomChats/ViewRoomChats"));

const ViewRoomChatsHeader = loadable(
  () => import("../ViewRoomChats/ViewRoomChatsHeader")
);

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
          <Route path={routes.viewRoomChats()} exact>
            <ViewRoomChatsHeader />
          </Route>
        </Switch>

        <ViewRoomRouterDashboardTabs />

        <div className="pageContent">
          <Switch>
            <Route path={routes.viewRoomCourses()} exact>
              <ViewRoomCourses />
            </Route>
            <Route path={routes.viewRoomChats()} exact>
              <ViewRoomChats />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default ViewRoomRouterDashboard;
