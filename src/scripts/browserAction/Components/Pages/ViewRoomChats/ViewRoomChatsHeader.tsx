import ViewRoomGenericHeader from "../ViewRoomGenericHeader/ViewRoomGenericHeader";
import ViewRoomChatsHeaderSearch from "./ViewRoomChatsHeaderSearch";

const ViewRoomChatsHeader = () => (
  <ViewRoomGenericHeader
    endContentStart={
      <>
        <ViewRoomChatsHeaderSearch />
      </>
    }
  />
);

export default ViewRoomChatsHeader;
