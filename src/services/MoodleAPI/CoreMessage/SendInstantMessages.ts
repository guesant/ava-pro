import { AxiosInstance } from "axios";
import { IMessageArea } from "../../../typings/MoodleAPI/IMessageArea";
import { ajaxService } from "../ajaxService";

type ICoreMessage_SendInstantMessages_Options = {
  text: string;
  touserid: number;
} & Record<string, any>;

export const CoreMessage_SendInstantMessages =
  (authedHttp: AxiosInstance) =>
  async ({
    text,
    touserid,
    ...extraArgs
  }: ICoreMessage_SendInstantMessages_Options) => {
    await ajaxService(authedHttp)<IMessageArea>(
      "core_message_send_instant_messages",
      {
        messages: [
          {
            touserid,
            text: text.trim(),
            ...extraArgs,
          },
        ],
      },
      { method: "POST" }
    );
  };
