import { useContextSelector } from "use-context-selector";
import { AddRoomContext } from "./AddRoomContext";
import Button from "@mui/material/Button";

const AddRoomHeaderSaveButton = () => {
  const isValid = useContextSelector(AddRoomContext, ({ isValid }) => isValid);
  return (
    <Button
      type="submit"
      color="inherit"
      variant="outlined"
      disabled={!isValid}
    >
      Salvar
    </Button>
  );
};

export default AddRoomHeaderSaveButton;
