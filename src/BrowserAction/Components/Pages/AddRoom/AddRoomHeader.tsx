import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { routes } from "../../Routes";
import AddRoomHeaderSaveButton from "./AddRoomHeaderSaveButton";

const AddRoomHeader = () => (
  <Header
    title="Adicionar Ambiente"
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
      <>
        <AddRoomHeaderSaveButton />
      </>
    }
  />
);

export default AddRoomHeader;
