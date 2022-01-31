import { MoodleClient } from "../../../MoodleClient"
import { checkLogin } from "../check-login/check-login"
import { login } from "../login/login"

export type ISmartLoginOptions = {
  skipRecheckLogin?: boolean
  skipLogout?: boolean
}

export const smartLogin = async (
  client: MoodleClient,
  username: string,
  password: string,
  options: ISmartLoginOptions = {}
) => {
  const { skipRecheckLogin = false, skipLogout = skipRecheckLogin } = options

  let isLoggedIn = client.isAuthed

  if (!skipRecheckLogin) {
    isLoggedIn = await checkLogin(client)
  }

  if (!isLoggedIn && username && password) {
    await login(client, username, password, { skipLogout })
    isLoggedIn = await checkLogin(client)
  }

  client.isAuthed = isLoggedIn

  return isLoggedIn
}
