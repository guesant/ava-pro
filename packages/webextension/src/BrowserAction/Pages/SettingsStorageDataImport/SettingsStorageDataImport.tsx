import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import { useSnackbar } from "notistack"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import browser from "webextension-polyfill"
import Page from "../../Components/Page/Page"
import PageContent from "../../Components/PageContent/PageContent"
import SettingsStorageDataImportContent from "./SettingsStorageDataImportContent"
import SettingsStorageDataImportHeader from "./SettingsStorageDataImportHeader"

const SettingsStorageDataImport = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const methods = useForm({ mode: "onChange", defaultValues: { data: "{}" } })

  const { handleSubmit, reset } = methods

  const onSubmit = async ({ data }: { data: string }) => {
    await browser.storage.local.set(JSON.parse(data))

    reset({ data })

    enqueueSnackbar(
      getMessage("page_settings_storage_data_import_feedback_success"),
      { variant: "info", autoHideDuration: 3 * 1000 }
    )

    navigate("./../..")
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Page>
            <SettingsStorageDataImportHeader />

            <PageContent>
              <SettingsStorageDataImportContent />
            </PageContent>
          </Page>
        </form>
      </FormProvider>
    </>
  )
}

export default SettingsStorageDataImport
