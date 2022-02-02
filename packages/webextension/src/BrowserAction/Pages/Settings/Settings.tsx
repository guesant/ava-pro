import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBack from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import SettingsAbout from "../SettingsAbout/SettingsAbout"
import SettingsAppearance from "../SettingsAppearance/SettingsAppearance"
import SettingsContribute from "../SettingsContribute/SettingsContribute"
import SettingsStorageData from "../SettingsStorageData/SettingsStorageData"

const Settings = () => (
  <Page>
    <PageHeader
      title={getMessage("page_settings")}
      beforeTitle={
        <>
          <AppRouteLink route={appRoutes.root}>
            <IconButton color={"inherit"}>
              <ArrowBack />
            </IconButton>
          </AppRouteLink>
        </>
      }
    />
    <PageContent>
      <SettingsAppearance />

      <SettingsStorageData />

      <SettingsAbout />

      <SettingsContribute />
    </PageContent>
  </Page>
)

export default Settings
