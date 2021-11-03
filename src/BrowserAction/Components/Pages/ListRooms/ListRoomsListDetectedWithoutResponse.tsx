import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListRoomsListDetectedItem from "./ListRoomsListDetectedItem";
import { useDetectedRoomsWithoutResponse } from "./useDetectedRoomsWithoutResponse";

const ListRoomsListDetectedWithoutResponse = () => {
  const detectedRoomsWithoutResponse = useDetectedRoomsWithoutResponse();

  if (detectedRoomsWithoutResponse.length === 0) {
    return null;
  }

  return (
    <List>
      <ListSubheader>Ambientes Detectados</ListSubheader>
      {detectedRoomsWithoutResponse.map((i) => (
        <ListRoomsListDetectedItem key={i.url} detectedRoom={i} />
      ))}
    </List>
  );
};

export default ListRoomsListDetectedWithoutResponse;
