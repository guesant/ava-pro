/* eslint-disable no-useless-constructor */
import normalizeUrl from "normalize-url"
import * as features from "./features"
import { IMayBePromise } from "./interfaces/may-be-promise"

export class MoodleClient {
  isAuthed = false

  private _endpointUrl: string | null = null

  constructor(
    endpointURL: string,
    public httpService: typeof fetch = window.fetch.bind(window)
  ) {
    this.endpointURL = endpointURL
  }

  get endpointURL() {
    return this._endpointUrl!
  }

  set endpointURL(value) {
    this._endpointUrl = normalizeUrl(value, { removeTrailingSlash: true })
  }

  // tokens

  get userId() {
    return features.tokens.fetchUserId(this)
  }

  get sessKey() {
    return features.tokens.fetchSessKey(this)
  }

  // http

  http(payload: features.IHTTPRequestPayload) {
    return features.http(this, payload)
  }

  // ajax

  ajax(
    methodname: string,
    args: any,
    crawlerFetchOptions?: features.IHTTPRequestPayload["options"],
    incomingSessKey: IMayBePromise<string | null> = this.sessKey
  ) {
    return features.ajax(
      this,
      methodname,
      args,
      crawlerFetchOptions,
      incomingSessKey
    )
  }

  // auth

  login(
    username: string,
    password: string,
    options: { skipLogout?: boolean } = {}
  ) {
    return features.auth.login(this, username, password, options)
  }

  logout() {
    return features.auth.logout(this)
  }

  smartLogin(
    username: string,
    password: string,
    options: features.auth.ISmartLoginOptions = {}
  ) {
    return features.auth.smartLogin(this, username, password, options)
  }

  async checkLogin() {
    return features.auth.checkLogin(this)
  }

  // course

  getEnrolledCoursesByTimelineClassification(
    payload: features.course.IGetEnrolledCoursesByTimelineClassificationRequest = {}
  ) {
    return features.course.getEnrolledCoursesByTimelineClassification(
      this,
      payload
    )
  }

  // message

  searchUsers(payload: features.message.ISearchUsersRequest) {
    return features.message.searchUsers(this, payload)
  }

  getConversation(conversationId: number, userId?: IMayBePromise<number>) {
    return features.message.getConversation(this, conversationId, userId)
  }

  getConversationBetweenUsers(
    payload: features.message.IGetConversationBetweenUsersRequest
  ) {
    return features.message.getConversationBetweenUsers(this, payload)
  }

  getConversations(payload?: features.message.IGetConversationsRequest) {
    return features.message.getConversations(this, payload)
  }

  getConversationMessages(
    payload: features.message.IGetConversationMessagesRequest
  ) {
    return features.message.getConversationMessages(this, payload)
  }

  sendMessagesToConversation(
    payload: features.message.ISendMessagesToConversationRequest
  ) {
    return features.message.sendMessagesToConversation(this, payload)
  }

  markAllConversationsMessagesAsRead(
    payload: features.message.IMarkAllConversationsMessagesAsReadRequest
  ) {
    return features.message.markAllConversationsMessagesAsRead(this, payload)
  }
}
