import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/features/storage"
import { listDetectedRooms } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/list-detected-rooms.slicer"
import Alert from "@mui/material/Alert"
import DetectedRoomList from "../../Components/DetectedRoomList/DetectedRoomList"
import FeedbackLoading from "../../Components/FeedbackLoading/FeedbackLoading"
import PageContent from "../../Components/PageContent/PageContent"

const ListAllDetectedRoomsContent = () => {
  const { value: detectedRooms, isLoading } = useExtensionStorageSlicer(
    listDetectedRooms,
    []
  )

  const showLoading = isLoading && detectedRooms.length === 0

  if (showLoading) {
    return (
      <PageContent>
        <FeedbackLoading />
      </PageContent>
    )
  }

  if (detectedRooms.length === 0) {
    return (
      <PageContent>
        <Alert severity={"info"}>
          {getMessage("page_listDetectedRooms_feedback_noneDetected")}
        </Alert>
      </PageContent>
    )
  }

  return (
    <PageContent>
      <DetectedRoomList showSubHeader={false} detectedRooms={detectedRooms} />
    </PageContent>
  )
}

export default ListAllDetectedRoomsContent
