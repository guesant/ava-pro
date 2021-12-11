import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { FC } from "react"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { RoomAuthedContext } from "../../Components/RoomAuthedContext"

const ShowRoomGuardNeedsAuth: FC = ({ children }) => {
  const isLoggedIn = useContextSelector(
    RoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  )

  if (!isLoggedIn) {
    return (
      <Page>
        <PageHeader
          beforeTitle={
            <>
              <Link to={"/rooms"}>
                <IconButton color={"inherit"}>
                  <ArrowBackIcon />
                </IconButton>
              </Link>
            </>
          }
          title={getMessage("page_showRoom_guard_needsAuth")}
        />

        <PageContent>
          <Typography>
            {getMessage("page_showRoom_guard_needsAuth_message")}
          </Typography>
        </PageContent>
      </Page>
    )
  }

  return <>{children}</>
}

export default ShowRoomGuardNeedsAuth
