/* eslint-disable react/prop-types */
import { ViewRoomContextProvider } from "./ViewRoomContext";
import { ViewRoomCoursesContextProvider } from "../ViewRoomCourses/ViewRoomCoursesContext";
import { ViewRoomAuthedContextProvider } from "./ViewRoomAuthedContext";
import ViewRoomRouter from "../ViewRoomRouter/ViewRoomRouter";

const ViewRoom = () => (
  <ViewRoomContextProvider>
    <ViewRoomAuthedContextProvider>
      <ViewRoomCoursesContextProvider>
        <ViewRoomRouter />
      </ViewRoomCoursesContextProvider>
    </ViewRoomAuthedContextProvider>
  </ViewRoomContextProvider>
);

export default ViewRoom;
