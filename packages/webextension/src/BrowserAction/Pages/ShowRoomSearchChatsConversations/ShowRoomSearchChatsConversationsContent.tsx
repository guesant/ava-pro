import { strcmp } from "@ava-pro/shared/lib/Utils/strcmp"
import Box from "@mui/material/Box"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import ContactCard from "../../Components/ContactCard/ContactCard"
import { ShowRoomSearchChatsContext } from "../ShowRoomSearchChats/ShowRoomSearchChatsContext"
import { ShowRoomSearchChatsConversationsContext } from "./ShowRoomSearchChatsConversationsContext"

const ShowRoomSearchChatsConversationsContent = () => {
  const searchText = useContextSelector(
    ShowRoomSearchChatsContext,
    ({ searchText }) => searchText.trim().toLocaleLowerCase()
  )

  const conversations = useContextSelector(
    ShowRoomSearchChatsConversationsContext,
    ({ conversationsQuery: { data } }) => data ?? []
  )

  const filteredConversations = useMemo(
    () =>
      searchText.length > 0
        ? conversations
            .filter((i) => i.fullname.toLocaleLowerCase().includes(searchText))
            .sort((a, b) => strcmp(a.fullname, b.fullname))
        : [],
    [conversations, searchText]
  )

  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Virtuoso
        data={filteredConversations}
        style={{ height: "100%", width: "100%" }}
        itemContent={(_, contact) => (
          <>
            <Link to={`./../../chats/${contact.userid}`}>
              <ContactCard contact={contact} />
            </Link>
          </>
        )}
      />
    </Box>
  )
}

export default ShowRoomSearchChatsConversationsContent
