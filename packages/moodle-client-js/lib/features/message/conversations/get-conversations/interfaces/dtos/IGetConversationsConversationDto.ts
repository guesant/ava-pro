import { IGetConversationsConversationTypeDto } from "../IGetConversationsConversationTypeDto"
import { IGetConversationsMemberDto } from "./IGetConversationsMemberDto"
import { IGetConversationsMessageDto } from "./IGetConversationsMessageDto"

export type IGetConversationsConversationDto = {
  id: number

  name: string | null

  subname: string | null

  imageurl: string | null

  type: IGetConversationsConversationTypeDto

  membercount: number

  ismuted: boolean

  isfavourite: boolean

  isread: boolean

  unreadcount: number | null

  members: IGetConversationsMemberDto[]

  messages: IGetConversationsMessageDto[]

  candeletemessagesforallusers: boolean
}
