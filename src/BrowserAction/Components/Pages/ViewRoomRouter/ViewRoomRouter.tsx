import loadable from "@loadable/component";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";

const ViewRoomChat = loadable(() => import("../ViewRoomChat/ViewRoomChat"));

const ViewRoomChats = loadable(() => import("../ViewRoomChats/ViewRoomChats"));

const ViewRoomChatsSearch = loadable(
  () => import("../ViewRoomChatsSearch/ViewRoomChatsSearch")
);

const ViewRoomCredentials = loadable(
  () => import("../ViewRoomCredentials/ViewRoomCredentials")
);

const ViewRoomCourses = loadable(
  () => import("../ViewRoomCourses/ViewRoomCourses")
);

const ViewRoomCoursesSearch = loadable(
  () => import("../ViewRoomCoursesSearch/ViewRoomCoursesSearch")
);

const ViewRoomRouter = () => {
  const id = useCurrentRoomId(false);
  return (
    <>
      <Switch>
        <Route path={routes.viewRoomCourses()} exact>
          <ViewRoomCourses />
        </Route>

        <Route path={routes.viewRoomCoursesSearch()} exact>
          <ViewRoomCoursesSearch />
        </Route>

        <Route path={routes.viewRoomChats()} exact>
          <ViewRoomChats />
        </Route>

        <Route path={routes.viewRoomChatsSearch()} exact>
          <ViewRoomChatsSearch />
        </Route>

        <Route path={routes.viewRoomChat()} exact>
          <ViewRoomChat />
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
