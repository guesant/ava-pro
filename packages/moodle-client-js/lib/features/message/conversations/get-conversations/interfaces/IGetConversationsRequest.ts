import { IGetConversationsConversationTypeDto } from "./IGetConversationsConversationTypeDto"

export type IGetConversationsRequest = {
  userid?: number

  type?: IGetConversationsConversationTypeDto | null

  limit?: number

  offset?: number

  favourites?: boolean | null

  mergeself?: boolean
} & Record<string, any>
