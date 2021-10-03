import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import classes from "./App.module.css";

const App = () => (
  <Fragment>
    <div className={classes.app}>
      <RoomsContextProvider>
        <CssBaseline />
        <div className={classes.content}>
          <Router>
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </Router>
        </div>
      </RoomsContextProvider>
    </div>
  </Fragment>
);

export default App;
