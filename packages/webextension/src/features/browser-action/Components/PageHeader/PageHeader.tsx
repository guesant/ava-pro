import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { FC, ReactNode } from "react"
import * as classes from "./PageHeader.module.css"

type IPageHeaderProps = {
  beforeTitle?: ReactNode
  title?: string
  afterTitle?: ReactNode
  mainContent?: ReactNode
}

const PageHeader: FC<IPageHeaderProps> = ({
  title,
  mainContent,
  beforeTitle,
  afterTitle
}) => (
  <AppBar position={"sticky"}>
    <Toolbar variant="dense" classes={{ gutters: classes.gutters }}>
      {beforeTitle}

      {title && (
        <Typography
          noWrap
          title={title}
          variant={"h6"}
          className={classes.title}
        >
          {title}
        </Typography>
      )}

      {mainContent}

      {afterTitle}
    </Toolbar>
  </AppBar>
)

export default PageHeader
