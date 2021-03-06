import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import {
  applyStorageMutation,
  useExtensionStorageSlicer
} from "@ava-pro/shared/lib/features/storage"
import { IDetectedRoomResponse } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/detected-room/response"
import { listDetectedRooms } from "@ava-pro/shared/lib/features/storage/schemas/detected-rooms/list-detected-rooms.slicer"
import { listRoomsOmitCache } from "@ava-pro/shared/lib/features/storage/schemas/rooms/list-rooms-omit-cache.slicer"
import { updateSelectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/settings"
import Alert from "@mui/material/Alert"
import { useEffect, useMemo } from "react"
import DetectedRoomList from "../../Components/DetectedRoomList/DetectedRoomList"
import FeedbackLoading from "../../Components/FeedbackLoading/FeedbackLoading"
import PageContent from "../../Components/PageContent/PageContent"
import PageSpacing from "../../Components/PageSpacing/PageSpacing"
import RoomList from "../../Components/RoomList/RoomList"

const ListRoomsContent = () => {
  useEffect(() => {
    void applyStorageMutation(updateSelectedRoom, null)
  }, [])

  const { value: rooms, isLoading } = useExtensionStorageSlicer(
    listRoomsOmitCache,
    []
  )

  const { value: detectedRooms } = useExtensionStorageSlicer(
    listDetectedRooms,
    []
  )

  const detectedRoomsWithoutResponse = useMemo(
    () =>
      detectedRooms
        .filter(({ response }) => response === IDetectedRoomResponse.NONE)
        .filter(({ url }) => rooms.every((i) => i.url !== url)),
    [detectedRooms, rooms]
  )

  const showRoomTooltip =
    !isLoading &&
    rooms.length === 0 &&
    detectedRoomsWithoutResponse.length === 0

  const showLoading =
    isLoading && rooms.length !== 0 && detectedRoomsWithoutResponse.length !== 0

  return (
    <PageContent spacing={false}>
      {(showLoading || showRoomTooltip) && (
        <PageSpacing>
          {showLoading && <FeedbackLoading />}

          {showRoomTooltip && (
            <Alert severity={"info"}>
              {getMessage("page_listRooms_feedback_noRoomsTooltip")}
            </Alert>
          )}
        </PageSpacing>
      )}

      <DetectedRoomList detectedRooms={detectedRoomsWithoutResponse} />

      <RoomList
        rooms={rooms}
        showSubHeader={
          detectedRoomsWithoutResponse.length > 0 && rooms.length > 0
        }
      />
    </PageContent>
  )
}

export default ListRoomsContent
