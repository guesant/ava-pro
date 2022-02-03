import { strcmp } from "@ava-pro/shared/lib/utils/strcmp"
import Box from "@mui/material/Box"
import { useMemo } from "react"
import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import ConversationCard from "../../Components/ConversationCard/ConversationCard"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import { ShowRoomSearchMessagingContext } from "../ShowRoomSearchMessaging/ShowRoomSearchMessagingContext"
import { ShowRoomSearchMessagingConversationsContext } from "./ShowRoomSearchMessagingConversationsContext"

const ShowRoomSearchMessagingConversationsContent = () => {
  const searchText = useContextSelector(
    ShowRoomSearchMessagingContext,
    ({ searchText }) => searchText.trim().toLocaleLowerCase()
  )

  const conversations = useContextSelector(
    ShowRoomSearchMessagingConversationsContext,
    ({ conversationsQuery: { data } }) => data ?? []
  )

  const filteredConversations = useMemo(
    () =>
      searchText.length > 0
        ? conversations
            .filter((conversation) =>
              conversation.name?.toLocaleLowerCase().includes(searchText)
            )
            .sort((a, b) => strcmp(a.name ?? "", b.name ?? ""))
        : [],
    [conversations, searchText]
  )

  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Virtuoso
        data={filteredConversations}
        style={{ height: "100%", width: "100%" }}
        itemContent={(_, conversation) => (
          <>
            <AppRouteLink
              route={appRoutes.viewRoomConversation}
              params={{ conversationId: conversation.id }}
            >
              <ConversationCard conversation={conversation} />
            </AppRouteLink>
          </>
        )}
      />
    </Box>
  )
}

export default ShowRoomSearchMessagingConversationsContent
