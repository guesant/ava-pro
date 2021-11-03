import { useContextSelector } from "use-context-selector";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import React, { useMemo } from "react";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import ListRoomsDetectedItem from "./ListRoomsDetectedItem";
import URLService from "../../../../services/URLService";

const useDetectedRooms = () => {
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  const allDetectedRooms = useContextSelector(
    SettingsContext,
    ({ settings: { detectedRooms } }) => detectedRooms
  );

  const detectedRooms = useMemo(
    () =>
      allDetectedRooms.filter((detectedRoom) => {
        const normalizedUrl = URLService.normalize(detectedRoom.url);
        return (
          rooms.findIndex(({ url }) =>
            normalizedUrl.startsWith(URLService.normalize(url))
          ) === -1
        );
      }),
    [allDetectedRooms, rooms]
  );

  return detectedRooms;
};

type IListRoomsDetectedProps = { header?: string };

const ListRoomsDetected: React.FC<IListRoomsDetectedProps> = ({ header }) => {
  const detectedRoomsWithoutResponse = useDetectedRooms();

  if (detectedRoomsWithoutResponse.length === 0) {
    return null;
  }

  return (
    <List>
      <ListSubheader>{header || "Ambientes Detectados"}</ListSubheader>
      {detectedRoomsWithoutResponse.map((i) => (
        <ListRoomsDetectedItem key={i.url} detectedRoom={i} />
      ))}
    </List>
  );
};

export default ListRoomsDetected;
