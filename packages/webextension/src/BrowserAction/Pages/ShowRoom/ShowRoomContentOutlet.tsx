import { Outlet } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import { RoomAuthedContextProvider } from "../../Components/RoomAuthedContext"
import { RoomContextProvider } from "../../Components/RoomContext"
import { ShowRoomContext } from "./ShowRoomContext"

const ShowRoomContentOutlet = () => {
  const room = useContextSelector(ShowRoomContext, ({ room }) => room!)

  return (
    <RoomContextProvider room={room}>
      <RoomAuthedContextProvider>
        <Outlet />
      </RoomAuthedContextProvider>
    </RoomContextProvider>
  )
}

export default ShowRoomContentOutlet
