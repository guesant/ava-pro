import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import Header from "../../Header/Header";

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
        </>
      }
    />
  </div>
);

export default ListRoomsHeader;
