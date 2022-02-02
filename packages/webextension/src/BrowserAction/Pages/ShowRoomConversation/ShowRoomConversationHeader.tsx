import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import RefreshIcon from "@mui/icons-material/Refresh"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { RoomChatContext } from "../../Components/RoomChatContext"

const ShowRoomConversationHeader = () => {
  const refetch = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { refetch } }) => refetch
  )
  const isLoading = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { isLoading } }) => isLoading
  )

  const conversationName = useContextSelector(
    RoomChatContext,
    ({ infoQuery: { data } }) => data?.name ?? ""
  )

  return (
    <PageHeader
      title={conversationName}
      beforeTitle={
        <>
          <Link to={-1 as any}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
      afterTitle={
        <>
          <IconButton
            onClick={() => {
              if (!isLoading) {
                void refetch()
              }
            }}
            disabled={isLoading}
            color={"inherit"}
          >
            <RefreshIcon />
          </IconButton>
        </>
      }
    />
  )
}

export default ShowRoomConversationHeader
