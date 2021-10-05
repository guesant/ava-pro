/* eslint-disable react/prop-types */
import { useContextSelector } from "use-context-selector";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import ViewRoomCourses from "../ViewRoom/ViewRoomCourses";
import ViewRoomFallback from "../ViewRoom/ViewRoomFallback";
import ViewRoomSearchHeader from "./ViewRoomSearchHeader";

const ViewRoomSearchCourses = () => {
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  if (room === null) {
    return <ViewRoomFallback />;
  }

  return (
    <div className="page">
      <ViewRoomSearchHeader />
      <div className="pageContent">
        <ViewRoomCourses />
      </div>
    </div>
  );
};

export default ViewRoomSearchCourses;
