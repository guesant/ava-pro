import { makeStorageMutator } from "@ava-pro/shared/lib/features/storage"
import { addRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms"
import { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { IRoomFormData } from "../../Components/RoomForm/IRoomFormData"
import { appRoutes, useNavigateAppRoute } from "../../Hooks/useAppRoutes"
import AddRoomContent from "./AddRoomContent"
import AddRoomHeader from "./AddRoomHeader"

const handleAddRoom = makeStorageMutator(addRoom)

const AddRoom = () => {
  const navigateAppRoute = useNavigateAppRoute()

  const methods = useForm({ mode: "onChange" })

  const handleAddRoomFromFormData = useCallback(
    async ({ name, url }: IRoomFormData) => {
      const { id } = await handleAddRoom({ name, url })
      navigateAppRoute(appRoutes.viewRoom, { id })
    },
    [navigateAppRoute]
  )

  const { handleSubmit } = methods

  return (
    <>
      <FormProvider {...methods}>
        <form
          className={"page"}
          onSubmit={handleSubmit(handleAddRoomFromFormData)}
        >
          <AddRoomHeader />
          <AddRoomContent />
        </form>
      </FormProvider>
    </>
  )
}

export default AddRoom
