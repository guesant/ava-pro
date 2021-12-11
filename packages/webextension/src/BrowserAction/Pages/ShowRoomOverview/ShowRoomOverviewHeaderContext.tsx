import { Dispatch, FC, SetStateAction, useState } from "react"
import { createContext } from "use-context-selector"

type IShowRoomOverviewHeaderContext = {
  afterTitleRef: HTMLDivElement | null
  setAfterTitleRef: Dispatch<SetStateAction<HTMLDivElement | null>>
}

export const ShowRoomOverviewHeaderContext = createContext(
  {} as IShowRoomOverviewHeaderContext
)

export const ShowRoomOverviewHeaderContextProvider: FC = ({ children }) => {
  // XXX: it seems use-context-selector dont support useRef...
  const [afterTitleRef, setAfterTitleRef] = useState<HTMLDivElement | null>(
    null
  )

  return (
    <ShowRoomOverviewHeaderContext.Provider
      value={{ afterTitleRef, setAfterTitleRef }}
    >
      {children}
    </ShowRoomOverviewHeaderContext.Provider>
  )
}
