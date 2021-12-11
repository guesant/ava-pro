import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import Loading from "../../Components/Loading/Loading"
import Page from "../../Components/Page/Page"
import { RoomContextProvider } from "../../Components/RoomContext"
import { ShowRoomContext } from "../ShowRoom/ShowRoomContext"
import ShowRoomOverviewHeader from "./ShowRoomOverviewHeader"
import { ShowRoomOverviewHeaderContextProvider } from "./ShowRoomOverviewHeaderContext"
import ShowRoomOverviewTabs from "./ShowRoomOverviewTabs"

const ShowRoomOverview = () => {
  const room = useContextSelector(ShowRoomContext, ({ room }) => room!)
  return (
    <Page>
      <ShowRoomOverviewHeaderContextProvider>
        <ShowRoomOverviewHeader />
        <ShowRoomOverviewTabs />
        <RoomContextProvider room={room}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </RoomContextProvider>
      </ShowRoomOverviewHeaderContextProvider>
    </Page>
  )
}

export default ShowRoomOverview
