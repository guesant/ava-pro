import { useMemo } from "react"
import { matchPath, useLocation } from "react-router"

export const useRouteMatch = (patterns: string[]) => {
  const location = useLocation()
  return useMemo(
    () =>
      patterns.find((pattern) =>
        Boolean(matchPath(pattern, location.pathname))
      ),
    [location]
  )
}
