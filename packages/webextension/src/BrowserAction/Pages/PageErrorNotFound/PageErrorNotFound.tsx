import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"

const PageErrorNotFound = () => (
  <Page>
    <PageHeader
      title={getMessage("page_error_notFound")}
      beforeTitle={
        <>
          <AppRouteLink route={appRoutes.root}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </AppRouteLink>
        </>
      }
    />
    <PageContent>{getMessage("page_error_notFound_message")}</PageContent>
  </Page>
)

export default PageErrorNotFound
