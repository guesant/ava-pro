type IContactRequest = any

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

  contactrequests: IContactRequest[]
}

type IMessage = {
  id: number

  text: string

  timecreated: number

  useridfrom: number
}

type IConversations = {
  id: number

  name: string | string

  subname: string | null

  imageurl: string | null

  type: number

  membercount: number

  ismuted: boolean

  isfavourite: boolean

  isread: boolean

  unreadcount: number | null

  members: IMember[]

  messages: IMessage[]

  candeletemessagesforallusers: boolean
}

export type IGetConversationsResponse = {
  conversations: IConversations[]
}
