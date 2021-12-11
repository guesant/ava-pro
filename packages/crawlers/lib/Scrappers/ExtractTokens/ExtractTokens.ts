import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { routes } from "../../routes"
import { extractSessKey } from "./extractSessKey"
import { extractUserId } from "./extractUserId"

export const ExtractTokens = (crawlerFetch: ICrawlerFetch) => async () => {
  const data = await crawlerFetch({
    url: routes.my(),
    options: { method: "get" }
  }).then((res) => res.text())

  const sessKey = extractSessKey(data)
  const userId = extractUserId(data)

  return { sessKey, userId }
}

export const ExtractTokensSessKey =
  (crawlerFetch: ICrawlerFetch) => async () => {
    const { sessKey } = await ExtractTokens(crawlerFetch)()
    return sessKey
  }

export const ExtractTokensUserId =
  (crawlerFetch: ICrawlerFetch) => async () => {
    const { userId } = await ExtractTokens(crawlerFetch)()
    return userId
  }
