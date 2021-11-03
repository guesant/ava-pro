import { useCallback } from "react";
import { useHistory } from "react-router";
import { useContextSelector } from "use-context-selector";
import StorageSettingsService from "../../../../services/StorageSettingsService";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import { routes } from "../../Routes";

export const useHandleRoomClick = () => {
  const history = useHistory();

  const selectedRoom = useContextSelector(
    SettingsContext,
    ({ settings: { selectedRoom } }) => selectedRoom
  );

  const handleRoomClick = useCallback(
    (roomUrl: string) => {
      const roomId = encodeURIComponent(roomUrl);

      if (roomId !== selectedRoom) {
        StorageSettingsService.updateSettings((settings) => {
          settings.selectedRoom = encodeURIComponent(roomUrl);
        });
      } else {
        history.push(routes.viewRoom({ id: encodeURIComponent(roomUrl) }));
      }
    },
    [history, selectedRoom]
  );

  return handleRoomClick;
};
