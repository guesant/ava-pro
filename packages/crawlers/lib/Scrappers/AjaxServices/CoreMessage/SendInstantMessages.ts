import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { ajaxService } from "../../../ajaxService"

type ISendInstantMessagesOptions = {
  text: string
  touserid: number
} & Record<string, any>

export const SendInstantMessages =
  (crawlerFetch: ICrawlerFetch) =>
  ({ text, ...options }: ISendInstantMessagesOptions) =>
    ajaxService(crawlerFetch)<any>("core_message_send_instant_messages", {
      messages: [
        {
          text: text.trim(),
          ...options
        }
      ]
    })
