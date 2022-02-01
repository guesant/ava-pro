export type ISendMessagesToConversationRequest = {
  conversationid: number
  messages: { text: string }[]
}
