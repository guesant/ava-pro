import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import Header from "../../Header/Header";
import { routes } from "../../Routes";
import { AddRoomContext } from "./AddRoomContext";

const AddRoomHeaderSaveButton = () => {
  const isValid = useContextSelector(AddRoomContext, ({ isValid }) => isValid);

  const saveRoom = useContextSelector(
    AddRoomContext,
    ({ saveRoom }) => saveRoom
  );

  return (
    <Button
      color="inherit"
      onClick={saveRoom}
      variant="outlined"
      disabled={!isValid}
    >
      Salvar
    </Button>
  );
};

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
