import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { routes } from "../../routes"
import { getLoginState } from "../getLoginState"

export const CheckLogin = (crawlerFetch: ICrawlerFetch) => async () => {
  const page = await crawlerFetch({ url: routes.login() }).then((res) =>
    res.text()
  )
  return getLoginState(page)
}
