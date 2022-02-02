import {
  IGetConversationsConversationDto,
  IGetConversationsConversationTypeDto
} from "./interfaces"

export const patchConversation = (
  conversation: IGetConversationsConversationDto
) => {
  if (
    conversation.type === IGetConversationsConversationTypeDto.PRIVATE ||
    conversation.type === IGetConversationsConversationTypeDto.SELF
  ) {
    const otherUser = conversation.members?.[0]
    if (otherUser) {
      conversation.name = conversation.name
        ? conversation.name
        : otherUser.fullname
      conversation.imageurl = conversation.imageurl
        ? conversation.imageurl
        : otherUser.profileimageurl
    }
  }

  return conversation
}
