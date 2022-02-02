import { FC, useEffect } from "react"
import { useQuery, UseQueryResult } from "react-query"
import { createContext, useContextSelector } from "use-context-selector"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"
import { RoomContext } from "../../Components/RoomContext"
import { appRoutes, useNavigateAppRoute } from "../../Hooks/useAppRoutes"

type IShowRoomChatContext = {
  conversationBetweenUsersQuery: UseQueryResult<any | null>
}

export const ShowRoomChatContext = createContext({} as IShowRoomChatContext)

export const ShowRoomChatContextProvider: FC<{
  otherUserId: string | number
}> = ({ children, otherUserId }) => {
  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const navigateAppRoute = useNavigateAppRoute()

  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId!)

  const conversationBetweenUsersQuery = useQuery(
    [moodleClient, userId, otherUserId],
    async () =>
      userId &&
      moodleClient.getConversationBetweenUsers({
        userid: userId,
        otheruserid: otherUserId
      })
  )

  const { data } = conversationBetweenUsersQuery

  useEffect(() => {
    if (data) {
      navigateAppRoute(
        appRoutes.viewRoomConversation,
        { conversationId: data.id },
        { replace: true }
      )
    }
  }, [data, navigateAppRoute])

  return (
    <ShowRoomChatContext.Provider value={{ conversationBetweenUsersQuery }}>
      {children}
    </ShowRoomChatContext.Provider>
  )
}
