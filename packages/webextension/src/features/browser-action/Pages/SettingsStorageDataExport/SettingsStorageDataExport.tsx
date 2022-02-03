import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import SettingsStorageDataExportContent from "./SettingsStorageDataExportContent"
import SettingsStorageDataExportHeader from "./SettingsStorageDataExportHeader"

const SettingsStorageDataExport = () => (
  <>
    <Page>
      <SettingsStorageDataExportHeader />
      <PageContent>
        <SettingsStorageDataExportContent />
      </PageContent>
    </Page>
  </>
)

export default SettingsStorageDataExport
