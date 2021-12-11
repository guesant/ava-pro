import { useSnackbar } from "notistack"
import { useEffect, useState } from "react"
import { useContextSelector } from "use-context-selector"
import { RoomCachedCoursesContext } from "../Components/RoomCachedCoursesContext"

export const useFeedbackFetchCoursesQuery = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [key, setKey] = useState<string | number | null>(null)

  const [feedbackTimeoutId, setFeedbackTimeoutId] = useState<any | null>(null)

  const isLoadingCache = useContextSelector(
    RoomCachedCoursesContext,
    ({ isLoadingCache }) => isLoadingCache
  )

  useEffect(() => {
    if (isLoadingCache && key === null && feedbackTimeoutId === null) {
      const showFeedbackTimeout = setTimeout(() => {
        const key = enqueueSnackbar("Atualizando a lista de cursos...", {
          persist: true
        })
        setKey(key)
      }, 300)
      setFeedbackTimeoutId(showFeedbackTimeout)
    }

    if (!isLoadingCache && feedbackTimeoutId !== null) {
      clearTimeout(feedbackTimeoutId)
      setFeedbackTimeoutId(null)
      key && closeSnackbar(key)
      setKey(null)
    }
  }, [isLoadingCache, feedbackTimeoutId, key, enqueueSnackbar])
}
