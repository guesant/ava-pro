import loadable from "@loadable/component";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { RoomsContextProvider } from "../Hooks/RoomsContext";
import { SettingsContextProvider } from "../Hooks/SettingsContext";
import classes from "./App.module.css";
import { routes } from "./Routes";

const ListRooms = loadable(() => import("./Pages/ListRooms/ListRooms"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const AppProvider: React.FC = ({ children }) => (
  <>
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <RoomsContextProvider>{children}</RoomsContextProvider>
      </SettingsContextProvider>
    </QueryClientProvider>
  </>
);

const App = () => (
  <Fragment>
    <div className={classes.app}>
      <AppProvider>
        <CssBaseline />
        <div className={classes.content}>
          <Router>
            <Switch>
              <Route path={routes.listRooms()}>
                <ListRooms />
              </Route>

              <Route path="/">
                <Redirect to={routes.listRooms()} />
              </Route>
            </Switch>
          </Router>
        </div>
      </AppProvider>
    </div>
  </Fragment>
);

export default App;
