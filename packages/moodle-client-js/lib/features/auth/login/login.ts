import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"
import { extractLoginStateFromPage } from "../check-login/extract-login-state-from-page"
import { fetchLoginToken } from "../login-token/fetch-login-token"
import { logout } from "../logout/logout"

export const login = async (
  client: MoodleClient,
  username: string,
  password: string,
  options: { skipLogout?: boolean } = {}
) => {
  const { skipLogout = false } = options

  if (!skipLogout) {
    await logout(client)
  }

  const body = new FormData()

  const loginToken = await fetchLoginToken(client)

  body.set("logintoken", loginToken)

  body.set("username", username)

  body.set("password", password)

  body.set("anchor", "")

  const loginSubmitResponse = await client
    .http({
      url: routes.login(),
      options: {
        body,
        method: "post"
      }
    })
    .then((res) => res.text())

  client.isAuthed = extractLoginStateFromPage(loginSubmitResponse)

  return client.isAuthed
}
