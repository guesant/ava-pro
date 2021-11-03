import loadable from "@loadable/component";
import CssBaseline from "@mui/material/CssBaseline";
import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import classes from "./App.module.css";
import AppCheckRoute from "./AppCheckRoute";
import { routes } from "./Routes";
import { AppProviders } from "./AppProviders";

const AddRoom = loadable(() => import("./Pages/AddRoom/AddRoom"));

const ViewRoom = loadable(() => import("./Pages/ViewRoom/ViewRoom"));

const ListRooms = loadable(() => import("./Pages/ListRooms/ListRooms"));

const Settings = loadable(() => import("./Pages/Settings/Settings"));
const SettingsLicenses = loadable(
  () => import("./Pages/SettingsLicenses/SettingsLicenses")
);

const App = () => (
  <Fragment>
    <CssBaseline />
    <div className={classes.app}>
      <AppProviders>
        <div className={classes.content}>
          <Router>
            <Switch>
              <AppCheckRoute>
                <Route path={routes.addRoom()}>
                  <AddRoom />
                </Route>

                <Route path={routes.viewRoom()}>
                  <ViewRoom />
                </Route>

                <Route path={routes.listRooms()} exact>
                  <ListRooms />
                </Route>

                <Route path={routes.settings()} exact>
                  <Settings />
                </Route>

                <Route path={routes.settingsLicenses()} exact>
                  <SettingsLicenses />
                </Route>

                <Route path="/">
                  <Redirect to={routes.listRooms()} />
                </Route>
              </AppCheckRoute>
            </Switch>
          </Router>
        </div>
      </AppProviders>
    </div>
  </Fragment>
);

export default App;
