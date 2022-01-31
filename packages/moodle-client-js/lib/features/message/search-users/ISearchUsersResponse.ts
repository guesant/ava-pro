export type IContactUserConversation = {
  id: number
  type: number
  name: string | null
  timecreated: number
}

export type IContactUserContactRequest = any

export type IContactUser = {
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
  contactrequests: IContactUserContactRequest[]
  conversations: IContactUserConversation[]
}

export type ISearchUsersResponse = {
  contacts: IContactUser[]
  noncontacts: IContactUser[]
}
