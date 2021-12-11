import { Search } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/DataForMessageArea/Search"
import { IMessageAreaContact } from "@ava-pro/crawlers/lib/Typings/IMessageAreaContact"
import { FC } from "react"
import { useQuery, UseQueryResult } from "react-query"
import { createContext, useContextSelector } from "use-context-selector"
import { useDebounce } from "use-debounce"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"
import { RoomContext } from "../../Components/RoomContext"
import { ShowRoomSearchChatsContext } from "../ShowRoomSearchChats/ShowRoomSearchChatsContext"

type IShowRoomSearchChatsProfilesContext = {
  profilesQuery: UseQueryResult<{
    contacts: IMessageAreaContact[]
    nonContacts: IMessageAreaContact[]
  }>
}

export const ShowRoomSearchChatsProfilesContext = createContext(
  {} as IShowRoomSearchChatsProfilesContext
)

export const ShowRoomSearchChatsProfilesContextProvider: FC = ({
  children
}) => {
  const userId = useContextSelector(RoomAuthedContext, ({ userId }) => userId)

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const inputSearchText = useContextSelector(
    ShowRoomSearchChatsContext,
    ({ searchText }) => searchText.trim()
  )

  const [debouncedSearchText] = useDebounce(inputSearchText, 1000)

  const profilesQuery = useQuery(
    [userId, "search", debouncedSearchText, crawlerFetch],
    async () => {
      if (userId !== null && debouncedSearchText.length > 0) {
        const { contacts, noncontacts: nonContacts } = await Search(
          crawlerFetch
        )({ userid: userId, search: debouncedSearchText })
        return { contacts, nonContacts }
      }
      return { contacts: [], nonContacts: [] }
    }
  )

  const isLoading =
    profilesQuery.isLoading ||
    (inputSearchText !== debouncedSearchText && inputSearchText.length > 0)

  return (
    <ShowRoomSearchChatsProfilesContext.Provider
      value={{ profilesQuery: Object.assign({}, profilesQuery, { isLoading }) }}
    >
      {children}
    </ShowRoomSearchChatsProfilesContext.Provider>
  )
}
