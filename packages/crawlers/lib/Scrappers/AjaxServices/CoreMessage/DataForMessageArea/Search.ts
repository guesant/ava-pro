import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { ajaxService } from "../../../../ajaxService"
import { IMessageAreaSearchContacts } from "../../../../Typings/IMessageAreaSearchContacts"

type ISearchOptions = {
  userid: number
  search: string
} & Record<string, any>

export const Search =
  (crawlerFetch: ICrawlerFetch) => (options: ISearchOptions) =>
    ajaxService(crawlerFetch)<IMessageAreaSearchContacts>(
      "core_message_data_for_messagearea_search_users",
      { ...options }
    )
