/* eslint-disable react/prop-types */
import { ViewRoomContextProvider } from "./ViewRoomContext";
import { ViewRoomCoursesContextProvider } from "../ViewRoomCourses/ViewRoomCoursesContext";
import ViewRoomRouter from "../ViewRoomRouter/ViewRoomRouter";

const ViewRoom = () => (
  <ViewRoomContextProvider>
    <ViewRoomCoursesContextProvider>
      <ViewRoomRouter />
    </ViewRoomCoursesContextProvider>
  </ViewRoomContextProvider>
);

export default ViewRoom;
