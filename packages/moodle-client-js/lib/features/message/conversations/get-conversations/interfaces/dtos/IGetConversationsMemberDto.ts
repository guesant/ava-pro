import { IGetConversationsConversationContactRequestDto } from "./IGetConversationsConversationContactRequestDto"

export type IGetConversationsMemberDto = {
  id: number

  fullname: string

  profileurl: string

  profileimageurl: string

  profileimageurlsmall: string

  isonline: boolean

  showonlinestatus: boolean

  isblocked: boolean

  iscontact: boolean

  isdeleted: boolean

  canmessageevenifblocked: boolean | null

  canmessage: boolean | null

  requirescontact: boolean | null

  contactrequests: IGetConversationsConversationContactRequestDto[]
}
