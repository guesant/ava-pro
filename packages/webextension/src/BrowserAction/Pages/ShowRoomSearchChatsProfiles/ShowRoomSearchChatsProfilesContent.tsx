import { IMessageAreaContact } from "@ava-pro/crawlers/lib/Typings/IMessageAreaContact"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import ContactCard from "../../Components/ContactCard/ContactCard"
import { ShowRoomSearchChatsProfilesContext } from "./ShowRoomSearchChatsProfilesContext"

const ShowRoomSearchChatsProfilesContent = () => {
  const contacts = useContextSelector(
    ShowRoomSearchChatsProfilesContext,
    ({ profilesQuery: { data } }) => data?.contacts ?? []
  )

  const nonContacts = useContextSelector(
    ShowRoomSearchChatsProfilesContext,
    ({ profilesQuery: { data } }) => data?.nonContacts ?? []
  )

  const allContacts = useMemo(
    () => ([] as IMessageAreaContact[]).concat(contacts, nonContacts),
    [contacts, nonContacts]
  )

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        wordBreak: "break-all"
      }}
    >
      <Virtuoso
        data={allContacts}
        itemContent={(_, contact: IMessageAreaContact) => (
          <Box>
            <Link
              style={{ display: "block" }}
              to={`./../../chats/${contact.userid}`}
            >
              <ContactCard contact={contact} />
            </Link>
            <Divider />
          </Box>
        )}
      />
    </Box>
  )
}

export default ShowRoomSearchChatsProfilesContent
