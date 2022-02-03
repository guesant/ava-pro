import Box from "@mui/material/Box"
import { FC } from "react"
import PageSpacing from "../PageSpacing/PageSpacing"

const PageContent: FC<{ spacing?: boolean }> = ({
  children,
  spacing = true
}) => (
  <Box sx={{ flex: 1, overflow: "auto", width: "100%", height: "100%" }}>
    {spacing ? <PageSpacing>{children}</PageSpacing> : children}
  </Box>
)

export default PageContent
