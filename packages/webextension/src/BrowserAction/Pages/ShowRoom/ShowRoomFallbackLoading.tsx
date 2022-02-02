import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import Loading from "../../Components/Loading/Loading"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const ShowRoomFallbackLoading = () => (
  <Page>
    <PageHeader
      title={getMessage("feedback_loading")}
      beforeTitle={
        <>
          <AppRouteLink route={appRoutes.rooms}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </AppRouteLink>
        </>
      }
    />
    <PageContent>
      <Loading />
    </PageContent>
  </Page>
)

export default ShowRoomFallbackLoading
