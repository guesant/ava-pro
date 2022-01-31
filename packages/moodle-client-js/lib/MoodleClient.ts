/* eslint-disable no-useless-constructor */
import { ajax } from "./features/ajax/ajax"
import { ISmartLoginOptions, smartLogin } from "./features/auth"
import { checkLogin } from "./features/auth/check-login/check-login"
import { login } from "./features/auth/login/login"
import { logout } from "./features/auth/logout/logout"
import { getEnrolledCoursesByTimelineClassification } from "./features/course"
import { IGetEnrolledCoursesByTimelineClassificationRequest } from "./features/course/get-enrolled-courses-by-timeline-classification/IGetEnrolledCoursesByTimelineClassificationRequest"
import { http } from "./features/http/http"
import { IHTTPRequest } from "./features/http/IHTTPRequest"
import {
  getConversationMessages,
  getConversations,
  markAllConversationsMessagesAsRead,
  searchUsers
} from "./features/message"
import { IGetConversationMessagesRequest } from "./features/message/conversations/get-conversation-messages/IGetConversationMessagesRequest"
import { IGetConversationsRequest } from "./features/message/conversations/get-conversations/IGetConversationsRequest"
import { IMarkAllConversationsMessagesAsReadRequest } from "./features/message/conversations/mark-all-conversations-messages-as-read/IMarkAllConversationsMessagesAsReadRequest"
import { ISendMessagesToConversationRequest } from "./features/message/conversations/send-messages-to-conversation/ISendMessagesToConversationRequest"
import { sendMessagesToConversation } from "./features/message/conversations/send-messages-to-conversation/send-messages-to-conversation"
import { ISearchUsersRequest } from "./features/message/search-users/ISearchUsersRequest"
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

  // auth

  login(
    username: string,
    password: string,
    options: { skipLogout?: boolean } = {}
  ) {
    return login(this, username, password, options)
  }

  logout() {
    return logout(this)
  }

  smartLogin(
    username: string,
    password: string,
    options: ISmartLoginOptions = {}
  ) {
    return smartLogin(this, username, password, options)
  }

  async checkLogin() {
    return checkLogin(this)
  }

  // course

  getEnrolledCoursesByTimelineClassification(
    payload: IGetEnrolledCoursesByTimelineClassificationRequest
  ) {
    return getEnrolledCoursesByTimelineClassification(this, payload)
  }

  // message

  searchUsers(payload: ISearchUsersRequest) {
    return searchUsers(this, payload)
  }

  getConversations(payload: IGetConversationsRequest) {
    return getConversations(this, payload)
  }

  getConversationMessages(payload: IGetConversationMessagesRequest) {
    return getConversationMessages(this, payload)
  }

  sendMessagesToConversation(payload: ISendMessagesToConversationRequest) {
    return sendMessagesToConversation(this, payload)
  }

  markAllConversationsMessagesAsRead(
    payload: IMarkAllConversationsMessagesAsReadRequest
  ) {
    return markAllConversationsMessagesAsRead(this, payload)
  }
}
