import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { CheckLogin } from "../CheckLogin/CheckLogin"
import { Login } from "../Login/Login"

export const SmartLogin =
  (crawlerFetch: ICrawlerFetch) =>
  async (
    username: string,
    password: string,
    skipCheckLogin = false,
    skipLogout = skipCheckLogin
  ) => {
    let isLoggedIn = false

    if (!skipCheckLogin) {
      isLoggedIn = await CheckLogin(crawlerFetch)()
    }

    if (!isLoggedIn && username && password) {
      await Login(crawlerFetch)(username, password, skipLogout)
      isLoggedIn = await CheckLogin(crawlerFetch)()
    }

    return isLoggedIn
  }
