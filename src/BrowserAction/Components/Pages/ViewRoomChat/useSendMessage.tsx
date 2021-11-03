import { useCallback, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ViewRoomChatContext } from "./ViewRoomChatContext";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import { CoreMessage_SendInstantMessages } from "../../../../services/MoodleAPI/CoreMessage/SendInstantMessages";

export const useSendMessage = () => {
  const [isBusy, setIsBusy] = useState(false);

  const fetchUpdates = useContextSelector(
    ViewRoomChatContext,
    ({ messageAreaQuery: { fetchUpdates } }) => fetchUpdates
  );

  const authedHttp = useContextSelector(
    ViewRoomAuthedContext,
    ({ authedHttp }) => authedHttp
  );

  const sendMessage = useCallback(
    async (toUserId: number, text: string) => {
      if (!isBusy && authedHttp) {
        setIsBusy(true);

        let hasSuccess = false;
        try {
          await CoreMessage_SendInstantMessages(authedHttp)({
            text,
            touserid: toUserId,
          });
          await fetchUpdates();
          hasSuccess = true;
        } catch (e) {} // eslint-disable-line no-empty

        setIsBusy(false);
        return hasSuccess;
      }
    },
    [authedHttp, fetchUpdates]
  );

  return { isBusy, sendMessage };
};
