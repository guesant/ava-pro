/* eslint-disable no-useless-constructor */
import { ajax } from "./features/ajax/ajax"
import { http } from "./features/http/http"
import { IHTTPRequest } from "./features/http/IHTTPRequest"
import { fetchSessKey } from "./features/tokens/sess-key/fetch-sess-key"
import { IMayBePromise } from "./interfaces/may-be-promise"

export class MoodleClient {
  isAuthed = false

  get sessKey() {
    return fetchSessKey(this)
  }

  constructor(
    public readonly endpointURL: string,
    public httpService: typeof fetch = fetch
  ) {}

  http(payload: IHTTPRequest) {
    return http(this, payload)
  }

  ajax(
    methodname: string,
    args: any,
    crawlerFetchOptions?: IHTTPRequest["options"],
    incomingSessKey?: IMayBePromise<string | null>
  ) {
    return ajax(this, methodname, args, crawlerFetchOptions, incomingSessKey)
  }
}
