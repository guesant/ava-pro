import ShowRoomSearchChatsProfilesContent from "./ShowRoomSearchChatsProfilesContent"
import { ShowRoomSearchChatsProfilesContextProvider } from "./ShowRoomSearchChatsProfilesContext"
import ShowRoomSearchChatsProfilesFallbacks from "./ShowRoomSearchChatsProfilesFallbacks"

const ShowRoomSearchChatsProfiles = () => (
  <ShowRoomSearchChatsProfilesContextProvider>
    <ShowRoomSearchChatsProfilesFallbacks>
      <ShowRoomSearchChatsProfilesContent />
    </ShowRoomSearchChatsProfilesFallbacks>
  </ShowRoomSearchChatsProfilesContextProvider>
)

export default ShowRoomSearchChatsProfiles
