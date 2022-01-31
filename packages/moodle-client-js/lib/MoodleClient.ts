/* eslint-disable no-useless-constructor */
import { ajax } from "./features/ajax/ajax"
import { ISmartLoginOptions, smartLogin } from "./features/auth"
import { checkLogin } from "./features/auth/check-login/check-login"
import { login } from "./features/auth/login/login"
import { logout } from "./features/auth/logout/logout"
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

  async login(
    username: string,
    password: string,
    options: { skipLogout?: boolean } = {}
  ) {
    return login(this, username, password, options)
  }

  async logout() {
    return logout(this)
  }

  async smartLogin(
    username: string,
    password: string,
    options: ISmartLoginOptions = {}
  ) {
    return smartLogin(this, username, password, options)
  }

  async checkLogin() {
    return checkLogin(this)
  }
}
