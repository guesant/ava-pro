import Header from "../../Header/Header";
import ViewRoomDashboardHeaderGoBack from "./ViewRoomDashboardHeaderGoBack";
import ViewRoomHeaderOptions from "./ViewRoomDashboardHeaderOptions";
import ViewRoomDashboardHeaderRefreshButton from "./ViewRoomDashboardHeaderRefreshButton";
import ViewRoomDashboardHeaderSearchButton from "./ViewRoomDashboardHeaderSearchButton";

const ViewRoomDashboardHeader: React.FC<{ title: string }> = ({ title }) => (
  <Header
    title={title}
    startContent={
      <>
        <ViewRoomDashboardHeaderGoBack />
      </>
    }
    endContent={
      <div>
        <ViewRoomDashboardHeaderRefreshButton />
        <ViewRoomDashboardHeaderSearchButton />
        <ViewRoomHeaderOptions />
      </div>
    }
  />
);

export default ViewRoomDashboardHeader;
