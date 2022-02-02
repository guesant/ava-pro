import { useCallback, useMemo } from "react"

export const useLocaledTime = () => {
  const intl = useMemo(
    () => new Intl.DateTimeFormat(undefined, { timeStyle: "short" }),
    []
  )

  const getLocaledTime = useCallback(
    (time: number | Date) => intl.format(time),
    [intl]
  )

  return { getLocaledTime }
}
