import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { addRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { IRoomFormData } from "../../Components/RoomForm/IRoomFormData"
import AddRoomContent from "./AddRoomContent"
import AddRoomHeader from "./AddRoomHeader"

const handleAddRoom = makeStorageMutator(addRoom)

const AddRoom = () => {
  const navigate = useNavigate()

  const methods = useForm({ mode: "onChange" })

  const handleAddRoomFromFormData = useCallback(
    async ({ name, url }: IRoomFormData) => {
      const { id } = await handleAddRoom({ name, url })
      navigate(`/rooms/${id}`)
    },
    [navigate]
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
