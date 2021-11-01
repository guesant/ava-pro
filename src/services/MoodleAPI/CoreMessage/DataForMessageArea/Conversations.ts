import { AxiosInstance } from "axios";
import { IMessageAreaConversations } from "../../../../typings/MoodleAPI/IMessageAreaConversations";
import { ajaxService } from "../../ajaxService";

type ICoreMessage_DataForMessageArea_Conversations_Options = {
  userid: number;
} & Record<string, any>;

export const CoreMessage_DataForMessageArea_Conversations =
  (authedHttp: AxiosInstance) =>
  ({
    userid,
    ...extraArgs
  }: ICoreMessage_DataForMessageArea_Conversations_Options) => {
    return ajaxService(authedHttp)<IMessageAreaConversations>(
      "core_message_data_for_messagearea_conversations",
      { userid, limitfrom: 0, ...extraArgs },
      { method: "post" }
    );
  };
