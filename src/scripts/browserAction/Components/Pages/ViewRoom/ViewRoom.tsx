/* eslint-disable react/prop-types */
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import { ViewRoomContextProvider } from "./ViewRoomContext";
import { ViewRoomCoursesContextProvider } from "./ViewRoomCoursesContext";

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
      </Switch>
    </ViewRoomCoursesContextProvider>
  </ViewRoomContextProvider>
);

export default ViewRoom;
