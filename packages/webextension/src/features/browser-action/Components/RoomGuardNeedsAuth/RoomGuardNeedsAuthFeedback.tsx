import { routes } from "@ava-pro/moodle-client-js"
import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import Alert from "@mui/material/Alert"
import normalizeUrl from "normalize-url"
import { useMemo } from "react"
import { useContextSelector } from "use-context-selector"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import { RoomContext } from "../RoomContext"

const getManualLoginUrl = (baseURL: string) =>
  `${normalizeUrl(baseURL, {
    removeTrailingSlash: true,
    removeSingleSlash: true
  })}${routes.login()}`

const RoomGuardNeedsAuthFeedback = () => {
  const url = useContextSelector(RoomContext, ({ room: { url } }) => url)

  const manualLoginUrl = useMemo(() => getManualLoginUrl(url), [url])

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
      <AppRouteLink
        route={appRoutes.viewRoomCredentials}
        style={{ fontWeight: "bold" }}
      >
        {getMessage("component_roomGuardNeedsAuth_feedback_4_automaticLogin")}
      </AppRouteLink>
      .
    </Alert>
  )
}

export default RoomGuardNeedsAuthFeedback
