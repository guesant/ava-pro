import {
  ICrawlerFetch,
  ICrawlerFetchOptions
} from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { MayBePromise } from "@ava-pro/shared/lib/Interfaces/MayBePromise"
import { routes } from "./routes"
import { ExtractTokensSessKey } from "./Scrappers/ExtractTokens/ExtractTokens"

export const ajaxService =
  (crawlerFetch: ICrawlerFetch) =>
  async <Response extends any, Args = any>(
    methodname: string,
    args: Args,
    crawlerFetchOptions: ICrawlerFetchOptions["options"] = {},
    incomingSessKey: MayBePromise<string | null> = ExtractTokensSessKey(
      crawlerFetch
    )()
  ) => {
    const sessKey = await incomingSessKey

    if (!sessKey) {
      throw new Error("Invalid session key.")
    }

    const params = new URLSearchParams()
    params.set("sesskey", sessKey)
    params.set("info", methodname)

    const response = await crawlerFetch({
      url: `${routes.ajax()}?${params.toString()}`,
      options: {
        method: "post",
        body: JSON.stringify([
          {
            args,
            index: 0,
            methodname
          }
        ]),
        headers: {
          "content-type": "application/json"
        },
        ...crawlerFetchOptions
      }
    })

    const [{ error, exception, data }] = await response.json()

    if (error) {
      throw exception
    }

    return data as Response
  }
