import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { routes } from "../../Routes";

const ListRoomsHeader = () => (
  <div>
    <Header
      title="Ambientes"
      endContent={
        <>
          <Link to={routes.addRoom()}>
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
          </Link>
          <Link to={routes.settings()}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Link>
        </>
      }
    />
  </div>
);

export default ListRoomsHeader;
