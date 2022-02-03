import { Dispatch, FC, SetStateAction, useState } from "react"
import { createContext } from "use-context-selector"

type IShowRoomSearchChatsContext = {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
}

export const ShowRoomSearchMessagingContext = createContext(
  {} as IShowRoomSearchChatsContext
)

export const ShowRoomSearchChatsContextProvider: FC = ({ children }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <ShowRoomSearchMessagingContext.Provider
      value={{ searchText, setSearchText }}
    >
      {children}
    </ShowRoomSearchMessagingContext.Provider>
  )
}
