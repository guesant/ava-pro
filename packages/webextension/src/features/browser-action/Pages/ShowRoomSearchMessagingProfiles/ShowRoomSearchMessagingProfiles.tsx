import ShowRoomSearchMessagingProfilesContent from "./ShowRoomSearchMessagingProfilesContent"
import { ShowRoomSearchChatsProfilesContextProvider } from "./ShowRoomSearchMessagingProfilesContext"
import ShowRoomSearchMessagingProfilesFallbacks from "./ShowRoomSearchMessagingProfilesFallbacks"

const ShowRoomSearchMessagingProfiles = () => (
  <ShowRoomSearchChatsProfilesContextProvider>
    <ShowRoomSearchMessagingProfilesFallbacks>
      <ShowRoomSearchMessagingProfilesContent />
    </ShowRoomSearchMessagingProfilesFallbacks>
  </ShowRoomSearchChatsProfilesContextProvider>
)

export default ShowRoomSearchMessagingProfiles
