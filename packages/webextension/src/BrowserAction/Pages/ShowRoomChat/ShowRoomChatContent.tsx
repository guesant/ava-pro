import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import PageContent from "../../Components/PageContent/PageContent"
import ShowRoomChatContentMessages from "./ShowRoomChatContentMessages"
import ShowRoomChatContentTypeMessage from "./ShowRoomChatContentTypeMessage"
import ShowRoomChatHeader from "./ShowRoomChatHeader"

const ShowRoomChatContent = () => (
  <>
    <ShowRoomChatHeader />
    <PageContent spacing={false}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ overflow: "auto", flex: 1 }}>
          <ShowRoomChatContentMessages />
        </Box>
        <Divider />
        <ShowRoomChatContentTypeMessage />
      </Box>
    </PageContent>
  </>
)

export default ShowRoomChatContent
