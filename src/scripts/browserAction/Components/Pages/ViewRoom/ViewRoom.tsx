/* eslint-disable react/prop-types */
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import TabPanel from "../../TabPanel/TabPanel";
import { ViewRoomContext, ViewRoomContextProvider } from "./ViewRoomContext";
import ViewRoomFallback from "./ViewRoomFallback";
import ViewRoomHeader from "./ViewRoomHeader";

enum ViewRoomTabs {}

const ViewRoom = () => {
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (_event: any, newValue: number) => {
    setCurrentTabIndex(newValue);
  };

  if (room === null) {
    return <ViewRoomFallback />;
  }

  return (
    <div className="page">
      <ViewRoomHeader title={room.name} />

      <Tabs value={currentTabIndex} onChange={handleTabChange}></Tabs>

      <Divider />

      <div className="pageContent"></div>
    </div>
  );
};

export default function ViewRoomContainer() {
  return (
    <ViewRoomContextProvider>
      <ViewRoom />
    </ViewRoomContextProvider>
  );
}
