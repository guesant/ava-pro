import { useMemo } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "./RoomContext"

export const useRoomCredentials = () => {
  const credentials = useContextSelector(
    RoomContext,
    ({ room: { credentials } }) => credentials
  )

  return useMemo(() => credentials, [JSON.stringify(credentials)])
}
