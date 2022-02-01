import { MoodleClient } from "../../MoodleClient"
import { IHTTPRequestPayload } from "./interfaces/IHTTPRequestPayload"

export * from "./interfaces"

export const http = async (
  client: MoodleClient,
  payload: IHTTPRequestPayload
) => {
  const { url, options } = payload
  return client.httpService(client.endpointURL + url, options)
}
