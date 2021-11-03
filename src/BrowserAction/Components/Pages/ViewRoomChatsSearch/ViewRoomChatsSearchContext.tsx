import { createContext, useContextSelector } from "use-context-selector";
import React, { useCallback, useState } from "react";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import { IMessageAreaContact } from "../../../../typings/MoodleAPI/IMessageAreaContact";
import { useQuery, UseQueryResult } from "react-query";
import { useDebounce } from "use-debounce";
import { CoreMessage_DataForMessageArea_SearchUsers } from "../../../../services/MoodleAPI/CoreMessage/DataForMessageArea/SearchUsers";
import { fetchUserId } from "../../../../services/MoodleAPI/fetchUserId";

type IFetchedContacts = {
  contacts: IMessageAreaContact[];
  noncontacts: IMessageAreaContact[];
};

type IViewRoomChatsSearchContext = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  fetchSearchContactsQuery: UseQueryResult<IFetchedContacts | null | undefined>;
};

export const ViewRoomChatsSearchContext = createContext(
  {} as IViewRoomChatsSearchContext
);

export const ViewRoomChatsContextProvider: React.FC = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText] = useDebounce(searchText, 250);

  const authedHttp = useContextSelector(
    ViewRoomAuthedContext,
    ({ authedHttp }) => authedHttp
  );

  const fetchContacts = useCallback(
    async (query: string): Promise<IFetchedContacts | null> => {
      if (!query) {
        return { contacts: [], noncontacts: [] };
      }

      if (authedHttp) {
        const userid = await fetchUserId(authedHttp)();

        if (userid) {
          const { contacts, noncontacts } =
            await CoreMessage_DataForMessageArea_SearchUsers(authedHttp)({
              userid,
              search: query,
            });
          return { contacts, noncontacts };
        }
      }

      return null;
    },
    [authedHttp]
  );

  const fetchSearchContactsQuery = useQuery(
    ["fetch_contacts", debouncedSearchText],
    () => fetchContacts(debouncedSearchText)
  );

  return (
    <ViewRoomChatsSearchContext.Provider
      value={{ searchText, setSearchText, fetchSearchContactsQuery }}
    >
      {children}
    </ViewRoomChatsSearchContext.Provider>
  );
};
