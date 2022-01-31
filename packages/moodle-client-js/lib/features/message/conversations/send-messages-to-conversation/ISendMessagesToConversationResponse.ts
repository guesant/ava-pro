type ICreatedMessage = {
  id: number
  useridfrom: number
  text: string
  timecreated: number
}

export type ISendMessagesToConversationResponse = ICreatedMessage[]
