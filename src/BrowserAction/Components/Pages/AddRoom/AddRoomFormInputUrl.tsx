import { useContextSelector } from "use-context-selector";
import { AddRoomContext } from "./AddRoomContext";
import TextField from "@mui/material/TextField";
import { handleInputFocus } from "../../../Hooks/handleInputFocus";
import normalizeUrl from "normalize-url";
import React from "react";

const AddRoomFormInputUrl = () => {
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
      onFocus={handleInputFocus}
      onChange={(e) => setUrl(e.target.value)}
      onBlur={(e) =>
        e.target.value.trim() && setUrl(normalizeUrl(e.target.value.trim()))
      }
    />
  );
};

export default AddRoomFormInputUrl;
