import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { MayBePromise } from "@ava-pro/shared/lib/Interfaces/MayBePromise"
import { routes } from "../../routes"
import { ExtractTokensSessKey } from "../ExtractTokens/ExtractTokens"

export const Logout =
  (crawlerFetch: ICrawlerFetch) =>
  async (
    incomingSessKey: MayBePromise<string | null> = ExtractTokensSessKey(
      crawlerFetch
    )()
  ) => {
    const sesskey = await incomingSessKey
    sesskey &&
      (await crawlerFetch({
        url: routes.logout({ sesskey })
      }))
  }
