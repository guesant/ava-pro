import Page from "../../Components/Page/Page"
import { RoomCachedCoursesContextProvider } from "../../Components/RoomCachedCoursesContext"
import ShowRoomSearchChatsContent from "./ShowRoomSearchChatsContent"
import { ShowRoomSearchChatsContextProvider } from "./ShowRoomSearchChatsContext"
import ShowRoomSearchChatsHeader from "./ShowRoomSearchChatsHeader"

const ShowRoomSearchChats = () => (
  <RoomCachedCoursesContextProvider>
    <ShowRoomSearchChatsContextProvider>
      <Page>
        <ShowRoomSearchChatsHeader />
        <ShowRoomSearchChatsContent />
      </Page>
    </ShowRoomSearchChatsContextProvider>
  </RoomCachedCoursesContextProvider>
)

export default ShowRoomSearchChats
