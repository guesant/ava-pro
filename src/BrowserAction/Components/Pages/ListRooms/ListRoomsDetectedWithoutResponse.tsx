import { useContextSelector } from "use-context-selector";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { DetectedRoomResponse } from "../../../../typings/ISettings";
import { useMemo } from "react";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import ListRoomsDetectedItem from "./ListRoomsDetectedItem";
import URLService from "../../../../services/URLService";

const useDetectedRoomsWithoutResponse = () => {
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  const allDetectedRooms = useContextSelector(
    SettingsContext,
    ({ settings: { detectedRooms } }) => detectedRooms
  );

  const detectedRooms = useMemo(
    () =>
      allDetectedRooms
        .filter(
          (detectedRoom) => detectedRoom.response === DetectedRoomResponse.NONE
        )
        .filter((detectedRoom) => {
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

const ListRoomsDetectedWithoutResponse = () => {
  const detectedRoomsWithoutResponse = useDetectedRoomsWithoutResponse();

  if (detectedRoomsWithoutResponse.length === 0) {
    return null;
  }

  return (
    <List>
      <ListSubheader>Ambientes Detectados</ListSubheader>
      {detectedRoomsWithoutResponse.map((i) => (
        <ListRoomsDetectedItem key={i.url} detectedRoom={i} />
      ))}
    </List>
  );
};

export default ListRoomsDetectedWithoutResponse;
