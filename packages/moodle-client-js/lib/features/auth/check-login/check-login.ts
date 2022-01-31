import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"
import { extractLoginStateFromPage } from "./extract-login-state-from-page"

export const checkLogin = async (client: MoodleClient) => {
  const page = await client
    .http({ url: routes.login() })
    .then((res) => res.text())

  return extractLoginStateFromPage(page)
}
