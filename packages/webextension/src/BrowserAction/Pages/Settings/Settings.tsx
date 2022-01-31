import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ArrowBack from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"
import SettingsAbout from "../SettingsAbout/SettingsAbout"
import SettingsContribute from "../SettingsContribute/SettingsContribute"
import SettingsStorageData from "../SettingsStorageData/SettingsStorageData"

const Settings = () => (
  <Page>
    <PageHeader
      title={getMessage("page_settings")}
      beforeTitle={
        <>
          <Link to={"./.."}>
            <IconButton color={"inherit"}>
              <ArrowBack />
            </IconButton>
          </Link>
        </>
      }
    />
    <PageContent>
      <SettingsStorageData />

      <SettingsAbout />

      <SettingsContribute />
    </PageContent>
  </Page>
)

export default Settings
