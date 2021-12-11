import Box from "@mui/material/Box"
import PageContent from "../../Components/PageContent/PageContent"
import ShowRoomCredentialsContentInputAutoLogin from "./ShowRoomCredentialsContentInputAutoLogin"
import ShowRoomCredentialsContentInputPassword from "./ShowRoomCredentialsContentInputPassword"
import ShowRoomCredentialsContentInputUsername from "./ShowRoomCredentialsContentInputUsername"

const ShowRoomCredentialsContent = () => (
  <PageContent>
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <ShowRoomCredentialsContentInputUsername />
      <ShowRoomCredentialsContentInputPassword />
      <ShowRoomCredentialsContentInputAutoLogin />
    </Box>
  </PageContent>
)

export default ShowRoomCredentialsContent
