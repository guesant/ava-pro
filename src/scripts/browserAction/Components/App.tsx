import CssBaseline from "@mui/material/CssBaseline";
import { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const AppProvider: React.FC = ({ children }) => (
  <>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
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
              <Route path="/"></Route>
            </Switch>
          </Router>
        </div>
      </AppProvider>
    </div>
  </Fragment>
);

export default App;
