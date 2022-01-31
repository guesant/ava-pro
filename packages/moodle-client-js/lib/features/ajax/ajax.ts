import { IHTTPRequest } from "../http/IHTTPRequest"
import { IMayBePromise } from "../../interfaces/may-be-promise"
import { MoodleClient } from "../../MoodleClient"
import { routes } from "../../routes"

export const ajax = async <Response extends any, Args = any>(
  client: MoodleClient,
  methodname: string,
  args: Args,
  crawlerFetchOptions: IHTTPRequest["options"] = {},
  incomingSessKey: IMayBePromise<string | null> = client.sessKey
) => {
  const sessKey = await incomingSessKey

  if (!sessKey) {
    throw new Error("Invalid session key.")
  }

  const params = new URLSearchParams()

  params.set("sesskey", sessKey)
  params.set("info", methodname)

  const response = await client.http({
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
