import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { lazy, Suspense, useState } from "react"
import Loading from "../../Components/Loading/Loading"
import PageContent from "../../Components/PageContent/PageContent"
import RoomGuardNeedsAuth from "../../Components/RoomGuardNeedsAuth/RoomGuardNeedsAuth"

const ShowRoomSearchChatsConversations = lazy(
  () =>
    import(
      "../ShowRoomSearchMessagingConversations/ShowRoomSearchMessagingConversations"
    )
)
const ShowRoomSearchChatsProfiles = lazy(
  () =>
    import("../ShowRoomSearchMessagingProfiles/ShowRoomSearchMessagingProfiles")
)

const TAB_PROFILES = "profiles"

const TAB_CONVERSATIONS = "conversations"

const ShowRoomSearchMessagingContent = () => {
  const [currentTab, setCurrentTab] = useState(TAB_CONVERSATIONS)

  return (
    <PageContent spacing={false}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          overflow: "hidden",
          flexDirection: "column"
        }}
      >
        <Tabs value={currentTab} onChange={(_, tab) => setCurrentTab(tab)}>
          <Tab
            label={getMessage(
              "page_showRoom_searchConversations_form_tab_onlyAlreadyStarted"
            )}
            value={TAB_CONVERSATIONS}
          />
          <Tab
            label={getMessage("page_showRoom_searchConversations_form_tab_all")}
            value={TAB_PROFILES}
          />
        </Tabs>

        <Divider />

        <Box sx={{ flex: 1, overflow: "auto" }}>
          <RoomGuardNeedsAuth wrapFeedback>
            <Suspense fallback={<Loading />}>
              {currentTab === TAB_CONVERSATIONS && (
                <ShowRoomSearchChatsConversations />
              )}

              {currentTab === TAB_PROFILES && <ShowRoomSearchChatsProfiles />}
            </Suspense>
          </RoomGuardNeedsAuth>
        </Box>
      </Box>
    </PageContent>
  )
}

export default ShowRoomSearchMessagingContent
