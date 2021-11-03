import React, { useMemo } from "react";
import { createContext } from "use-context-selector";
import { useParams } from "react-router";
import { useMessageArea } from "./useMessageArea";
import { IMessageAreaMessage } from "../../../../../typings/MoodleAPI/IMessageAreaMessage";

type IViewRoomChatContext = {
  messageAreaQuery: ReturnType<typeof useMessageArea>;
  messages: IMessageAreaMessage[];
};

export const ViewRoomChatContext = createContext({} as IViewRoomChatContext);

export const ViewRoomChatContextProvider: React.FC = ({ children }) => {
  const { contactId } = useParams<{ contactId: string }>();
  const messageAreaQuery = useMessageArea(+contactId);

  const {
    infiniteQuery: { data },
  } = messageAreaQuery;

  const messages = useMemo(
    () =>
      (data?.pages ?? [])
        .map(({ data }) => data)
        .flat(1)
        .reverse(),
    [data]
  );

  return (
    <ViewRoomChatContext.Provider value={{ messages, messageAreaQuery }}>
      {children}
    </ViewRoomChatContext.Provider>
  );
};
