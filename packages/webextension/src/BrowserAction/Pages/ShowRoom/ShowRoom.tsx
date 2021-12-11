import ShowRoomContent from "./ShowRoomContent"
import { ShowRoomContextProvider } from "./ShowRoomContext"

const ShowRoom = () => (
  <ShowRoomContextProvider>
    <ShowRoomContent />
  </ShowRoomContextProvider>
)

export default ShowRoom
