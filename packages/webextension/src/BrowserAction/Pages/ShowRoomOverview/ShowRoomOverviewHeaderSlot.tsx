import { FC } from "react"
import { createPortal } from "react-dom"
import { useContextSelector } from "use-context-selector"
import { ShowRoomOverviewHeaderContext } from "./ShowRoomOverviewHeaderContext"

const ShowRoomOverviewHeaderSlot: FC = ({ children }) => {
  const afterTitleRef = useContextSelector(
    ShowRoomOverviewHeaderContext,
    ({ afterTitleRef }) => afterTitleRef
  )

  if (!afterTitleRef) {
    return null
  }

  return <>{createPortal(<>{children}</>, afterTitleRef)}</>
}

export default ShowRoomOverviewHeaderSlot
