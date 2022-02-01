import { IGetConversationMessagesMemberDto } from "./dtos/IGetConversationMessagesMemberDto"
import { IGetConversationMessagesMessageDto } from "./dtos/IGetConversationMessagesMessageDto"

export type IGetConversationMessagesResponse = {
  id: number

  members: IGetConversationMessagesMemberDto[]

  messages: IGetConversationMessagesMessageDto[]
}
