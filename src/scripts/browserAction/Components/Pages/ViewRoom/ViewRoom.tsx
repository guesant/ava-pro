/* eslint-disable react/prop-types */
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import TabPanel from "../../TabPanel/TabPanel";
import { ViewRoomContext, ViewRoomContextProvider } from "./ViewRoomContext";
import { ViewRoomCourses } from "./ViewRoomCourses";
import { ViewRoomCoursesContextProvider } from "./ViewRoomCoursesContext";
import ViewRoomFallback from "./ViewRoomFallback";
import ViewRoomHeader from "./ViewRoomHeader";

enum ViewRoomTabs {
  Cursos,
}

const ViewRoom = () => {
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  const [currentTabIndex, setCurrentTabIndex] = useState(ViewRoomTabs.Cursos);

  const handleTabChange = (_event: any, newValue: number) => {
    setCurrentTabIndex(newValue);
  };

  if (room === null) {
    return <ViewRoomFallback />;
  }

  return (
    <div className="page">
      <ViewRoomHeader title={room.name} />

      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="Cursos" />
      </Tabs>

      <Divider />

      <div className="pageContent">
        <TabPanel value={currentTabIndex} index={ViewRoomTabs.Cursos}>
          <ViewRoomCourses />
        </TabPanel>
      </div>
    </div>
  );
};

export default function ViewRoomContainer() {
  return (
    <ViewRoomContextProvider>
      <ViewRoomCoursesContextProvider>
        <ViewRoom />
      </ViewRoomCoursesContextProvider>
    </ViewRoomContextProvider>
  );
}
