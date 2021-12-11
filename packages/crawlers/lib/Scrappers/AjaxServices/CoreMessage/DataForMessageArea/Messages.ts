import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { ajaxService } from "../../../../ajaxService"
import { IMessageArea } from "../../../../Typings/IMessageArea"

type IMessagesOptions = {
  otheruserid: number
  currentuserid: number
} & Record<string, any>

export const Messages =
  (crawlerFetch: ICrawlerFetch) => (options: IMessagesOptions) =>
    ajaxService(crawlerFetch)<IMessageArea>(
      "core_message_data_for_messagearea_messages",
      { newest: true, ...options }
    )
