import Header from "../../Header/Header";
import ViewRoomHeaderGoBack from "./ViewRoomHeaderGoBack";
import ViewRoomHeaderOptionsButton from "./ViewRoomHeaderOptionsButton";
import ViewRoomHeaderRefreshButton from "./ViewRoomHeaderRefreshButton";

const ViewRoomHeader: React.FC<{ title: string }> = ({ title }) => (
  <Header
    title={title}
    startContent={
      <>
        <ViewRoomHeaderGoBack />
      </>
    }
    endContent={
      <div>
        <ViewRoomHeaderRefreshButton />
        <ViewRoomHeaderOptionsButton />
      </div>
    }
  />
);

export default ViewRoomHeader;
