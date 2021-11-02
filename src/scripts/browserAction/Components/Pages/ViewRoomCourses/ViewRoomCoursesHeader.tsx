import ViewRoomGenericHeader from "../ViewRoomGenericHeader/ViewRoomGenericHeader";
import ViewRoomCoursesHeaderRefresh from "./ViewRoomCoursesHeaderRefresh";
import ViewRoomCoursesHeaderSearch from "./ViewRoomCoursesHeaderSearch";
import ViewRoomCoursesHeaderOptionsOrderBy from "./ViewRoomCoursesHeaderOptionsOrderBy";
import Divider from "@mui/material/Divider";

const ViewRoomCoursesHeader = () => {
  return (
    <ViewRoomGenericHeader
      endContentStart={
        <>
          <ViewRoomCoursesHeaderRefresh />
          <ViewRoomCoursesHeaderSearch />
        </>
      }
      optionsMenuProps={{
        startContent: [
          <ViewRoomCoursesHeaderOptionsOrderBy key={0} />,
          <Divider key={1} />,
        ],
      }}
    />
  );
};

export default ViewRoomCoursesHeader;
