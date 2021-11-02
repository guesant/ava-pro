/* eslint-disable react/prop-types */
import ViewRoomCoursesList from "../ViewRoomCourses/ViewRoomCoursesList";
import ViewRoomCoursesSearchHeader from "./ViewRoomCoursesSearchHeader";

const ViewRoomCoursesSearch = () => {
  return (
    <div className="page">
      <ViewRoomCoursesSearchHeader />
      <div className="pageContent">
        <ViewRoomCoursesList />
      </div>
    </div>
  );
};

export default ViewRoomCoursesSearch;
