import Box from "@mui/material/Box"
import RoomFormInputName from "./RoomFormInputName"
import RoomFormInputURL from "./RoomFormInputURL"

const RoomForm = () => (
  <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
    <RoomFormInputName />
    <RoomFormInputURL />
  </Box>
)

export default RoomForm
