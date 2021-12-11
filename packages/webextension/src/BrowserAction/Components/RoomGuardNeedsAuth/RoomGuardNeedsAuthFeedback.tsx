import { routes } from "@ava-pro/crawlers/lib/routes"
import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import Alert from "@mui/material/Alert"
import normalizeUrl from "normalize-url"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import { RoomContext } from "../RoomContext"

const RoomGuardNeedsAuthFeedback = () => {
  const id = useContextSelector(RoomContext, ({ room: { id } }) => id)
  const url = useContextSelector(RoomContext, ({ room: { url } }) => url)

  const manualLoginUrl = useMemo(
    () =>
      `${normalizeUrl(url, {
        removeTrailingSlash: true,
        removeSingleSlash: true
      })}${routes.login()}`,
    [url]
  )

  const automaticLoginUrl = useMemo(() => `/rooms/${id}/credentials`, [id])

  return (
    <Alert severity={"warning"}>
      {getMessage("component_roomGuardNeedsAuth_feedback_1_intro")}{" "}
      <span
        onClick={() => window.open(manualLoginUrl)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {getMessage("component_roomGuardNeedsAuth_feedback_2_manualLogin")}
      </span>{" "}
      {getMessage("component_roomGuardNeedsAuth_feedback_3_orSetupThe")}{" "}
      <Link to={automaticLoginUrl} style={{ fontWeight: "bold" }}>
        {getMessage("component_roomGuardNeedsAuth_feedback_4_automaticLogin")}
      </Link>
      .
    </Alert>
  )
}

export default RoomGuardNeedsAuthFeedback
