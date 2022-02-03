import Box from "@mui/material/Box"
import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Loading from "./Components/Loading/Loading"
import AppInitialRoute from "./Pages/AppInitialRoute/AppInitialRoute"

const PageErrorNotFound = lazy(
  () => import("./Pages/PageErrorNotFound/PageErrorNotFound")
)

const AddRoom = lazy(() => import("./Pages/AddRoom/AddRoom"))

const ListRooms = lazy(() => import("./Pages/ListRooms/ListRooms"))

const ListAllDetectedRooms = lazy(
  () => import("./Pages/ListAllDetectedRooms/ListAllDetectedRooms")
)

const ShowRoom = lazy(() => import("./Pages/ShowRoom/ShowRoom"))

const ShowRoomOverview = lazy(
  () => import("./Pages/ShowRoomOverview/ShowRoomOverview")
)

const ShowRoomCredentials = lazy(
  () => import("./Pages/ShowRoomCredentials/ShowRoomCredentials")
)

const ShowRoomOverviewCourses = lazy(
  () => import("./Pages/ShowRoomOverviewCourses/ShowRoomOverviewCourses")
)

const ShowRoomOverviewConversations = lazy(
  () =>
    import(
      "./Pages/ShowRoomOverviewConversations/ShowRoomOverviewConversations"
    )
)

const ShowRoomSearchCourses = lazy(
  () => import("./Pages/ShowRoomSearchCourses/ShowRoomSearchCourses")
)

const ShowRoomSearchMessaging = lazy(
  () => import("./Pages/ShowRoomSearchMessaging/ShowRoomSearchMessaging")
)

const ShowRoomEdit = lazy(() => import("./Pages/ShowRoomEdit/ShowRoomEdit"))

const ShowRoomChat = lazy(() => import("./Pages/ShowRoomChat/ShowRoomChat"))

const ShowRoomConversation = lazy(
  () => import("./Pages/ShowRoomConversation/ShowRoomConversation")
)

const Settings = lazy(() => import("./Pages/Settings/Settings"))

const SettingsStorageDataExport = lazy(
  () => import("./Pages/SettingsStorageDataExport/SettingsStorageDataExport")
)

const SettingsStorageDataImport = lazy(
  () => import("./Pages/SettingsStorageDataImport/SettingsStorageDataImport")
)

const App = () => (
  <Box className="app">
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="rooms" element={<ListRooms />} />

        <Route path="rooms/add" element={<AddRoom />} />

        <Route path="rooms/detected" element={<ListAllDetectedRooms />} />

        <Route path="rooms/:id" element={<ShowRoom />}>
          <Route path={"courses"} element={<ShowRoomOverview />}>
            <Route path={""} element={<ShowRoomOverviewCourses />} />
          </Route>

          <Route path={"conversations"} element={<ShowRoomOverview />}>
            <Route path={""} element={<ShowRoomOverviewConversations />} />
          </Route>

          <Route
            path={"conversations/:conversationId"}
            element={<ShowRoomConversation />}
          />

          <Route path={"chats/:userId"} element={<ShowRoomChat />} />

          <Route path={"search"}>
            <Route path={"courses"} element={<ShowRoomSearchCourses />} />
            <Route
              path={"conversations"}
              element={<ShowRoomSearchMessaging />}
            />
          </Route>

          <Route path={"credentials"} element={<ShowRoomCredentials />} />

          <Route path={"settings"} element={<ShowRoomEdit />} />

          <Route path="" element={<Navigate to="courses" />} />
        </Route>

        <Route path={"settings"}>
          <Route path={""} element={<Settings />} />

          <Route path={"data/export"} element={<SettingsStorageDataExport />} />

          <Route path={"data/import"} element={<SettingsStorageDataImport />} />
        </Route>

        <Route path="" element={<AppInitialRoute />} />

        <Route path="*" element={<PageErrorNotFound />} />
      </Routes>
    </Suspense>
  </Box>
)

export default App
