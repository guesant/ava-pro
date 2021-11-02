import List from "@mui/material/List";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useContextSelector } from "use-context-selector";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import ViewRoomNeedsAuth from "../ViewRoom/ViewRoomNeedsAuth";
import { IMessageAreaContact } from "../../../../../typings/MoodleAPI/IMessageAreaContact";
import ViewRoomChatsListItem from "./ViewRoomChatsListItem";
import { CoreMessage_DataForMessageArea_Conversations } from "../../../../../services/MoodleAPI/CoreMessage/DataForMessageArea/Conversations";
import { fetchUserId } from "../../../../../services/MoodleAPI/fetchUserId";

const useContacts = () => {
  const [contacts, setContacts] = useState<IMessageAreaContact[]>([]);

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

      setContacts(contacts);
    }
  }, [authedHttp]);

  const _fetchConversations = useCallback(
    debounce(fetchConversations, 3 * 1000, { leading: true }),
    [fetchConversations]
  );

  useEffect(() => {
    _fetchConversations();

    const intervalId = setInterval(() => {
      _fetchConversations();
    }, 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [_fetchConversations]);

  return contacts;
};

const ViewRoomChatsList = () => {
  const contacts = useContacts();
  return (
    <div>
      <ViewRoomNeedsAuth>
        <List>
          {contacts.map((contact) => (
            <ViewRoomChatsListItem key={contact.userid} contact={contact} />
          ))}
        </List>
      </ViewRoomNeedsAuth>
    </div>
  );
};

export default ViewRoomChatsList;
