import { throttle } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useContextSelector } from "use-context-selector";
import {
  appendInfiniteQueryData,
  InfiniteData,
} from "../../../../helpers/appendInfiniteQueryData";
import { CoreMessage_DataForMessageArea_Messages } from "../../../../services/MoodleAPI/CoreMessage/DataForMessageArea/Messages";
import { CoreMessage_MarkAllMessagesAsRead } from "../../../../services/MoodleAPI/CoreMessage/MarkAllMessagesAsRead";
import { fetchUserId } from "../../../../services/MoodleAPI/fetchUserId";
import { IMessageArea } from "../../../../typings/MoodleAPI/IMessageArea";
import { IMessageAreaMessage } from "../../../../typings/MoodleAPI/IMessageAreaMessage";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";

const MESSAGES_PER_QUERY = 10;
const IS_AUTO_FETCH_UPDATES_ENABLED = true;

export const useMessageArea = (contactid: number) => {
  const queryClient = useQueryClient();
  const queryKey = ["messages", contactid];

  const [isFetchingUpdates, setIsFetchingUpdates] = useState(false);

  const [lastMessageArea, setLastMessageArea] = useState<null | IMessageArea>(
    null
  );

  const authedHttp = useContextSelector(
    ViewRoomAuthedContext,
    ({ authedHttp }) => authedHttp
  );

  const fetchMessageArea = useCallback(
    async (args: Record<string, any> = {}) => {
      if (authedHttp) {
        const userid = (await fetchUserId(authedHttp)())!;

        const response = await CoreMessage_DataForMessageArea_Messages(
          authedHttp
        )({ currentuserid: userid, otheruserid: contactid, ...args });

        if (response && response.messages.length > 0) {
          if (
            (args.limitfrom === undefined || args.limitfrom === 0) &&
            (args.newest === undefined || args.newest === true)
          ) {
            await CoreMessage_MarkAllMessagesAsRead(authedHttp)({
              useridfrom: contactid,
              useridto: userid,
            });
          }
        }

        return response;
      }
      return null;
    },
    [authedHttp, contactid]
  );

  const fetchMessageAreaAndSync = useCallback(
    async (args: Record<string, any> = {}) =>
      fetchMessageArea(args).then((response) => {
        setLastMessageArea(response);
        return response;
      }),
    [fetchMessageArea]
  );

  const fetchMessages = ({ pageParam = 0 }) =>
    fetchMessageAreaAndSync({
      limitfrom: pageParam,
      limitnum: MESSAGES_PER_QUERY,
    })
      .then((response) => response?.messages ?? [])
      .then((messages) => Array.from(messages).reverse())
      .then((messages) => ({
        data: messages,
        nextCursor:
          messages.length === MESSAGES_PER_QUERY
            ? pageParam + MESSAGES_PER_QUERY
            : undefined,
      }));

  const infiniteQuery = useInfiniteQuery(queryKey, fetchMessages, {
    getNextPageParam: ({ nextCursor }) => nextCursor,
  });

  const lastMessageTimeSent = useMemo(() => {
    const pages = infiniteQuery.data?.pages || [];
    const messageAreas = pages.map((i) => i.data).flat(2);
    return messageAreas.length === 0
      ? NaN
      : messageAreas.reduce((acc, i) => Math.max(acc, i.timecreated), 0);
  }, [infiniteQuery.data]);

  const fetchUpdates = useCallback(async () => {
    if (lastMessageTimeSent !== 0 && !isFetchingUpdates) {
      setIsFetchingUpdates(true);

      const response = await fetchMessageAreaAndSync({
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
              MESSAGES_PER_QUERY
            );
            queryClient.setQueryData(queryKey, updatedData);
          }
        }
      }

      setIsFetchingUpdates(false);
    }
  }, [
    queryClient,
    isFetchingUpdates,
    lastMessageTimeSent,
    fetchMessageAreaAndSync,
  ]);

  const _fetchUpdates = useCallback(throttle(fetchUpdates, 2 * 1000), [
    fetchUpdates,
  ]);

  useEffect(() => {
    if (IS_AUTO_FETCH_UPDATES_ENABLED) {
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
