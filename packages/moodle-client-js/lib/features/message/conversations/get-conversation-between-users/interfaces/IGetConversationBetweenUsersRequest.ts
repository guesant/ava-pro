export type IGetConversationBetweenUsersRequest = {
  includecontactrequests?: boolean

  includeprivacyinfo?: boolean

  memberlimit?: number

  memberoffset?: number

  messagelimit?: number

  messageoffset?: number

  newestmessagesfirst?: boolean

  otheruserid: number | string

  userid: number | string
}
