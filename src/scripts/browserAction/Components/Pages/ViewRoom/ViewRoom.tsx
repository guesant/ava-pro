/* eslint-disable react/prop-types */
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import { ViewRoomContextProvider } from "./ViewRoomContext";
import { ViewRoomCoursesContextProvider } from "./ViewRoomCoursesContext";

const ViewRoomSearchCourses = loadable(
  () => import("../ViewRoomSearch/ViewRoomSearch")
);

const ViewRoomDashboard = loadable(
  () => import("../ViewRoomDashboard/ViewRoomDashboard")
);

const ViewRoom = () => (
  <ViewRoomContextProvider>
    <ViewRoomCoursesContextProvider>
      <Switch>
        <Route path={routes.viewRoom()} exact>
          <ViewRoomDashboard />
        </Route>
        <Route path={routes.viewRoomSearch()} exact>
          <ViewRoomSearchCourses />
        </Route>
      </Switch>
    </ViewRoomCoursesContextProvider>
  </ViewRoomContextProvider>
);

export default ViewRoom;
