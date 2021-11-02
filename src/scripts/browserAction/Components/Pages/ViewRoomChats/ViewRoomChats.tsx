import ViewRoomChatsList from "./ViewRoomChatsList";
import ViewRoomNeedsAuth from "../ViewRoom/ViewRoomNeedsAuth";
import ViewRoomChatsHeader from "./ViewRoomChatsHeader";
import ViewRoomRouterDashboardTabs from "../ViewRoomRouter/ViewRoomRouterDashboardTabs";
import ViewRoomChatsContextProvider from "./ViewRoomChatsContext";

const ViewRoomChats = () => (
  <div className="page">
    <ViewRoomChatsContextProvider>
      <ViewRoomChatsHeader />
      <ViewRoomRouterDashboardTabs />
      <div className="pageContent">
        <ViewRoomNeedsAuth>
          <ViewRoomChatsList />
        </ViewRoomNeedsAuth>
      </div>
    </ViewRoomChatsContextProvider>
  </div>
);

export default ViewRoomChats;
