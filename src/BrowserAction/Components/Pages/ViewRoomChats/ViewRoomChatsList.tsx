import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useContextSelector } from "use-context-selector";
import ViewRoomChatsListItem from "./ViewRoomChatsListItem";
import { ViewRoomChatsContext } from "./ViewRoomChatsContext";
import Loading from "../../Loading";

const ViewRoomChatsList = () => {
  const isError = useContextSelector(
    ViewRoomChatsContext,
    ({ conversationsQuery: { isError } }) => isError
  );
  const isLoading = useContextSelector(
    ViewRoomChatsContext,
    ({ conversationsQuery: { isLoading } }) => isLoading
  );
  const contacts = useContextSelector(
    ViewRoomChatsContext,
    ({ conversationsQuery: { data } }) => data
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !contacts) {
    return (
      <Box sx={{ margin: 1 }}>
        <Alert severity={"error"}>Não foi possível carregar os chats.</Alert>
      </Box>
    );
  }

  return (
    <div>
      <List>
        {contacts.map((contact) => (
          <ViewRoomChatsListItem key={contact.userid} contact={contact} />
        ))}
      </List>
    </div>
  );
};

export default ViewRoomChatsList;
