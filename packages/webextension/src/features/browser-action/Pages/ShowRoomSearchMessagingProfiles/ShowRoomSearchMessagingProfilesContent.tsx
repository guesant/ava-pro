import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { useMemo } from "react"
import { Virtuoso } from "react-virtuoso"
import { useContextSelector } from "use-context-selector"
import ContactCard from "../../Components/ContactCard/ContactCard"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import { ShowRoomSearchMessagingProfilesContext } from "./ShowRoomSearchMessagingProfilesContext"

const ShowRoomSearchMessagingProfilesContent = () => {
  const contacts = useContextSelector(
    ShowRoomSearchMessagingProfilesContext,
    ({ profilesQuery: { data } }) => data?.contacts ?? []
  )

  const nonContacts = useContextSelector(
    ShowRoomSearchMessagingProfilesContext,
    ({ profilesQuery: { data } }) => data?.nonContacts ?? []
  )

  const allContacts = useMemo(
    () => [...contacts, ...nonContacts],
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
        itemContent={(_, contact) => (
          <Box>
            <AppRouteLink
              route={appRoutes.viewRoomChat}
              style={{ display: "block" }}
              params={{ userId: contact.id }}
            >
              <ContactCard contact={contact} />
            </AppRouteLink>
            <Divider />
          </Box>
        )}
      />
    </Box>
  )
}

export default ShowRoomSearchMessagingProfilesContent
