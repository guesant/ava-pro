type IMember = {
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

type IMessage = {
  id: number

  useridfrom: number

  text: string

  timecreated: number
}

export type IGetConversationMessagesResponse = {
  id: number

  members: IMember[]

  messages: IMessage[]
}
