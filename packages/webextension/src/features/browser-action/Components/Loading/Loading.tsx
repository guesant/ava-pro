import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

const Loading = () => (
  <Box
    sx={{
      flex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <CircularProgress variant={"indeterminate"} />
  </Box>
)

export default Loading
