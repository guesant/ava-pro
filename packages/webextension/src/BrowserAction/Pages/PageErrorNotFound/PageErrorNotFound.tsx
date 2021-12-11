import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"

const PageErrorNotFound = () => (
  <Page>
    <PageHeader
      title={getMessage("page_error_notFound")}
      beforeTitle={
        <>
          <Link to={"/"}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
    />
    <PageContent>{getMessage("page_error_notFound_message")}</PageContent>
  </Page>
)

export default PageErrorNotFound
