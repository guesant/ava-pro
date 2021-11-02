import { createContext, useContextSelector } from "use-context-selector";
import React, { useCallback, useEffect } from "react";
import { IMessageAreaContact } from "../../../../../typings/MoodleAPI/IMessageAreaContact";
import { useQuery, UseQueryResult } from "react-query";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import { fetchUserId } from "../../../../../services/MoodleAPI/fetchUserId";
import { CoreMessage_DataForMessageArea_Conversations } from "../../../../../services/MoodleAPI/CoreMessage/DataForMessageArea/Conversations";

type IViewRoomChatsContext = {
  conversationsQuery: UseQueryResult<IMessageAreaContact[] | undefined>;
};

export const ViewRoomChatsContext = createContext({} as IViewRoomChatsContext);

export const ViewRoomChatsContextProvider: React.FC = ({ children }) => {
  const authedHttp = useContextSelector(
    ViewRoomAuthedContext,
    ({ authedHttp }) => authedHttp
  );

  const fetchConversations = useCallback(async () => {
    if (authedHttp) {
      const userid = (await fetchUserId(authedHttp)())!;

      const { contacts } = await CoreMessage_DataForMessageArea_Conversations(
        authedHttp
      )({ userid });

      return contacts;
    }
  }, [authedHttp]);

  const conversationsQuery = useQuery(
    ["fetch_conversations"],
    fetchConversations
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      conversationsQuery.refetch();
    }, 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [conversationsQuery]);

  return (
    <ViewRoomChatsContext.Provider value={{ conversationsQuery }}>
      {children}
    </ViewRoomChatsContext.Provider>
  );
};
export default ViewRoomChatsContextProvider;
