import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import StorageRoomsService from "../../../../../services/StorageRoomsService";
import { useCurrentRoomId, ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import loadable from "@loadable/component";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";

const ViewRoomCredentials = loadable(
  () => import("../ViewRoomCredentials/ViewRoomCredentials")
);

const ViewRoomCoursesSearch = loadable(
  () => import("../ViewRoomCoursesSearch/ViewRoomCoursesSearch")
);

const ViewRoomRouterDashboard = loadable(
  () => import("./ViewRoomRouterDashboard")
);

const ViewRoomRouter = () => {
  const id = useCurrentRoomId(false);
  const roomUrl = useContextSelector(ViewRoomContext, ({ room }) => room!.url);

  useEffect(() => {
    StorageRoomsService.fetchCourses(roomUrl);
  }, [roomUrl]);

  return (
    <>
      <Switch>
        <Route path={[routes.viewRoomCourses(), routes.viewRoomChats()]} exact>
          <ViewRoomRouterDashboard />
        </Route>

        <Route path={routes.viewRoomCoursesSearch()} exact>
          <ViewRoomCoursesSearch />
        </Route>

        <Route path={routes.viewRoomCredentials()} exact>
          <ViewRoomCredentials />
        </Route>

        <Route path={routes.viewRoom()} exact>
          <Redirect to={routes.viewRoomCourses({ id })} />
        </Route>
      </Switch>
    </>
  );
};

export default ViewRoomRouter;
