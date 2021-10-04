import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCoursesContext } from "../ViewRoom/ViewRoomCoursesContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ViewRoomSearchHeaderInput = () => {
  const searchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ searchText }) => searchText
  );

  const setSearchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ setSearchText }) => setSearchText
  );

  const inputRef = useRef<HTMLInputElement>();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <InputBase
          autoFocus
          fullWidth
          inputRef={inputRef}
          value={searchText}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar curso..."
          onFocus={(e) => e.target.select()}
          onChange={(e) => setSearchText(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {searchText.length > 0 && (
                <IconButton
                  onClick={() => {
                    setSearchText("");
                    inputRef.current?.focus();
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </InputAdornment>
          }
        />
      </ThemeProvider>
    </>
  );
};

export default ViewRoomSearchHeaderInput;
