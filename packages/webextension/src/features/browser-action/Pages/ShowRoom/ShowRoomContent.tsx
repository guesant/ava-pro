import { applyStorageMutation } from "@ava-pro/shared/lib/features/storage"
import { updateSelectedRoom } from "@ava-pro/shared/lib/features/storage/schemas/settings"
import { useEffect } from "react"
import { useContextSelector } from "use-context-selector"
import ShowRoomFallbackNotFound from "../ShowRoomFallbackNotFound/ShowRoomFallbackNotFound"
import ShowRoomContentOutlet from "./ShowRoomContentOutlet"
import { ShowRoomContext } from "./ShowRoomContext"
import ShowRoomFallbackLoading from "./ShowRoomFallbackLoading"

const ShowRoomContent = () => {
  const id = useContextSelector(ShowRoomContext, ({ room }) => room?.id ?? null)

  useEffect(() => {
    void applyStorageMutation(updateSelectedRoom, id)
  }, [id])

  const isLoading = useContextSelector(
    ShowRoomContext,
    ({ isLoading }) => isLoading
  )

  if (!id) {
    return isLoading ? (
      <ShowRoomFallbackLoading />
    ) : (
      <ShowRoomFallbackNotFound />
    )
  }

  return (
    <>
      <ShowRoomContentOutlet />
    </>
  )
}

export default ShowRoomContent
