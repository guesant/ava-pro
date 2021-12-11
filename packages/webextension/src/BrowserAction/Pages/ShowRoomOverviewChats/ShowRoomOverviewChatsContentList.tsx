import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import { RoomChatsContext } from "../../Components/RoomChatsContext"
import ShowRoomOverviewChatsContentListItem from "./ShowRoomOverviewChatsContentListItem"

const ShowRoomOverviewChatsContentList = () => {
  const data = useContextSelector(
    RoomChatsContext,
    ({ conversationsQuery: { data } }) => data || []
  )

  return (
    <>
      <Virtuoso
        data={data}
        style={{ width: "100%", height: "100%", listStyle: "none" }}
        itemContent={(_, contact) => (
          <ShowRoomOverviewChatsContentListItem contact={contact} />
        )}
      />
    </>
  )
}

export default ShowRoomOverviewChatsContentList
