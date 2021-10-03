import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import classes from "./Header.module.css";

type IHeaderProps = {
  title: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
};

const Header: React.FC<IHeaderProps> = ({
  title,
  endContent,
  startContent,
}) => (
  <div>
    <AppBar position="static">
      <Toolbar variant="dense" classes={{ gutters: classes.gutters }}>
        {startContent}
        <Typography noWrap variant="h6" className={classes.title}>
          {title}
        </Typography>
        {endContent}
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
