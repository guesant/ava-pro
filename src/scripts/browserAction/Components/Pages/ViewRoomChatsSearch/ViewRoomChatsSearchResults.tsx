import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import MuiList from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { useContextSelector } from "use-context-selector";
import { IMessageAreaContact } from "../../../../../typings/MoodleAPI/IMessageAreaContact";
import Loading from "../../Loading";
import ViewRoomChatsListItem from "../ViewRoomChats/ViewRoomChatsListItem";
import { ViewRoomChatsSearchContext } from "./ViewRoomChatsSearchContext";

const ContactRow = ({
  index,
  style,
  data,
}: ListChildComponentProps<IMessageAreaContact[]>) => {
  const contact = useMemo(() => data[index], [data, index]);
  return (
    <div style={style}>
      <ViewRoomChatsListItem key={contact.userid} contact={contact} />
    </div>
  );
};

const itemSize = 57;

const ViewRoomChatsSearchResults = () => {
  const isLoading = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ fetchSearchContactsQuery: { isLoading } }) => isLoading
  );

  const isError = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ fetchSearchContactsQuery: { isError } }) => isError
  );

  const data = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ fetchSearchContactsQuery: { data } }) => data
  );

  const allContacts = useMemo(
    () =>
      data
        ? ([] as IMessageAreaContact[]).concat(data.contacts, data.noncontacts)
        : [],
    [data?.contacts, data?.noncontacts]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Box sx={{ margin: 1 }}>
        <Alert severity={"error"}>
          Infelizmente não foi possível realizar a busca de contatos. Tente
          novamente mais tarde.
        </Alert>
      </Box>
    );
  }

  if (!data || allContacts.length === 0) {
    return (
      <div>
        <Typography sx={{ margin: 2 }}>
          Nenhum contato foi encontrado. Tente outro termo de busca.
        </Typography>
      </div>
    );
  }

  const height = Math.min(7, allContacts.length) * itemSize;

  return (
    <div>
      <MuiList disablePadding>
        <FixedSizeList
          width={"100%"}
          height={height}
          itemSize={itemSize}
          itemData={allContacts}
          itemCount={allContacts.length}
        >
          {ContactRow}
        </FixedSizeList>
        {allContacts.length === 0 && <p>Nenhum resultado.</p>}
      </MuiList>
    </div>
  );
};

export default ViewRoomChatsSearchResults;
