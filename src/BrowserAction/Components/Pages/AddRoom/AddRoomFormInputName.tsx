import { useContextSelector } from "use-context-selector";
import { AddRoomContext } from "./AddRoomContext";
import TextField from "@mui/material/TextField";
import { handleInputFocus } from "../../../Hooks/handleInputFocus";

const AddRoomFormInputName = () => {
  const name = useContextSelector(AddRoomContext, ({ name }) => name);
  const setName = useContextSelector(AddRoomContext, ({ setName }) => setName);

  return (
    <TextField
      autoFocus
      fullWidth
      type="text"
      label="Nome"
      value={name}
      margin="dense"
      onFocus={handleInputFocus}
      onChange={(e) => setName(e.target.value)}
      onBlur={(e) => setName(e.target.value.trim())}
    />
  );
};

export default AddRoomFormInputName;
