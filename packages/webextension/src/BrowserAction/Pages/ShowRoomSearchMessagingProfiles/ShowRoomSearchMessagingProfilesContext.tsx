import { features } from "@ava-pro/moodle-client-js"
import { FC } from "react"
import { useQuery, UseQueryResult } from "react-query"
import { createContext, useContextSelector } from "use-context-selector"
import { useDebounce } from "use-debounce"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"
import { RoomContext } from "../../Components/RoomContext"
import { ShowRoomSearchMessagingContext } from "../ShowRoomSearchMessaging/ShowRoomSearchMessagingContext"

type IShowRoomSearchChatsProfilesContext = {
  profilesQuery: UseQueryResult<{
    contacts: features.message.ISearchUsersContactUserDto[]
    nonContacts: features.message.ISearchUsersContactUserDto[]
  }>
}

export const ShowRoomSearchMessagingProfilesContext = createContext(
  {} as IShowRoomSearchChatsProfilesContext
)

export const ShowRoomSearchChatsProfilesContextProvider: FC = ({
  children
}) => {
  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
  )

  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const inputSearchText = useContextSelector(
    ShowRoomSearchMessagingContext,
    ({ searchText }) => searchText.trim()
  )

  const [debouncedSearchText] = useDebounce(inputSearchText, 1000)

  const profilesQuery = useQuery(
    [userId, "search", debouncedSearchText, moodleClient],
    async () => {
      if (userId !== null && debouncedSearchText.length > 0) {
        const { contacts, noncontacts } = await moodleClient.searchUsers({
          userid: userId,
          search: debouncedSearchText
        })

        return { contacts, nonContacts: noncontacts }
      }
      return { contacts: [], nonContacts: [] }
    }
  )

  const isLoading =
    profilesQuery.isLoading ||
    (inputSearchText !== debouncedSearchText && inputSearchText.length > 0)

  return (
    <ShowRoomSearchMessagingProfilesContext.Provider
      value={{
        profilesQuery: Object.assign({}, profilesQuery, { isLoading })
      }}
    >
      {children}
    </ShowRoomSearchMessagingProfilesContext.Provider>
  )
}
