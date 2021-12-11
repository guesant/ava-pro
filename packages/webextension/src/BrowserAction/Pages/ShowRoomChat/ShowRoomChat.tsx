import { useParams } from "react-router-dom"
import Page from "../../Components/Page/Page"
import { RoomChatContextProvider } from "../../Components/RoomChatContext"
import ShowRoomGuardNeedsAuth from "../ShowRoomGuardNeedsAuth/ShowRoomGuardNeedsAuth"
import ShowRoomChatContent from "./ShowRoomChatContent"
import ShowRoomChatFallbacks from "./ShowRoomChatFallbacks"

const ShowRoomChat = () => {
  const { contactId = "" } = useParams<"contactId">()
  return (
    <ShowRoomGuardNeedsAuth>
      <Page>
        <RoomChatContextProvider contactId={+contactId}>
          <ShowRoomChatFallbacks>
            <ShowRoomChatContent />
          </ShowRoomChatFallbacks>
        </RoomChatContextProvider>
      </Page>
    </ShowRoomGuardNeedsAuth>
  )
}

export default ShowRoomChat
