import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import RefreshIcon from "@mui/icons-material/Refresh"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { RoomChatContext } from "../../Components/RoomChatContext"

const ShowRoomChatHeader = () => {
  const refetch = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { refetch } }) => refetch
  )
  const isLoading = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { isLoading } }) => isLoading
  )

  const contactName = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { data } }) => data?.otheruserfullname
  )

  return (
    <PageHeader
      title={contactName}
      beforeTitle={
        <>
          <Link to={-1}>
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

export default ShowRoomChatHeader
