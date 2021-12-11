import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { ajaxService } from "../../../../ajaxService"
import { IMessageAreaConversations } from "../../../../Typings/IMessageAreaConversations"

type IConversationsOptions = {
  userid: number
} & Record<string, any>

export const Conversations =
  (crawlerFetch: ICrawlerFetch) =>
  ({ ...options }: IConversationsOptions) =>
    ajaxService(crawlerFetch)<IMessageAreaConversations>(
      "core_message_data_for_messagearea_conversations",
      {
        limitfrom: 0,
        ...options
      }
    )
