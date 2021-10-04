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
import AppServicesProvider from "./AppServicesProvider";
import { routes } from "./Routes";

const AddRoom = loadable(() => import("./Pages/AddRoom/AddRoom"));
const ViewRoom = loadable(() => import("./Pages/ViewRoom/ViewRoom"));
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
    <CssBaseline />
    <div className={classes.app}>
      <AppProvider>
        <div className={classes.content}>
          <Router>
            <Switch>
              <AppServicesProvider>
                <Route path={routes.addRoom()}>
                  <AddRoom />
                </Route>
                <Route path={routes.viewRoom()}>
                  <ViewRoom />
                </Route>
                <Route path={routes.listRooms()} exact>
                  <ListRooms />
                </Route>
                <Route path="/">
                  <Redirect to={routes.listRooms()} />
                </Route>
              </AppServicesProvider>
            </Switch>
          </Router>
        </div>
      </AppProvider>
    </div>
  </Fragment>
);

export default App;
