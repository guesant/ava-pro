import { useCallback } from "react";
import { useHistory } from "react-router";
import { routes } from "../../Routes";

export const useHandleRoomClick = () => {
  const history = useHistory();

  const handleRoomClick = useCallback((roomUrl: string) => {
    history.push(routes.viewRoom({ id: encodeURIComponent(roomUrl) }));
  }, []);

  return handleRoomClick;
};
