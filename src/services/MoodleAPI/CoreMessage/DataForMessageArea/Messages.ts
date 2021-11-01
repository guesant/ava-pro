import { AxiosInstance } from "axios";
import { IMessageArea } from "../../../../typings/MoodleAPI/IMessageArea";
import { ajaxService } from "../../ajaxService";

type ICoreMessage_DataForMessageArea_Messages_Options = {
  otheruserid: number;
  currentuserid: number;
} & Record<string, any>;

export const CoreMessage_DataForMessageArea_Messages =
  (authedHttp: AxiosInstance) =>
  ({
    otheruserid,
    currentuserid,
    ...extraArgs
  }: ICoreMessage_DataForMessageArea_Messages_Options) => {
    return ajaxService(authedHttp)<IMessageArea>(
      "core_message_data_for_messagearea_messages",
      { newest: true, currentuserid, otheruserid, ...extraArgs },
      { method: "POST" }
    );
  };
