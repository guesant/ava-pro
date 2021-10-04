import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { routes } from "../../Routes";
import ViewRoomHeaderOptionsButton from "./ViewRoomHeaderOptionsButton";
import ViewRoomHeaderRefreshButton from "./ViewRoomHeaderRefreshButton";

const ViewRoomHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      title={title}
      startContent={
        <>
          <Link to={routes.listRooms()}>
            <IconButton color="inherit">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
      endContent={
        <div>
          <ViewRoomHeaderRefreshButton />
          <ViewRoomHeaderOptionsButton />
        </div>
      }
    />
  );
};

export default ViewRoomHeader;
