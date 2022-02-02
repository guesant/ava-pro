import { ISearchUsersContactUserContactRequestDto } from "./ISearchUsersContactUserContactRequestDto"
import { ISearchUsersContactUserConversationDto } from "./ISearchUsersContactUserConversationDto"

export type ISearchUsersContactUserDto = {
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

  contactrequests: ISearchUsersContactUserContactRequestDto[]

  conversations: ISearchUsersContactUserConversationDto[]
}
