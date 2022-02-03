import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { updateRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { useCallback, useEffect, useMemo } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import Page from "../../Components/Page/Page"
import { RoomContext } from "../../Components/RoomContext"
import { IRoomFormData } from "../../Components/RoomForm/IRoomFormData"
import ShowRoomEditContent from "./ShowRoomEditContent"
import ShowRoomEditHeader from "./ShowRoomEditHeader"

const useRoomSlimData = () => {
  const url = useContextSelector(RoomContext, ({ room: { url } }) => url)
  const name = useContextSelector(RoomContext, ({ room: { name } }) => name)
  return useMemo(() => ({ url, name }), [url, name])
}

const handleUpdateRoom = makeStorageMutator(updateRoom)

const ShowRoomEdit = () => {
  const slimRoomData = useRoomSlimData()
  const id = useContextSelector(RoomContext, ({ room: { id } }) => id)

  const methods = useForm({ mode: "onChange", defaultValues: slimRoomData })

  const {
    handleSubmit,
    reset,
    formState: { isValid, isDirty }
  } = methods

  const canSubmit = isDirty && isValid

  const onSubmit = useCallback(
    ({ url, name }: IRoomFormData) =>
      handleUpdateRoom({
        id,
        recipe: (room) => {
          room.url = url
          room.name = name
        }
      }),
    [id, canSubmit]
  )

  useEffect(() => {
    reset(slimRoomData)
  }, [slimRoomData])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Page>
          <ShowRoomEditHeader />
          <ShowRoomEditContent />
        </Page>
      </form>
    </FormProvider>
  )
}

export default ShowRoomEdit
