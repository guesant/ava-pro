import { FC, Fragment } from "react"
import { useContextSelector } from "use-context-selector"
import PageSpacing from "../PageSpacing/PageSpacing"
import { RoomAuthedContext } from "../RoomAuthedContext"
import RoomGuardNeedsAuthFeedback from "./RoomGuardNeedsAuthFeedback"

type IRoomGuardNeedsAuthProps = {
  wrapFeedback?: boolean
}

const RoomGuardNeedsAuth: FC<IRoomGuardNeedsAuthProps> = ({
  children,
  wrapFeedback = false
}) => {
  const isLoggedIn = useContextSelector(
    RoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  )

  const Wrapper = wrapFeedback ? PageSpacing : Fragment

  if (!isLoggedIn) {
    return (
      <Wrapper>
        <RoomGuardNeedsAuthFeedback />
      </Wrapper>
    )
  }

  return <>{children}</>
}

export default RoomGuardNeedsAuth
