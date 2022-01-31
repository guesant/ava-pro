/* eslint-disable no-useless-constructor */
import { http } from "./features/http/http"
import { IHTTPRequest } from "./features/http/IHTTPRequest"

export class MoodleClient {
  constructor(
    public readonly endpointURL: string,
    public httpService: typeof fetch = fetch
  ) {}

  http(payload: IHTTPRequest) {
    return http(this, payload)
  }
}
