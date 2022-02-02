import { MoodleClient } from "../../MoodleClient"
import { IHTTPRequestPayload } from "./interfaces"

export const http = async (
  client: MoodleClient,
  payload: IHTTPRequestPayload
) => {
  const { url, options } = payload

  const targetUrl = client.endpointURL + url

  const response = await client.httpService(targetUrl, {
    ...options,
    mode: "cors",
    credentials: "include"
  })

  if (!response.ok) {
    throw new Error("Response not ok")
  }

  return response
}
