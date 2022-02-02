import { IGetConversationsConversationDto } from "./dtos/IGetConversationsConversationDto"

export type IGetConversationsResponseConversations =
  IGetConversationsConversationDto[]

export type IGetConversationsResponse = {
  conversations: IGetConversationsResponseConversations
}
