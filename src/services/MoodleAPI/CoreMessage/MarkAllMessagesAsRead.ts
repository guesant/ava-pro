import { AxiosInstance } from "axios";
import { IMessageArea } from "../../../typings/MoodleAPI/IMessageArea";
import { ajaxService } from "../ajaxService";

type ICoreMessage_MarkAllMessagesAsRead_Options = {
  useridto: number;
  useridfrom: number;
} & Record<string, any>;

export const CoreMessage_MarkAllMessagesAsRead =
  (authedHttp: AxiosInstance) =>
  async ({ ...args }: ICoreMessage_MarkAllMessagesAsRead_Options) => {
    await ajaxService(authedHttp)<IMessageArea>(
      "core_message_mark_all_messages_as_read",
      { ...args },
      { method: "POST" }
    );
  };
