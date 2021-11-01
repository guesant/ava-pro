import { AxiosInstance } from "axios";
import { IMessageAreaSearchContacts } from "../../../../typings/MoodleAPI/IMessageAreaSearchContacts";
import { ajaxService } from "../../ajaxService";

type ICoreMessage_DataForMessageArea_SearchUsers_Options = {
  userid: number;
  search: string;
} & Record<string, any>;

export const CoreMessage_DataForMessageArea_SearchUsers =
  (authedHttp: AxiosInstance) =>
  ({
    search,
    userid,
    ...extraArgs
  }: ICoreMessage_DataForMessageArea_SearchUsers_Options) => {
    return ajaxService(authedHttp)<IMessageAreaSearchContacts>(
      "core_message_data_for_messagearea_search_users",
      { userid, search, ...extraArgs },
      { method: "POST" }
    );
  };
