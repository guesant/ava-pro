import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import { RoomConversationsContext } from "../../Components/RoomConversationsContext"
import ShowRoomOverviewConversationsContentListItem from "./ShowRoomOverviewConversationsContentListItem"

const ShowRoomOverviewConversationsContentList = () => {
  const conversations = useContextSelector(
    RoomConversationsContext,
    ({ conversationsQuery: { data } }) => data || []
  )

  return (
    <>
      <Virtuoso
        data={conversations}
        style={{ width: "100%", height: "100%", listStyle: "none" }}
        itemContent={(_, contact) => (
          <ShowRoomOverviewConversationsContentListItem
            conversation={contact}
          />
        )}
      />
    </>
  )
}

export default ShowRoomOverviewConversationsContentList
