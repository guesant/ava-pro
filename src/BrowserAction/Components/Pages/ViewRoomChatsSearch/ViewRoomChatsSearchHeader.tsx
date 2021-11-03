import Header from "../../Header/Header";
import ViewRoomChatsSearchHeaderGoBack from "./ViewRoomChatsSearchHeaderGoBack";
import ViewRoomChatsSearchHeaderInput from "./ViewRoomChatsSearchHeaderInput";

const ViewRoomChatsSearchHeader = () => (
  <Header
    startContent={
      <>
        <ViewRoomChatsSearchHeaderGoBack />
        <ViewRoomChatsSearchHeaderInput />
      </>
    }
  />
);

export default ViewRoomChatsSearchHeader;
