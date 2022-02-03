import Page from "../../Components/Page/Page"
import { RoomCachedCoursesContextProvider } from "../../Components/RoomCachedCoursesContext"
import ShowRoomSearchMessagingContent from "./ShowRoomSearchMessagingContent"
import { ShowRoomSearchChatsContextProvider } from "./ShowRoomSearchMessagingContext"
import ShowRoomSearchMessagingHeader from "./ShowRoomSearchMessagingHeader"

const ShowRoomSearchMessaging = () => (
  <RoomCachedCoursesContextProvider>
    <ShowRoomSearchChatsContextProvider>
      <Page>
        <ShowRoomSearchMessagingHeader />
        <ShowRoomSearchMessagingContent />
      </Page>
    </ShowRoomSearchChatsContextProvider>
  </RoomCachedCoursesContextProvider>
)

export default ShowRoomSearchMessaging
