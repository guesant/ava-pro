import { MoodleClient } from "../../MoodleClient"
import { IHTTPRequest } from "./interfaces/IHTTPRequest"

export * from "./interfaces"

export const http = async (client: MoodleClient, payload: IHTTPRequest) => {
  const { url, options } = payload
  return client.httpService(client.endpointURL + url, options)
}
