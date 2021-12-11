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

const ShowRoomOverviewChats = lazy(
  () => import("./Pages/ShowRoomOverviewChats/ShowRoomOverviewChats")
)

const ShowRoomSearchCourses = lazy(
  () => import("./Pages/ShowRoomSearchCourses/ShowRoomSearchCourses")
)

const ShowRoomSearchChats = lazy(
  () => import("./Pages/ShowRoomSearchChats/ShowRoomSearchChats")
)

const ShowRoomEdit = lazy(() => import("./Pages/ShowRoomEdit/ShowRoomEdit"))

const ShowRoomChat = lazy(() => import("./Pages/ShowRoomChat/ShowRoomChat"))

const Settings = lazy(() => import("./Pages/Settings/Settings"))

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

          <Route path={"chats"} element={<ShowRoomOverview />}>
            <Route path={""} element={<ShowRoomOverviewChats />} />
          </Route>

          <Route path={"chats/:contactId"} element={<ShowRoomChat />} />

          <Route path={"search"}>
            <Route path={"courses"} element={<ShowRoomSearchCourses />} />
            <Route path={"chats"} element={<ShowRoomSearchChats />} />
          </Route>

          <Route path={"credentials"} element={<ShowRoomCredentials />} />

          <Route path={"settings"} element={<ShowRoomEdit />} />

          <Route path="" element={<Navigate to="courses" />} />
        </Route>

        <Route path="settings" element={<Settings />} />

        <Route path="" element={<AppInitialRoute />} />

        <Route path="*" element={<PageErrorNotFound />} />
      </Routes>
    </Suspense>
  </Box>
)

export default App
