import Header from "../../Header/Header";
import ViewRoomSearchHeaderGoBack from "./ViewRoomSearchHeaderGoBack";
import ViewRoomSearchHeaderInput from "./ViewRoomSearchHeaderInput";

const ViewRoomSearchHeader = () => (
  <Header
    startContent={
      <>
        <ViewRoomSearchHeaderGoBack />
        <ViewRoomSearchHeaderInput />
      </>
    }
  />
);

export default ViewRoomSearchHeader;
