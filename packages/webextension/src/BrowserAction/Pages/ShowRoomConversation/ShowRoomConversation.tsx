import { useParams } from "react-router-dom"
import Page from "../../Components/Page/Page"
import { RoomChatContextProvider } from "../../Components/RoomChatContext"
import ShowRoomGuardNeedsAuth from "../ShowRoomGuardNeedsAuth/ShowRoomGuardNeedsAuth"
import ShowRoomConversationContent from "./ShowRoomConversationContent"
import ShowRoomConversationFallbacks from "./ShowRoomConversationFallbacks"

const ShowRoomConversation = () => {
  const { conversationId = "" } = useParams<"conversationId">()

  return (
    <ShowRoomGuardNeedsAuth>
      <Page>
        <RoomChatContextProvider conversationId={+conversationId}>
          <ShowRoomConversationFallbacks>
            <ShowRoomConversationContent />
          </ShowRoomConversationFallbacks>
        </RoomChatContextProvider>
      </Page>
    </ShowRoomGuardNeedsAuth>
  )
}

export default ShowRoomConversation
