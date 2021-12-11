import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { routes } from "../../routes"
import { getLoginState } from "../getLoginState"
import { Logout } from "../Logout/Logout"

export const Login =
  (crawlerFetch: ICrawlerFetch) =>
  async (username: string, password: string, skipLogout: boolean = false) => {
    if (!skipLogout) {
      await Logout(crawlerFetch)()
    }

    const body = new FormData()

    body.set("username", username)
    body.set("password", password)

    const response = await crawlerFetch({
      url: routes.login(),
      options: {
        body,
        method: "post"
      }
    }).then((res) => res.text())

    return getLoginState(response)
  }
