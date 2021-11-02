import Header from "../../Header/Header";
import ViewRoomCoursesSearchHeaderGoBack from "./ViewRoomCoursesSearchHeaderGoBack";
import ViewRoomCoursesSearchHeaderInput from "./ViewRoomCoursesSearchHeaderInput";

const ViewRoomCoursesSearchHeader = () => (
  <Header
    startContent={
      <>
        <ViewRoomCoursesSearchHeaderGoBack />
        <ViewRoomCoursesSearchHeaderInput />
      </>
    }
  />
);

export default ViewRoomCoursesSearchHeader;
