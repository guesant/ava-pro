import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage"
import { getSelectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/settings/get-selected-room.slicer"
import { Navigate } from "react-router-dom"
import Loading from "../../Components/Loading/Loading"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"

const AppInitialRoute = () => {
  const { value: selectedRoom, isLoading } = useExtensionStorageSlicer(
    getSelectedRoom,
    null
  )

  if (isLoading) {
    return (
      <Page>
        <PageContent>
          <Loading />
        </PageContent>
      </Page>
    )
  }

  return selectedRoom !== null ? (
    <Navigate to={`/rooms/${selectedRoom}`} />
  ) : (
    <Navigate to={"/rooms"} />
  )
}

export default AppInitialRoute
