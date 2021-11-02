import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContextSelector } from "use-context-selector";
import { ViewRoomCoursesContext } from "../ViewRoomCourses/ViewRoomCoursesContext";
import SearchField from "../../SearchField";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ViewRoomCoursesSearchHeaderInput = () => {
  const isLoggedIn = useContextSelector(
    ViewRoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  );

  const searchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ searchText }) => searchText
  );

  const setSearchText = useContextSelector(
    ViewRoomCoursesContext,
    ({ setSearchText }) => setSearchText
  );

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SearchField
          value={searchText}
          disabled={!isLoggedIn}
          setValue={setSearchText}
          placeholder="Buscar curso..."
        />
      </ThemeProvider>
    </>
  );
};

export default ViewRoomCoursesSearchHeaderInput;
