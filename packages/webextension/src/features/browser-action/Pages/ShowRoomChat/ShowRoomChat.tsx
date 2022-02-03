import { useParams } from "react-router-dom"
import Page from "../../Components/Page/Page"
import ShowRoomGuardNeedsAuth from "../ShowRoomGuardNeedsAuth/ShowRoomGuardNeedsAuth"
import { ShowRoomChatContextProvider } from "./ShowRoomChatContext"
import ShowRoomChatFallbacks from "./ShowRoomChatFallbacks"

const ShowRoomChat = () => {
  const { userId = "" } = useParams<"userId">()
  return (
    <ShowRoomGuardNeedsAuth>
      <Page>
        <ShowRoomChatContextProvider otherUserId={userId}>
          <ShowRoomChatFallbacks />
        </ShowRoomChatContextProvider>
      </Page>
    </ShowRoomGuardNeedsAuth>
  )
}

export default ShowRoomChat
