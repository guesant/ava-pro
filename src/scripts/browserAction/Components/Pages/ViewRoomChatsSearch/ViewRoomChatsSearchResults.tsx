import { useContextSelector } from "use-context-selector";
import { ViewRoomChatsSearchContext } from "./ViewRoomChatsSearchContext";
import Loading from "../../Loading";
import MuiList from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import ViewRoomChatsListItem from "../ViewRoomChats/ViewRoomChatsListItem";
import { useMemo } from "react";
import { IMessageAreaContact } from "../../../../../typings/MoodleAPI/IMessageAreaContact";

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

const ViewRoomChatsSearchResults = () => {
  const isLoading = useContextSelector(
    ViewRoomChatsSearchContext,
    ({ fetchSearchContactsQuery: { isLoading } }) => isLoading
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

  if (!data || allContacts.length === 0) {
    return (
      <div>
        <Typography sx={{ margin: 2 }}>
          Nenhum contato foi encontrado. Tente outro termo de busca.
        </Typography>
      </div>
    );
  }

  const itemSize = 57;
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
