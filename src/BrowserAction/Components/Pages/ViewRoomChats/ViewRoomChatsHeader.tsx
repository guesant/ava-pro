import ViewRoomGenericHeader from "../ViewRoomGenericHeader/ViewRoomGenericHeader";
import ViewRoomChatsHeaderSearch from "./ViewRoomChatsHeaderSearch";
import ViewRoomChatsHeaderRefresh from "./ViewRoomChatsHeaderRefresh";

const ViewRoomChatsHeader = () => (
  <ViewRoomGenericHeader
    endContentStart={
      <>
        <ViewRoomChatsHeaderRefresh />
        <ViewRoomChatsHeaderSearch />
      </>
    }
  />
);

export default ViewRoomChatsHeader;
