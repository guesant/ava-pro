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

  if (!skipRecheckLogin) {
    await checkLogin(client)
  }

  if (!client.isAuthed && username && password) {
    await login(client, username, password, { skipLogout })
    await checkLogin(client)
  }

  return client.isAuthed
}
