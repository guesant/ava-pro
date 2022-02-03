import Box from "@mui/material/Box"
import { FC } from "react"

const PageSpacing: FC = ({ children }) => (
  <Box sx={{ p: 1, width: "100%", height: "100%" }}>{children}</Box>
)

export default PageSpacing
