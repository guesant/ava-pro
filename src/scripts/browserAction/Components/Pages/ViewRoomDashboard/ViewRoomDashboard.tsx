import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import TabPanel from "../../TabPanel/TabPanel";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import { ViewRoomCourses } from "../ViewRoom/ViewRoomCourses";
import ViewRoomFallback from "../ViewRoom/ViewRoomFallback";
import ViewRoomDashboardHeader from "./ViewRoomDashboardHeader";

enum ViewRoomDashboardTabs {
  Cursos,
}

const useTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(
    ViewRoomDashboardTabs.Cursos
  );

  const handleTabChange = (_event: any, newValue: number) => {
    setCurrentTabIndex(newValue);
  };

  return { currentTabIndex, handleTabChange };
};

const ViewRoomDashboard = () => {
  const { currentTabIndex, handleTabChange } = useTabs();
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  if (room === null) {
    return <ViewRoomFallback />;
  }

  return (
    <div className="page">
      <ViewRoomDashboardHeader title={room.name} />
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="Cursos" />
      </Tabs>
      <Divider />
      <div className="pageContent">
        <TabPanel value={currentTabIndex} index={ViewRoomDashboardTabs.Cursos}>
          <ViewRoomCourses />
        </TabPanel>
      </div>
    </div>
  );
};

export default ViewRoomDashboard;
