import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import React from "react";
import ListRoomsListDetectedItem from "./ListRoomsListDetectedItem";
import { useDetectedRoomsNotRegistered } from "./useDetectedRoomsNotRegistered";

type IListRoomsDetectedProps = { header?: string };

const ListRoomsListDetected: React.FC<IListRoomsDetectedProps> = ({
  header,
}) => {
  const detectedRoomsNotRegistered = useDetectedRoomsNotRegistered();

  if (detectedRoomsNotRegistered.length === 0) {
    return null;
  }

  return (
    <List>
      <ListSubheader>{header || "Ambientes Detectados"}</ListSubheader>
      {detectedRoomsNotRegistered.map((detectedRoom) => (
        <ListRoomsListDetectedItem
          key={detectedRoom.url}
          detectedRoom={detectedRoom}
        />
      ))}
    </List>
  );
};

export default ListRoomsListDetected;
