import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContextSelector } from "use-context-selector";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import SearchField from "../../SearchField";
import { ViewRoomChatsSearchContext } from "./ViewRoomChatsSearchContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ViewRoomChatsSearchHeaderInput = () => {
  const isLoggedIn = useContextSelector(
    ViewRoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  );

  const searchText = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ searchText }) => searchText
  );

  const setSearchText = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ setSearchText }) => setSearchText
  );

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SearchField
          value={searchText}
          disabled={!isLoggedIn}
          setValue={setSearchText}
          placeholder="Buscar chat..."
        />
      </ThemeProvider>
    </>
  );
};

export default ViewRoomChatsSearchHeaderInput;
