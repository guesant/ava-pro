import CircularProgress from "@mui/material/CircularProgress";
import classes from "./Loading.module.css";

const Loading = () => (
  <div className={classes.loading}>
    <CircularProgress variant="indeterminate" />
  </div>
);

export default Loading;
