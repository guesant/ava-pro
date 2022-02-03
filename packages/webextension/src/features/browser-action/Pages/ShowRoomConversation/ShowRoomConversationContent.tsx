import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import PageContent from "../../Components/PageContent/PageContent"
import ShowRoomConversationContentTypeMessage from "./ShowRoomConversationContentTypeMessage"
import ShowRoomConversationHeader from "./ShowRoomConversationHeader"
import ShowRoomConversationMessages from "./ShowRoomConversationMessages"

const ShowRoomConversationContent = () => (
  <>
    <ShowRoomConversationHeader />
    <PageContent spacing={false}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={{ overflow: "auto", flex: 1 }}>
          <ShowRoomConversationMessages />
        </Box>
        <Divider />
        <ShowRoomConversationContentTypeMessage />
      </Box>
    </PageContent>
  </>
)

export default ShowRoomConversationContent
