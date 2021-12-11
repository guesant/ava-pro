import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import Loading from "../../Components/Loading/Loading"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"

const ShowRoomFallbackLoading = () => (
  <Page>
    <PageHeader
      title={getMessage("feedback_loading")}
      beforeTitle={
        <>
          <Link to={"/rooms"}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
    />
    <PageContent>
      <Loading />
    </PageContent>
  </Page>
)

export default ShowRoomFallbackLoading
