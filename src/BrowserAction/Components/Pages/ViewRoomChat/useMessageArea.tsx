import { throttle } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useContextSelector } from "use-context-selector";
import {
  appendInfiniteQueryData,
  InfiniteData,
} from "../../../../helpers/appendInfiniteQueryData";
import { IMessageArea } from "../../../../typings/MoodleAPI/IMessageArea";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import { CoreMessage_DataForMessageArea_Messages } from "../../../../services/MoodleAPI/CoreMessage/DataForMessageArea/Messages";
import { fetchUserId } from "../../../../services/MoodleAPI/fetchUserId";
import { IMessageAreaMessage } from "../../../../typings/MoodleAPI/IMessageAreaMessage";

const messagesPerQuery = 10;

export const useMessageArea = (contactId: number) => {
  const queryClient = useQueryClient();
  const queryKey = ["messages", contactId];

  const [isFetchingUpdates, setIsFetchingUpdates] = useState(false);

  const [lastMessageArea, setLastMessageArea] = useState<null | IMessageArea>(
    null
  );

  const authedHttp = useContextSelector(
    ViewRoomAuthedContext,
    ({ authedHttp }) => authedHttp
  );

  const fetchMessageArea = useCallback(
    async (extraArgs: Record<string, any> = {}) => {
      if (authedHttp) {
        const userid = (await fetchUserId(authedHttp)())!;
        return CoreMessage_DataForMessageArea_Messages(authedHttp)({
          currentuserid: userid,
          otheruserid: contactId,
          ...extraArgs,
        });
      }
      return null;
    },
    [authedHttp, contactId]
  );

  const fetchMessageAreaAndSync = useCallback(
    async (extraArgs: Record<string, any> = {}) =>
      fetchMessageArea(extraArgs).then((response) => {
        setLastMessageArea(response);
        return response;
      }),
    [fetchMessageArea]
  );

  const fetchMessages = ({ pageParam = 0 }) =>
    fetchMessageAreaAndSync({
      limitfrom: pageParam,
      limitnum: messagesPerQuery,
    })
      .then((response) => response?.messages ?? [])
      .then((messages) => Array.from(messages).reverse())
      .then((messages) => ({
        data: messages,
        nextCursor:
          messages.length === messagesPerQuery
            ? pageParam + messagesPerQuery
            : undefined,
      }));

  const infiniteQuery = useInfiniteQuery(
    ["messages", contactId],
    fetchMessages,
    {
      getNextPageParam: ({ nextCursor }) => nextCursor,
    }
  );

  const lastMessageTimeSent = useMemo(() => {
    const pages = infiniteQuery.data?.pages || [];

    const messageAreas = pages.map((i) => i.data).flat(2);

    if (messageAreas.length === 0) {
      return NaN;
    }

    return messageAreas.reduce((acc, i) => Math.max(acc, i.timecreated), 0);
  }, [infiniteQuery.data]);

  const fetchUpdates = useCallback(async () => {
    if (lastMessageTimeSent !== 0 && !isFetchingUpdates) {
      setIsFetchingUpdates(true);

      const response = await fetchMessageArea({
        timefrom: lastMessageTimeSent + 1,
      });

      if (response) {
        const messages = Array.from(response.messages).reverse();

        if (messages.length > 0) {
          await queryClient.cancelQueries(queryKey);

          const previousData =
            queryClient.getQueryData<InfiniteData<IMessageAreaMessage>>(
              queryKey
            );

          if (previousData) {
            const updatedData = appendInfiniteQueryData(
              previousData,
              messages,
              messagesPerQuery
            );

            queryClient.setQueryData(queryKey, updatedData);
          }
        }
      }

      setIsFetchingUpdates(false);
    }
  }, [queryClient, isFetchingUpdates, lastMessageTimeSent]);

  const _fetchUpdates = useCallback(throttle(fetchUpdates, 2 * 1000), [
    fetchUpdates,
  ]);

  const isAutoFetchUpdatesEnabled = true;

  useEffect(() => {
    if (isAutoFetchUpdatesEnabled) {
      const intervalId = setInterval(() => {
        _fetchUpdates();
      }, 60 * 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [_fetchUpdates]);

  return { lastMessageArea, infiniteQuery, fetchUpdates: _fetchUpdates };
};
