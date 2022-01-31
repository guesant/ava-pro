/* eslint-disable no-useless-constructor */

import * as features from "./features"
import { IMayBePromise } from "./interfaces/may-be-promise"

export class MoodleClient {
  isAuthed = false

  get sessKey() {
    return features.tokens.fetchSessKey(this)
  }

  constructor(
    public readonly endpointURL: string,
    public httpService: typeof fetch = fetch
  ) {}

  // http

  http(payload: features.IHTTPRequest) {
    return features.http(this, payload)
  }

  // ajax

  ajax(
    methodname: string,
    args: any,
    crawlerFetchOptions?: features.IHTTPRequest["options"],
    incomingSessKey?: IMayBePromise<string | null>
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
    payload: features.course.IGetEnrolledCoursesByTimelineClassificationRequest
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

  getConversations(payload: features.message.IGetConversationsRequest) {
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
