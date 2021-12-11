import { useExtensionStorageSlicer } from "@ava-pro/shared/lib/Hooks/useExtensionStorageSlicer"
import { IRoom } from "@ava-pro/shared/lib/Interfaces/IRoom"
import { makeStorageMutator } from "@ava-pro/shared/lib/Storage/makeStorageMutator"
import { updateRoom } from "@ava-pro/shared/lib/Storage/Mutations/StorageRoomsMutations"
import { getRoomById } from "@ava-pro/shared/lib/Storage/Slicers/StorageRoomSlicers"
import { useCallback, useEffect, useMemo } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import Page from "../../Components/Page/Page"
import { ShowRoomContext } from "../ShowRoom/ShowRoomContext"
import ShowRoomCredentialsContent from "./ShowRoomCredentialsContent"
import ShowRoomCredentialsHeader from "./ShowRoomCredentialsHeader"

type IFormCredentials = IRoom["credentials"]

const handleUpdateRoom = makeStorageMutator(updateRoom)

const useUpdateRoomCredentials = () => {
  const id = useContextSelector(ShowRoomContext, ({ room }) => room!.id)
  return useCallback(
    async (credentials: IFormCredentials) =>
      handleUpdateRoom({
        id,
        recipe: (draft) => {
          draft.credentials = credentials
        }
      }).then(() => credentials),
    [id]
  )
}

const useRoomCredentials = () => {
  const id = useContextSelector(ShowRoomContext, ({ room }) => room!.id)

  const slicerGetRoomById = useMemo(() => getRoomById(id), [id])
  const { value: room } = useExtensionStorageSlicer(slicerGetRoomById, null)

  return useMemo(() => room?.credentials ?? undefined, [room?.credentials])
}

const ShowRoomCredentials = () => {
  const credentials = useRoomCredentials()
  const updateRoomCredentials = useUpdateRoomCredentials()
  const methods = useForm({ mode: "onChange", defaultValues: credentials })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    credentials && reset(credentials)
  }, [credentials])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(updateRoomCredentials)}>
        <Page>
          <ShowRoomCredentialsHeader />
          <ShowRoomCredentialsContent />
        </Page>
      </form>
    </FormProvider>
  )
}

export default ShowRoomCredentials
