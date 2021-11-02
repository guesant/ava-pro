import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";
import { matchPath, useLocation } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { routes } from "../../Routes";

export enum ViewRoomDashboardTabs {
  Cursos,
  Chats,
}

const useCurrentTab = () => {
  const location = useLocation();

  const currentTab = useMemo(() => {
    const match = [
      { path: routes.viewRoomCourses(), tab: ViewRoomDashboardTabs.Cursos },
      { path: routes.viewRoomChats(), tab: ViewRoomDashboardTabs.Chats },
    ].find(({ path }) => matchPath(location.pathname, { path, exact: true }));

    return match?.tab ?? null;
  }, [location.pathname]);

  return currentTab;
};

const useTabs = () => {
  const history = useHistory();
  const id = useCurrentRoomId(false);
  const currentTab = useCurrentTab();

  const handleTab = useCallback(
    (tab: ViewRoomDashboardTabs) => {
      switch (tab) {
        case ViewRoomDashboardTabs.Cursos: {
          history.push(routes.viewRoomCourses({ id }));
          break;
        }
        case ViewRoomDashboardTabs.Chats: {
          history.push(routes.viewRoomChats({ id }));
          break;
        }
      }
    },
    [history, id]
  );

  return { currentTab, handleTab };
};

const ViewRoomRouterDashboardTabs = () => {
  const { currentTab, handleTab } = useTabs();

  const handleTabChange = (_event: any, tab: ViewRoomDashboardTabs) =>
    handleTab(tab);

  return (
    <>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab label="Cursos" />
        <Tab label="Chats" />
      </Tabs>
      <Divider />
    </>
  );
};

export default ViewRoomRouterDashboardTabs;
