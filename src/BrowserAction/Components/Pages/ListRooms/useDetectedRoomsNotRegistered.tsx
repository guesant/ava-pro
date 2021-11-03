import { useContextSelector } from "use-context-selector";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import { useMemo } from "react";
import URLService from "../../../../services/URLService";

export const useDetectedRoomsNotRegistered = () => {
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  const allDetectedRooms = useContextSelector(
    SettingsContext,
    ({ settings: { detectedRooms } }) => detectedRooms
  );

  const detectedRoomsNotRegistered = useMemo(
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

  return detectedRoomsNotRegistered;
};
