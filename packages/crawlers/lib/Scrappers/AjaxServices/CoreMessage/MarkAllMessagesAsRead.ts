import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { ajaxService } from "../../../ajaxService"
import { IMessageArea } from "../../../Typings/IMessageArea"

type IMarkAllMessagesAsReadOptions = {
  useridto: number
  useridfrom: number
} & Record<string, any>

export const MarkAllMessagesAsRead =
  (crawlerFetch: ICrawlerFetch) => (options: IMarkAllMessagesAsReadOptions) =>
    ajaxService(crawlerFetch)<IMessageArea>(
      "core_message_mark_all_messages_as_read",
      { ...options }
    )
