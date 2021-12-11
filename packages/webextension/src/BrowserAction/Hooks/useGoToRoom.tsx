import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useGoToRoom = () => {
  const navigate = useNavigate()
  return useCallback((id: string) => void navigate(`/rooms/${id}`), [navigate])
}
