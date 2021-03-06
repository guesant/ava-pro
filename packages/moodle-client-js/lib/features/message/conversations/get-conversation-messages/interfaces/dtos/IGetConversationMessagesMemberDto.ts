export type IGetConversationMessagesMemberDto = {
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

  contactrequests: any[]
}
