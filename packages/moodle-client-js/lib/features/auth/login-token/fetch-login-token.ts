import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"
import { extractLoginTokenFromPage } from "./extract-login-token-from-page"

export const fetchLoginToken = async (client: MoodleClient) => {
  const loginPageContent = await client
    .http({
      url: routes.login()
    })
    .then((res) => res.text())

  return extractLoginTokenFromPage(loginPageContent)
}
