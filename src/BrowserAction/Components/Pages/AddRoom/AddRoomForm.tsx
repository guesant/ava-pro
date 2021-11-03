import TextField from "@mui/material/TextField";
import normalizeUrl from "normalize-url";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { AddRoomContext } from "./AddRoomContext";

const handleFocus = (e: React.FocusEvent<HTMLInputElement>) =>
  e.target.select();

const AddRoomFormName = () => {
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
      onFocus={handleFocus}
      onChange={(e) => setName(e.target.value)}
      onBlur={(e) => setName(e.target.value.trim())}
    />
  );
};

const AddRoomFormUrl = () => {
  const url = useContextSelector(AddRoomContext, ({ url }) => url);
  const setUrl = useContextSelector(AddRoomContext, ({ setUrl }) => setUrl);

  return (
    <TextField
      required
      fullWidth
      type="url"
      label="URL"
      value={url}
      margin="dense"
      onFocus={handleFocus}
      onChange={(e) => setUrl(e.target.value)}
      onBlur={(e) =>
        e.target.value.trim() && setUrl(normalizeUrl(e.target.value.trim()))
      }
    />
  );
};

const AddRoomForm: React.FC = () => {
  const isValid = useContextSelector(AddRoomContext, ({ isValid }) => isValid);

  const saveRoom = useContextSelector(
    AddRoomContext,
    ({ saveRoom }) => saveRoom
  );

  return (
    <div className="pageSpacing">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isValid && saveRoom();
        }}
      >
        <AddRoomFormName />
        <AddRoomFormUrl />
        <button type="submit" disabled={!isValid} hidden>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
